import React from 'react';
import { galleryItems } from '../data/gallery';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-black mb-4">
            Galeri{' '}
            <span className="bg-yellow-400 px-2 py-1 rounded-2xl border-2 border-black inline-block transform -rotate-1">
              Karya Kami
            </span>
          </h2>
          <p className="text-xl text-gray-700 font-medium max-w-2xl mx-auto">
            Lihat hasil karya gerobak berkualitas yang telah kami buat untuk para pelanggan UMKM di Jepara.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`bg-gray-50 rounded-2xl border-3 border-black p-4 hover:bg-yellow-50 transition-colors group ${
                index % 3 === 0 ? 'transform rotate-1' : 
                index % 3 === 1 ? 'transform -rotate-1' : 
                'transform rotate-0'
              }`}
            >
              <img 
                src={item.image}
                alt={item.alt}
                className="w-full h-48 object-cover rounded-xl border-2 border-black mb-3"
              />
              <h3 className="text-lg font-black text-black text-center">{item.title}</h3>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://wa.me/6282324159922?text=Halo%20SIINBOOTH%2C%20saya%20ingin%20melihat%20galeri%20lengkap%20gerobak%20Anda"
            className="bg-yellow-400 text-black px-8 py-4 rounded-2xl border-3 border-black font-black text-lg hover:bg-black hover:text-yellow-400 transition-colors inline-flex items-center gap-2"
          >
            Lihat Galeri Lengkap
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;