import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle, Send, ChevronDown } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: 'Residential',
    billRange: '₹1,000–₹3,000',
    area: '',
    message: ''
  });

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.address)}`;
  const whatsappNumber = CONTACT_INFO.whatsapp.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const fireContactEvent = (type: 'location' | 'email' | 'phone' | 'whatsapp') => {
    if (typeof window === 'undefined') return;
    const event = new CustomEvent('contact_card_click', {
      detail: { type }
    });
    window.dispatchEvent(event);
    if (typeof document !== 'undefined') {
      document.dispatchEvent(event);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = whatsappNumber;
    const message = [
      'New Solar Enquiry',
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email || 'N/A'}`,
      `Property Type: ${formData.propertyType}`,
      `Monthly Bill: ${formData.billRange}`,
      `Area / Pincode: ${formData.area}`,
      `Message: ${formData.message || 'N/A'}`
    ].join('\n');
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="bg-panel-navy py-24 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">Let's Get You Started on Solar</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Our team is ready to answer all your questions and guide you through the process.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100">
              <div className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-panel-navy">Get a Free Site Assessment</h2>
                  <p className="text-gray-500">Fill out the form and we'll call you back.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-panel-navy/60">Full Name*</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-5 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-solar-red transition-all"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-panel-navy/60">Mobile Number*</label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="w-full px-5 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-solar-red transition-all"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-panel-navy/60">Property Type*</label>
                      <select
                        className="w-full px-5 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-solar-red transition-all appearance-none"
                        value={formData.propertyType}
                        onChange={e => setFormData({ ...formData, propertyType: e.target.value })}
                      >
                        <option>Residential</option>
                        <option>Apartment</option>
                        <option>Commercial</option>
                        <option>Industrial</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-panel-navy/60">Monthly Bill*</label>
                      <select
                        className="w-full px-5 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-solar-red transition-all appearance-none"
                        value={formData.billRange}
                        onChange={e => setFormData({ ...formData, billRange: e.target.value })}
                      >
                        <option>₹1,000–₹3,000</option>
                        <option>₹3,000–₹6,000</option>
                        <option>₹6,000–₹10,000</option>
                        <option>₹10,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-panel-navy/60">Area / Pincode*</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Anna Nagar, 600040"
                      className="w-full px-5 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-solar-red transition-all"
                      value={formData.area}
                      onChange={e => setFormData({ ...formData, area: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-panel-navy/60">Message (Optional)</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your roof or energy needs..."
                      className="w-full px-5 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-solar-red transition-all resize-none"
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-solar-red text-white py-5 rounded-2xl font-bold text-lg hover:bg-solar-red/90 transition-all shadow-xl shadow-solar-red/20 flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Send My Request
                  </button>
                  <p className="text-center text-xs text-gray-400">
                    🔒 Your details are safe with us. We will contact you within 24 hours.
                  </p>
                </form>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-12">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-panel-navy">Contact Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { icon: MapPin, title: "Office Address", val: CONTACT_INFO.address, href: mapUrl, type: 'location', external: true },
                    { icon: Phone, title: "Phone Number", val: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}`, type: 'phone' },
                    { icon: Mail, title: "Email Address", val: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}`, type: 'email' },
                    { icon: MessageCircle, title: "WhatsApp", val: CONTACT_INFO.whatsapp, href: whatsappUrl, type: 'whatsapp', external: true }
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                      onClick={() => fireContactEvent(item.type as 'location' | 'email' | 'phone' | 'whatsapp')}
                      className="bg-gray-50 p-6 rounded-3xl space-y-3 block hover:shadow-lg hover:-translate-y-0.5 transition-all"
                    >
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-solar-red shadow-sm">
                        <item.icon size={20} />
                      </div>
                      <div className="font-bold text-panel-navy">{item.title}</div>
                      <div className="text-sm text-gray-500">{item.val}</div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-panel-navy">Follow Our Journey</h2>
                <div className="flex gap-4">
                  {[
                    { icon: Instagram, href: 'https://www.instagram.com/arkasolar.energy/', label: 'Instagram' },
                    { icon: Facebook, href: 'https://www.facebook.com/arkasolarenergy.in', label: 'Facebook' }
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      aria-label={item.label}
                      target="_blank"
                      rel="noreferrer"
                      className="w-14 h-14 bg-panel-navy text-white rounded-2xl flex items-center justify-center hover:bg-solar-red transition-all shadow-lg"
                    >
                      <item.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-panel-navy">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How much direct subsidy will I receive in 2026?",
                a: (
                  <div className="space-y-3">
                    <p>
                      Under the PM Surya Ghar Muft Bijli Yojana, the subsidy is credited directly to your bank account
                      (DBT) based on your system capacity:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>1 kW System: ₹30,000</li>
                      <li>2 kW System: ₹60,000</li>
                      <li>3 kW to 10 kW: Capped at ₹78,000 (Maximum)</li>
                    </ul>
                  </div>
                )
              },
              {
                q: "Is there a subsidy for my commercial office or factory?",
                a: (
                  <div className="space-y-3">
                    <p>
                      Direct cash subsidies are currently reserved for residential households. However, commercial and
                      industrial (C&I) clients in Tamil Nadu can claim Accelerated Depreciation (AD) and GST Input Tax
                      Credits, which can effectively reduce project costs by up to 25–30%.
                    </p>
                  </div>
                )
              },
              {
                q: "How long does it take for the money to reach my account?",
                a: (
                  <div className="space-y-3">
                    <p>
                      Once the installation is complete and the net meter is installed by TANGEDCO, we submit the
                      Commissioning Certificate on the National Portal. Usually, the subsidy is disbursed within 30
                      days of this final step.
                    </p>
                  </div>
                )
              },
              {
                q: "What is a net meter and why do I need it?",
                a: (
                  <div className="space-y-3">
                    <p>
                      A net meter is a bi-directional meter that replaces your existing TANGEDCO meter. It tracks two
                      things:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Import: Electricity you take from the grid (at night).</li>
                      <li>Export: Excess solar power you send to the grid (during the day).</li>
                    </ul>
                    <p>
                      At the end of the month, you only pay for the net difference. If you export more than you import,
                      the credit is carried forward to your next bill.
                    </p>
                  </div>
                )
              },
              {
                q: "Can I install a system larger than my sanctioned load?",
                a: (
                  <div className="space-y-3">
                    <p>
                      No. TANGEDCO rules state that your solar plant capacity cannot exceed your sanctioned load.
                    </p>
                    <p>
                      Partner Tip: If your sanctioned load is 3 kW but you want a 5 kW solar system, we can help you
                      apply for a load enhancement through the TANGEDCO portal before we start the installation.
                    </p>
                  </div>
                )
              },
              {
                q: "Do I need to pay for the net meter?",
                a: (
                  <div className="space-y-3">
                    <p>
                      Yes, there is a nominal fee for the meter and the application. In Chennai, the total cost for the
                      net meter, registration, and testing usually ranges between ₹3,000 to ₹8,000, depending on
                      whether it is a single-phase or three-phase connection.
                    </p>
                  </div>
                )
              },
              {
                q: "What happens to my excess power at the end of the year?",
                a: (
                  <div className="space-y-3">
                    <p>
                      In Tamil Nadu, the settlement period is usually from April to March. If you have excess units
                      credited in your account by March 31, TANGEDCO may pay you for those units at a pre-determined
                      feed-in tariff rate (usually lower than the retail rate), or it may reset to zero depending on the
                      latest TNERC regulations.
                    </p>
                  </div>
                )
              },
              {
                q: 'Why Choose "Your Solar Partner"?',
                a: (
                  <div className="space-y-3">
                    <p>
                      We don&apos;t just install panels; we manage the entire TANGEDCO paperwork for you. From
                      registering on the National Portal to getting your net meter commissioned, we ensure you get the
                      maximum subsidy with zero hassle.
                    </p>
                  </div>
                )
              }
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-panel-navy list-none">
                  {faq.q}
                  <ChevronDown size={20} className="group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-gray-500 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

