import React, { useState } from 'react';
import { X, ShoppingCart, Check, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppOrder = () => {
    const message = `Halo SIINBOOTH, saya ingin memesan ${product.name}.

Detail:
- Nama: ${formData.name}
- No. HP: ${formData.phone}
- Pesan: ${formData.message}

Mohon info lebih lanjut untuk proses pemesanan. Terima kasih!`;
    
    const whatsappUrl = `https://wa.me/6282324159922?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl border-4 border-black max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-black text-black mb-2">{product.name}</h2>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-600 font-medium">(4.9) • 50+ terjual</span>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="bg-gray-200 text-black p-2 rounded-xl border-2 border-black hover:bg-gray-300 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Image */}
            <div className="space-y-4">
              <img 
                src={product.image}
                alt={`${product.name} - Gerobak UMKM Jepara SIINBOOTH`}
                className="w-full h-80 object-cover rounded-xl border-2 border-black"
              />
              <div className="bg-yellow-400 text-black p-4 rounded-2xl border-2 border-black">
                <div className="text-2xl font-black">{product.price}</div>
                <div className="text-sm font-bold">Harga sudah termasuk ongkir Jepara & sekitarnya</div>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-black text-black mb-3">Deskripsi</h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-black text-black mb-3">Fitur & Keunggulan</h3>
                <div className="space-y-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Form */}
              <div className="bg-gray-50 p-6 rounded-2xl border-2 border-black">
                <h3 className="text-xl font-black text-black mb-4">Pesan Sekarang</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-black mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-black font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-black mb-2">No. WhatsApp</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-black font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="08xxxxxxxxxx"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-black mb-2">Pesan Tambahan</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border-2 border-black font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="Ceritakan kebutuhan khusus Anda..."
                    />
                  </div>
                  <button 
                    onClick={handleWhatsAppOrder}
                    className="w-full bg-yellow-400 text-black px-6 py-4 rounded-xl border-2 border-black font-black text-lg hover:bg-black hover:text-yellow-400 transition-colors inline-flex items-center gap-2 justify-center"
                  >
                    <ShoppingCart size={24} />
                    Pesan via WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;