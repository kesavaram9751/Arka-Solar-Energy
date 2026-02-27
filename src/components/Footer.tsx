import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, NAV_LINKS } from '../constants';
import arkaLogo from '../assets/arka Solar Logo.png';

export default function Footer() {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.address)}`;

  const fireContactEvent = (type: 'location' | 'email' | 'phone') => {
    if (typeof window === 'undefined') return;
    const event = new CustomEvent('footer_contact_click', {
      detail: { type }
    });
    window.dispatchEvent(event);
    if (typeof document !== 'undefined') {
      document.dispatchEvent(event);
    }
  };

  return (
    <footer className="bg-panel-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center overflow-hidden">
                <img src={arkaLogo} alt="Arka Solar Energy logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-none text-white">ARKA SOLAR</span>
                <span className="text-[10px] tracking-widest uppercase font-medium text-sun-yellow">Energy</span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Your Solar Partner. End-to-end solar EPC services in Chennai and Tamil Nadu. Powering a greener tomorrow, one roof at a time.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-solar-red transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-solar-red transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-solar-red transition-colors">
                <Youtube size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-solar-red transition-colors">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/70 hover:text-sun-yellow transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-white/70 hover:text-sun-yellow transition-colors text-sm">
                  PM Surya Ghar Subsidy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => fireContactEvent('location')}
                  className="flex items-start gap-3 text-sm text-white/70 hover:text-sun-yellow transition-colors"
                >
                  <MapPin size={18} className="text-sun-yellow shrink-0" />
                  <span>{CONTACT_INFO.address}</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    fireContactEvent('email');
                    window.location.href = `mailto:${CONTACT_INFO.email}`;
                  }}
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-sun-yellow transition-colors"
                >
                  <Mail size={18} className="text-sun-yellow shrink-0" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  onClick={() => fireContactEvent('phone')}
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-sun-yellow transition-colors"
                >
                  <Phone size={18} className="text-sun-yellow shrink-0" />
                  <span>{CONTACT_INFO.phone}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© 2026 Arka Solar Energy. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
