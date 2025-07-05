import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="bg-yellow-400 text-black px-4 py-2 rounded-2xl border-2 border-white font-black text-xl inline-block">
              SIINBOOTH
            </div>
            <p className="text-gray-300 font-medium">
              Gerobak kreatif terbaik dari Jepara untuk mendukung UMKM lokal Indonesia.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="bg-yellow-400 text-black p-2 rounded-xl border-2 border-white hover:bg-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="bg-yellow-400 text-black p-2 rounded-xl border-2 border-white hover:bg-white transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-black text-yellow-400 mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-300 hover:text-yellow-400 transition-colors font-medium">
                Home
              </a>
              <a href="#products" className="block text-gray-300 hover:text-yellow-400 transition-colors font-medium">
                Produk
              </a>
              <a href="#gallery" className="block text-gray-300 hover:text-yellow-400 transition-colors font-medium">
                Galeri
              </a>
              <a href="#testimonials" className="block text-gray-300 hover:text-yellow-400 transition-colors font-medium">
                Testimoni
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-yellow-400 transition-colors font-medium">
                Kontak
              </a>
            </div>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-lg font-black text-yellow-400 mb-4">Produk</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-yellow-400 transition-colors font-medium">
                Gerobak Warmindo
              </a>
              <a href="#" className="block text-gray-300 hover:text-yellow-400 transition-colors font-medium">
                Gerobak Kopi
              </a>
              <a href="#" className="block text-gray-300 hover:text-yellow-400 transition-colors font-medium">
                Gerobak Snack
              </a>
              <a href="#" className="block text-gray-300 hover:text-yellow-400 transition-colors font-medium">
                Gerobak Minuman
              </a>
              <a href="#" className="block text-gray-300 hover:text-yellow-400 transition-colors font-medium">
                Gerobak Custom
              </a>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-black text-yellow-400 mb-4">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-yellow-400" />
                <span className="text-gray-300 font-medium">+62 823-2415-9922</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-yellow-400" />
                <span className="text-gray-300 font-medium">siinbooth.official@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-yellow-400" />
                <span className="text-gray-300 font-medium">Jepara, Jawa Tengah</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t-2 border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 font-medium">
            © 2024 SIINBOOTH. All rights reserved. | Gerobak UMKM Jepara Terpercaya
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;