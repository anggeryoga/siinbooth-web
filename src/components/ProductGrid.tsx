import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import { Product } from '../types';

interface ProductGridProps {
  onViewDetails: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ onViewDetails }) => {
  return (
    <section id="products" className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-black mb-4">
            Katalog{' '}
            <span className="bg-yellow-400 px-2 py-1 rounded-2xl border-2 border-black inline-block transform -rotate-1">
              Gerobak Terbaik
            </span>
          </h2>
          <p className="text-xl text-gray-700 font-medium max-w-2xl mx-auto">
            Pilih gerobak yang sesuai dengan usaha Anda. Semua dibuat dengan bahan berkualitas tinggi dan desain yang menarik.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;