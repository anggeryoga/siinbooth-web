import React from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white border-b-4 border-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-yellow-400 text-black px-4 py-2 rounded-2xl border-2 border-black font-black text-xl">
              SIINBOOTH
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-black font-bold hover:text-yellow-600 transition-colors">
              Home
            </a>
            <a href="#products" className="text-black font-bold hover:text-yellow-600 transition-colors">
              Produk
            </a>
            <a href="#gallery" className="text-black font-bold hover:text-yellow-600 transition-colors">
              Galeri
            </a>
            <a href="#testimonials" className="text-black font-bold hover:text-yellow-600 transition-colors">
              Testimoni
            </a>
            <a href="#contact" className="text-black font-bold hover:text-yellow-600 transition-colors">
              Kontak
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="https://wa.me/6282324159922?text=Halo%20SIINBOOTH%2C%20saya%20tertarik%20dengan%20gerobak%20Anda"
              className="bg-yellow-400 text-black px-6 py-3 rounded-2xl border-3 border-black font-black hover:bg-black hover:text-yellow-400 transition-colors inline-flex items-center gap-2"
            >
              <ShoppingCart size={20} />
              Pesan Sekarang
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden bg-yellow-400 text-black p-2 rounded-2xl border-2 border-black"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t-2 border-black py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-black font-bold hover:text-yellow-600 transition-colors">
                Home
              </a>
              <a href="#products" className="text-black font-bold hover:text-yellow-600 transition-colors">
                Produk
              </a>
              <a href="#gallery" className="text-black font-bold hover:text-yellow-600 transition-colors">
                Galeri
              </a>
              <a href="#testimonials" className="text-black font-bold hover:text-yellow-600 transition-colors">
                Testimoni
              </a>
              <a href="#contact" className="text-black font-bold hover:text-yellow-600 transition-colors">
                Kontak
              </a>
              <a 
                href="https://wa.me/6282324159922?text=Halo%20SIINBOOTH%2C%20saya%20tertarik%20dengan%20gerobak%20Anda"
                className="bg-yellow-400 text-black px-6 py-3 rounded-2xl border-3 border-black font-black hover:bg-black hover:text-yellow-400 transition-colors inline-flex items-center gap-2 justify-center"
              >
                <ShoppingCart size={20} />
                Pesan Sekarang
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;