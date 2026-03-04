import React from 'react';
import { CheckCircle2, Zap, Building2, Factory, Home, Wrench, ClipboardCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import serviceImage2 from '../assets/image2.jpg';
import serviceImage3 from '../assets/image3.jpg';
import serviceImage7 from '../assets/image7.jpg';
import serviceImage5 from '../assets/image5.jpg';
import servicesBanner from '../assets/services-banner.jpg';

const ICON_MAP: Record<string, any> = {
  Home: Home,
  Factory: Factory,
  Building2: Building2,
  Wrench: Wrench
};
const SERVICE_IMAGES: Record<string, string> = {
  residential: serviceImage7,
  commercial: serviceImage3,
  apartment: serviceImage2,
  om: serviceImage5
};

export default function Services() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <section
        className="relative min-h-[50vh] flex items-center justify-center text-white text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(43, 47, 143, 0.5), rgba(43, 47, 143, 0.5)), url(${servicesBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold">Our Solar EPC Services</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Complete end-to-end solar solutions for homes, businesses, and industries in Chennai.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24 space-y-32">
        {SERVICES.map((service, i) => {
          const Icon = ICON_MAP[service.icon];
          const isEven = i % 2 === 0;

          return (
            <div key={service.id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                <div className={!isEven ? 'lg:order-2' : ''}>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-solar-red/5 rounded-[2.5rem] rotate-3"></div>
                    <img
                      src={SERVICE_IMAGES[service.id] ?? `https://picsum.photos/seed/service-${service.id}/800/600`}
                      alt={service.title}
                      className="relative z-10 rounded-[2rem] shadow-xl object-cover w-full h-[400px]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className={`space-y-8 ${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-solar-red/10 rounded-2xl flex items-center justify-center text-solar-red">
                      <Icon size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-panel-navy">{service.title}</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {service.fullDescription}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm font-medium text-panel-navy/80">
                        <CheckCircle2 className="text-leaf-green shrink-0" size={18} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-solar-red text-white px-8 py-4 rounded-full font-bold hover:bg-solar-red/90 transition-all shadow-lg"
                  >
                    Get {service.title.split(' ')[0]} Quote
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Net Metering Support */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="w-16 h-16 bg-sun-yellow/10 rounded-2xl flex items-center justify-center text-sun-yellow">
                  <ClipboardCheck size={36} />
                </div>
                <h2 className="text-3xl font-bold text-panel-navy">Net Metering & TANGEDCO Support</h2>
                <p className="text-gray-600 leading-relaxed">
                  Navigating government paperwork shouldn't be your problem. Our team has in-depth expertise in the entire TANGEDCO net-metering process. We handle every document, application, inspection, and approval — so you don't have to.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Initial application submission",
                    "Site inspection coordination",
                    "Bi-directional meter installation",
                    "Final commissioning & handover"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 font-semibold text-panel-navy">
                      <div className="w-2 h-2 bg-solar-red rounded-full"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-panel-navy p-10 rounded-3xl text-white space-y-8">
                <h3 className="text-2xl font-bold">Why EPC Matters?</h3>
                <div className="space-y-6">
                  {[
                    { q: "Site Survey", a: "Detailed engineering assessment" },
                    { q: "System Design", a: "Custom 3D design for your roof" },
                    { q: "Procurement", a: "Tier-1 certified components only" },
                    { q: "Installation", a: "Trained in-house expert team" }
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/10 pb-4">
                      <span className="text-white/60">{row.q}</span>
                      <span className="font-bold text-sun-yellow">{row.a}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
