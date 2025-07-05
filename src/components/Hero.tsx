import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-yellow-400 text-black px-4 py-2 rounded-2xl border-2 border-black font-black text-sm">
                  #1 GEROBAK JEPARA
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-black font-bold ml-1">5.0</span>
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black leading-tight">
                Gerobak Kreatif Untuk{' '}
                <span className="bg-yellow-400 px-2 py-1 rounded-2xl border-2 border-black inline-block transform -rotate-1">
                  Dagang Kekinian
                </span>
              </h1>
              
              <p className="text-xl text-gray-700 font-medium leading-relaxed">
                Tingkatkan usaha UMKM Anda dengan gerobak berkualitas tinggi dari Jepara. 
                Dibuat dengan kayu jati pilihan dan desain modern yang menarik pelanggan.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#products"
                className="bg-yellow-400 text-black px-8 py-4 rounded-2xl border-3 border-black font-black text-lg hover:bg-black hover:text-yellow-400 transition-colors inline-flex items-center gap-2 justify-center"
              >
                Lihat Katalog
                <ArrowRight size={24} />
              </a>
              <a 
                href="https://wa.me/6282324159922?text=Halo%20SIINBOOTH%2C%20saya%20ingin%20konsultasi%20gerobak"
                className="bg-black text-yellow-400 px-8 py-4 rounded-2xl border-3 border-black font-black text-lg hover:bg-yellow-400 hover:text-black transition-colors inline-flex items-center gap-2 justify-center"
              >
                Konsultasi Gratis
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-3xl font-black text-black">200+</div>
                <div className="text-sm font-bold text-gray-600">Gerobak Terjual</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-black">50+</div>
                <div className="text-sm font-bold text-gray-600">UMKM Partner</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-black">100%</div>
                <div className="text-sm font-bold text-gray-600">Kayu Jati</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-yellow-400 rounded-3xl border-4 border-black p-8 transform rotate-3">
              <img 
                src="https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Gerobak UMKM Jepara SIINBOOTH"
                className="w-full h-96 object-cover rounded-2xl border-2 border-black"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-black text-yellow-400 px-4 py-2 rounded-2xl border-2 border-black font-black text-sm rotate-12">
              KUALITAS TERBAIK!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;