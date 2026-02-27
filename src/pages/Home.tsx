import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Sun, ShieldCheck, Award, CheckCircle2, Star, ChevronRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/solar-hero/1920/1080?brightness=0.6"
            alt="Solar Rooftop"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-panel-navy/90 via-panel-navy/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-solar-red/20 border border-solar-red/30 text-solar-red text-xs font-bold uppercase tracking-wider">
                <Sun size={14} />
                Your Solar Partner
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Powering Chennai with <br />
                <span className="text-sun-yellow">Clean, Reliable</span> <br />
                Solar Energy.
              </h1>
              <p className="text-lg text-white/80 max-w-xl leading-relaxed">
                ARKA Solar Energy is your trusted EPC partner for end-to-end solar solutions. From custom engineering to final grid connection, we make switching to solar seamless, profitable, and hassle-free.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/contact"
                  className="bg-solar-red text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-solar-red/90 transition-all shadow-xl shadow-solar-red/30 flex items-center gap-2 group"
                >
                  Get a Free Site Assessment
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
                >
                  Calculate Your Savings
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex justify-end"
            >
              <div className="bg-white p-8 rounded-3xl shadow-2xl space-y-6 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-solar-red/10 rounded-2xl flex items-center justify-center text-solar-red">
                    <Zap size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-dark-charcoal">50+</div>
                    <div className="text-xs text-gray-500 uppercase font-semibold">Installations</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sun-yellow/10 rounded-2xl flex items-center justify-center text-sun-yellow">
                    <Sun size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-dark-charcoal">500 kW+</div>
                    <div className="text-xs text-gray-500 uppercase font-semibold">Capacity</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-leaf-green/10 rounded-2xl flex items-center justify-center text-leaf-green">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-dark-charcoal">100%</div>
                    <div className="text-xs text-gray-500 uppercase font-semibold">Happy Clients</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-50 py-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Zap, text: "Premium Tier-1 Equipment" },
              { icon: Award, text: "TANGEDCO Paperwork Handled" },
              { icon: ShieldCheck, text: "Expert Engineering Team" },
              { icon: Sun, text: "MNRE Certified Installations" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center gap-3 text-center md:text-left">
                <item.icon className="text-solar-red" size={24} />
                <span className="text-sm font-semibold text-panel-navy/80">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PM Surya Ghar Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="subsidy-gradient rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl shadow-sun-yellow/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-8">
                <div className="inline-block bg-solar-red text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  🇮🇳 Government of India Scheme
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-panel-navy leading-tight">
                  Claim Up to ₹78,000 with the <br />
                  <span className="text-solar-red">PM Surya Ghar Yojana!</span>
                </h2>
                <p className="text-lg text-panel-navy/80 leading-relaxed">
                  Make the smart switch to solar with government support. Under the PM Surya Ghar: Muft Bijli Yojana, residential installations are highly subsidized — giving you up to 300 units of free electricity every month.
                </p>
                <ul className="space-y-4">
                  {[
                    "Zero electricity bills for up to 300 units",
                    "Seamless government portal registration assistance",
                    "100% documentation handled by our team",
                    "Net-metering and TANGEDCO approval"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-semibold text-panel-navy">
                      <CheckCircle2 className="text-leaf-green" size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-solar-red text-white px-8 py-4 rounded-full font-bold hover:bg-solar-red/90 transition-all shadow-lg"
                >
                  Check My Subsidy Eligibility
                  <ChevronRight size={20} />
                </Link>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white shadow-xl">
                <h3 className="text-xl font-bold text-panel-navy mb-6 border-b border-panel-navy/10 pb-4">
                  Subsidy Amount by Capacity
                </h3>
                <div className="space-y-4">
                  {[
                    { cap: "1 kW System", amt: "₹30,000" },
                    { cap: "2 kW System", amt: "₹60,000" },
                    { cap: "3 kW System", amt: "₹78,000" }
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center py-2">
                      <span className="font-medium text-panel-navy/70">{row.cap}</span>
                      <span className="text-xl font-bold text-solar-red">{row.amt}</span>
                    </div>
                  ))}
                  <div className="pt-4 text-xs text-panel-navy/50 italic">
                    * Maximum subsidy capped for residential installations as per MNRE guidelines.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-panel-navy">Comprehensive Solar Solutions</h2>
            <p className="text-gray-600">As a full-service EPC company, we handle your entire project from day one.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 group hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-solar-red/5 rounded-2xl flex items-center justify-center text-solar-red mb-6 group-hover:bg-solar-red group-hover:text-white transition-colors">
                  <Zap size={28} />
                </div>
                <h3 className="text-2xl font-bold text-panel-navy mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <Link to="/services" className="text-solar-red font-bold flex items-center gap-2 group/link">
                  Learn More
                  <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl font-bold text-panel-navy">How We Bring Power to Your Roof</h2>
            <p className="text-gray-600">A simple, transparent 4-step process.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-100 z-0"></div>
            {[
              { id: '01', title: 'Site Inspection', desc: 'We visit your property in Chennai to assess your roof, shading, and energy consumption.' },
              { id: '02', title: 'Custom Engineering', desc: 'Our experts create a precise 3D design and select the best equipment for your needs.' },
              { id: '03', title: 'Flawless Installation', desc: 'Our trained technicians install your system safely, cleanly, and to the highest codes.' },
              { id: '04', title: 'Commissioning', desc: 'We finalize grid connections, secure your subsidies, and hand over your power plant!' }
            ].map((step, i) => (
              <div key={i} className="relative z-10 text-center space-y-6">
                <div className="w-16 h-16 bg-white border-4 border-solar-red rounded-full flex items-center justify-center text-solar-red font-bold text-xl mx-auto shadow-lg">
                  {step.id}
                </div>
                <h3 className="text-xl font-bold text-panel-navy">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-panel-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl font-bold">Why Chennai Trusts Arka Solar Energy</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: MapPin, title: "Local Expertise", text: "Deep understanding of Chennai's climate and structural requirements." },
              { icon: Zap, title: "Quality Components", text: "We use Tier-1 modules and high-efficiency inverters from trusted brands." },
              { icon: ShieldCheck, title: "End-to-End EPC", text: "From site survey to final commissioning, we handle absolutely everything." },
              { icon: Award, title: "Transparent Pricing", text: "No hidden costs. Honest ROI projections you can count on." },
              { icon: Sun, title: "Subsidy Specialists", text: "Experts in PM Surya Ghar and TANGEDCO net-metering paperwork." },
              { icon: ShieldCheck, title: "25+ Year Support", text: "Our relationship doesn't end at installation. We're your long-term partner." }
            ].map((feature, i) => (
              <div key={i} className="space-y-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-sun-yellow">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl font-bold text-panel-navy">What Our Customers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Ramesh K.", loc: "Anna Nagar, Chennai", text: "Arka Solar made the subsidy process so easy. Our electricity bill is now almost zero!" },
              { name: "Priya S.", loc: "OMR, Chennai", text: "Professional team, clean installation, and they handled all the TANGEDCO paperwork. Highly recommended!" },
              { name: "Suresh M.", loc: "Ambattur Industrial Estate", text: "Excellent service for our factory unit. The ROI calculations were spot on and the system has been flawless." }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
                <div className="flex text-sun-yellow">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 italic">"{t.text}"</p>
                <div className="pt-4 border-t border-gray-50">
                  <div className="font-bold text-panel-navy">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.loc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-solar-red rounded-[2.5rem] p-8 md:p-16 text-white text-center space-y-8 shadow-2xl shadow-solar-red/20">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Eliminate Your Power Bill?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Join 50+ happy families and businesses in Chennai who have switched to clean solar energy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-solar-red px-10 py-4 rounded-full font-bold text-lg hover:bg-sun-yellow hover:text-panel-navy transition-all shadow-xl"
              >
                Request Free Call Back
              </Link>
              <a
                href="tel:+919876543210"
                className="bg-panel-navy text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-panel-navy/90 transition-all border border-white/10"
              >
                Call Us: +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
