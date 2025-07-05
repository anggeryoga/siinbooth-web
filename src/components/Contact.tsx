import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo SIINBOOTH,

Nama: ${formData.name}
Email: ${formData.email}
Pesan: ${formData.message}

Terima kasih!`;
    
    const whatsappUrl = `https://wa.me/6282324159922?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const faqs = [
    {
      question: "Berapa lama proses pembuatan gerobak?",
      answer: "Proses pembuatan gerobak standar membutuhkan 7-14 hari kerja. Untuk custom design bisa memakan waktu 2-3 minggu."
    },
    {
      question: "Apakah ada garansi untuk gerobak?",
      answer: "Ya, kami memberikan garansi 1 tahun untuk kerusakan material dan 6 bulan untuk aksesoris tambahan."
    },
    {
      question: "Bagaimana sistem pembayaran?",
      answer: "Kami menerima pembayaran DP 50% di awal, sisanya setelah barang selesai. Bisa cash, transfer, atau cicilan."
    },
    {
      question: "Apakah bisa kirim ke luar Jepara?",
      answer: "Bisa! Kami melayani pengiriman ke seluruh Indonesia. Ongkir disesuaikan dengan jarak dan berat barang."
    }
  ];

  return (
    <section id="contact" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-black mb-4">
            Hubungi{' '}
            <span className="bg-yellow-400 px-2 py-1 rounded-2xl border-2 border-black inline-block transform -rotate-1">
              Kami
            </span>
          </h2>
          <p className="text-xl text-gray-700 font-medium max-w-2xl mx-auto">
            Punya pertanyaan atau ingin konsultasi gratis? Jangan ragu untuk menghubungi kami!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-black text-black mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border-2 border-black">
                  <div className="bg-yellow-400 p-3 rounded-xl border-2 border-black">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="font-black text-black">WhatsApp</div>
                    <div className="text-gray-700 font-medium">+62 823-2415-9922</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border-2 border-black">
                  <div className="bg-yellow-400 p-3 rounded-xl border-2 border-black">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="font-black text-black">Email</div>
                    <div className="text-gray-700 font-medium">siinbooth.official@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border-2 border-black">
                  <div className="bg-yellow-400 p-3 rounded-xl border-2 border-black">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="font-black text-black">Alamat</div>
                    <div className="text-gray-700 font-medium">Jepara, Jawa Tengah</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border-2 border-black">
                  <div className="bg-yellow-400 p-3 rounded-xl border-2 border-black">
                    <Clock className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="font-black text-black">Jam Operasional</div>
                    <div className="text-gray-700 font-medium">Senin - Sabtu: 08:00 - 17:00</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA Box */}
            <div className="bg-yellow-400 p-6 rounded-2xl border-3 border-black">
              <h3 className="text-xl font-black text-black mb-3">Konsultasi Gratis!</h3>
              <p className="text-black font-medium mb-4">
                Dapatkan konsultasi gratis untuk menentukan gerobak yang tepat untuk usaha Anda.
              </p>
              <a 
                href="https://wa.me/6282324159922?text=Halo%20SIINBOOTH%2C%20saya%20ingin%20konsultasi%20gratis"
                className="bg-black text-yellow-400 px-6 py-3 rounded-xl border-2 border-black font-black hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2"
              >
                <MessageCircle size={20} />
                Mulai Konsultasi
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-black text-black mb-6">Kirim Pesan</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-black mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-black font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-black mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-black font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="nama@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-black mb-2">Pesan</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-black font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Ceritakan kebutuhan Anda..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-yellow-400 text-black px-6 py-4 rounded-xl border-2 border-black font-black text-lg hover:bg-black hover:text-yellow-400 transition-colors"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
            
            {/* FAQ Section */}
            <div>
              <h3 className="text-2xl font-black text-black mb-6">FAQ</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-2xl border-2 border-black">
                    <h4 className="font-black text-black mb-2">{faq.question}</h4>
                    <p className="text-gray-700 font-medium">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;