import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const handleWhatsAppOrder = () => {
    const message = `Halo SIINBOOTH, saya tertarik dengan ${product.name}. Bisa minta detail lebih lanjut?`;
    const whatsappUrl = `https://wa.me/6282324159922?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl border-3 border-black p-6 hover:bg-yellow-50 transition-colors group">
      <div className="relative mb-4">
        <img 
          src={product.image}
          alt={`${product.name} - Gerobak UMKM Jepara SIINBOOTH`}
          className="w-full h-48 object-cover rounded-xl border-2 border-black"
        />
        <div className="absolute top-2 right-2 bg-yellow-400 text-black px-3 py-1 rounded-xl border-2 border-black font-black text-xs">
          {product.category.toUpperCase()}
        </div>
      </div>
      
      <div className="space-y-3">
        <h3 className="text-xl font-black text-black">{product.name}</h3>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-gray-600 font-medium text-sm">(4.9)</span>
        </div>
        
        <p className="text-gray-700 font-medium text-sm line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="text-2xl font-black text-black">{product.price}</div>
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={() => onViewDetails(product)}
            className="flex-1 bg-white text-black px-4 py-2 rounded-xl border-2 border-black font-bold hover:bg-gray-100 transition-colors"
          >
            Detail
          </button>
          <button 
            onClick={handleWhatsAppOrder}
            className="flex-1 bg-yellow-400 text-black px-4 py-2 rounded-xl border-2 border-black font-bold hover:bg-black hover:text-yellow-400 transition-colors inline-flex items-center gap-2 justify-center"
          >
            <ShoppingCart size={16} />
            Pesan
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;