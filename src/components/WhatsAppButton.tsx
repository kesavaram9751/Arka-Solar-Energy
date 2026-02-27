import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export default function WhatsAppButton() {
  const message = encodeURIComponent("Hi Arka Solar, I'm interested in learning about solar for my home/business. Please call me back.");
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp.replace(/\s+/g, '')}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute right-full mr-3 bg-white text-dark-charcoal px-3 py-1.5 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-black/5 pointer-events-none">
        Chat with us
      </span>
    </a>
  );
}
