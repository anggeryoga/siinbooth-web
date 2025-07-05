import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-black mb-4">
            Testimoni{' '}
            <span className="bg-yellow-400 px-2 py-1 rounded-2xl border-2 border-black inline-block transform -rotate-1">
              Pelanggan
            </span>
          </h2>
          <p className="text-xl text-gray-700 font-medium max-w-2xl mx-auto">
            Dengarkan cerita sukses para pelanggan UMKM yang telah mempercayai gerobak SIINBOOTH untuk usaha mereka.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`bg-white rounded-2xl border-3 border-black p-6 hover:bg-yellow-50 transition-colors group ${
                index % 3 === 0 ? 'transform rotate-1' : 
                index % 3 === 1 ? 'transform -rotate-1' : 
                'transform rotate-0'
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-2 border-black object-cover"
                />
                <div>
                  <h3 className="text-lg font-black text-black">{testimonial.name}</h3>
                  <p className="text-sm font-bold text-gray-600">{testimonial.business}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-yellow-400 opacity-50" />
                <p className="text-gray-700 font-medium leading-relaxed pl-6">
                  "{testimonial.review}"
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-yellow-400 text-black px-8 py-4 rounded-2xl border-3 border-black font-black text-lg inline-block">
            ⭐ Rating 4.9/5 dari 50+ Pelanggan
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;