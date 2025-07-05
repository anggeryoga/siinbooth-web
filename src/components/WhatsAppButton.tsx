import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = "Halo SIINBOOTH, saya tertarik dengan gerobak Anda. Bisa minta informasi lebih lanjut?";
    const whatsappUrl = `https://wa.me/6282324159922?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-2xl border-3 border-black shadow-lg hover:bg-green-600 transition-colors z-50 animate-pulse"
      title="Chat WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default WhatsAppButton;