import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Sun, ShieldCheck, Award, CheckCircle2, Star, ChevronRight, MapPin, MessageCircle, Facebook, Instagram } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { SERVICES, CONTACT_INFO } from '../constants';
// import bannerimage from '../assets/bg.jpg';
import bannerimage2 from '../assets/bg2.jpeg';

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
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.hash]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={bannerimage2}
            alt="Solar Rooftop"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-panel-navy/90 via-panel-navy/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3 text-white space-y-8"
            >

              <h1 className="text-4xl md:text-7xl font-bold leading-tight">
                <span className="text-sun-yellow">Best Solar Company in Chennai | </span>
                Get solar subsidy and enjoy zero electricity bills
              </h1>
              <div className="text-lg text-white/80 max-w-2xl leading-relaxed space-y-4">
                <p>
                  <strong>Arka Solar Energy</strong> is one of the <strong>best solar panel installation companies in Chennai</strong>.
                  We provide high-quality <strong>rooftop solar systems</strong> for homes, businesses, and industries across Tamil Nadu.
                  Our expert team helps customers install solar panels with government subsidy
                  through the <strong>PM Surya Ghar scheme</strong> in your own neighborhood.
                </p>

              </div>
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
                    <div className="text-2xl font-bold text-dark-charcoal">200+</div>
                    <div className="text-xs text-gray-500 uppercase font-semibold">Installations</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sun-yellow/10 rounded-2xl flex items-center justify-center text-sun-yellow">
                    <Sun size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-dark-charcoal">2 MW</div>
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
              { icon: ShieldCheck, text: "Expert Engineering Team" },
              { icon: Sun, text: "MNRE Certified Installations" },
              { icon: Award, text: "TANGEDCO Paperwork Handled" }
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
      <section id="pm-surya-ghar" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="subsidy-gradient rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl shadow-sun-yellow/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-8">
                <div className="inline-block bg-solar-red text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  🇮🇳 Government of India Scheme
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-panel-navy leading-tight">
                  PM Surya Ghar Subsidy Details: <br />
                  <span className="text-solar-red">Claim Up to ₹78,000!</span>
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
            <h2 className="text-4xl font-bold text-panel-navy">Solar Panel Installation in Chennai</h2>
            <p className="text-gray-600">Arka Solar Energy provides the <strong>best solar panel installation in Chennai</strong> for homes and businesses. Tamilnadu enjoys over 3,000 hours of sunshine per year, making rooftop solar the most effective energy option in the city. We design systems that withstand coastal humidity, ensuring durability for <Link to="/services" className="hover:underline text-solar-red">Residential Solar Installation</Link> and <Link to="/services" className="hover:underline text-solar-red">Commercial Solar Solutions</Link> across Chennai.</p>
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
            <h2 className="text-4xl font-bold text-panel-navy">Arka Solar Installation Process</h2>
            <p className="text-gray-600">Our seamless 5-step process for your <strong>solar panel installation in Chennai</strong>.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-100 z-0"></div>
            {[
              { id: '01', title: 'Site Inspection', desc: 'We visit your property in Chennai to assess your roof, shading, and energy consumption.' },
              { id: '02', title: 'Custom Engineering', desc: 'Our experts create a precise 3D design and select the best equipment for your needs.' },
              { id: '03', title: 'Flawless Installation', desc: 'Our trained technicians install your system safely, cleanly, and to the highest codes.' },
              { id: '04', title: 'Commissioning', desc: 'We finalize grid connections, secure your subsidies, and hand over your power plant!' },
              { id: '05', title: 'Netmeter', desc: 'We handle all utility liaisoning and meter installation to credit your surplus solar energy back to the grid.' }
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
            <h2 className="text-4xl font-bold">Why Choose Arka Solar Energy?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: MapPin, title: "Local Expertise", text: "Deep understanding of Chennai's climate and structural requirements." },
              { icon: Zap, title: "Quality Components", text: "We use Tier-1 modules and high-efficiency inverters from trusted brands." },
              { icon: ShieldCheck, title: "End-to-End EPC", text: "From site survey to final commissioning, we handle absolutely everything." },
              { icon: Award, title: "Transparent Pricing", text: "No hidden costs. Honest ROI projections you can count on." },
              { icon: Sun, title: "Subsidy Specialists", text: "Experts in PM Surya Ghar and TANGEDCO net-metering paperwork." },
              { icon: ShieldCheck, title: "Customer Services", text: "Our relationship doesn't end at installation. We're your long-term partner." }
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



      {/* Detailed Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl font-bold text-panel-navy">Best Solar Company in Chennai: Your Rooftop Solar Partner</h1>
              <p className="text-gray-600 leading-relaxed">
                Installing a <strong>rooftop solar system in Chennai</strong> offers incredible benefits for both residential and commercial properties. As the most reliable <strong>solar installer near me</strong>, Arka Solar Energy provides top-tier <Link to="/services" className="text-solar-red hover:underline">residential solar installation Chennai</Link> and <Link to="/services" className="text-solar-red hover:underline">commercial solar installation Chennai</Link> services that ensure high ROI.
              </p>
              <p className="text-gray-600 leading-relaxed">
                If you are searching for a <strong>solar company near me</strong> in Tamil Nadu, our team handles everything—from explaining the <strong>solar panel price in Chennai</strong> to securing your <strong>solar rooftop subsidy Chennai</strong>. Whether you need a <strong>3kw solar system price in Chennai</strong> or information on the latest government policies, we are here to help.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Residential Solar Installation", desc: "Perfect for single houses and villas to eliminate monthly EB bills.", link: "/#pm-surya-ghar" },
                  { title: "Commercial Solar Solutions", desc: "Robust engineering for industries and apartments in Chennai.", link: "/services" },
                  { title: "Massive Cost Savings", desc: "Reduce electricity expenses by up to 90% via net-metering.", link: "/contact" },
                  { title: "Increased Property Value", desc: "Solar-equipped buildings have higher resale value and better ratings.", link: "/about" }
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-panel-navy mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-500 mb-4">{item.desc}</p>
                    </div>
                    <Link to={item.link} className="text-solar-red text-xs font-bold hover:underline">Learn more →</Link>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our systems are designed to withstand Chennai's coastal humidity and high temperatures. Whether you are looking for <Link to="/about" className="text-solar-red hover:underline">Arka Solar Energy</Link> details or specific technical advice, our experts are here to help.
              </p>
            </div>
            <div className="relative">
              <div className="bg-panel-navy rounded-[3rem] p-8 md:p-12 text-white space-y-8 shadow-2xl">
                <h3 className="text-2xl font-bold">Key Benefits at a Glance</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-sun-yellow shrink-0" />
                    <div>
                      <h4 className="font-bold">25+ Years Life Expectancy</h4>
                      <p className="text-white/60 text-sm">Our Tier-1 solar modules are built to last for decades with minimum maintenance.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-sun-yellow shrink-0" />
                    <div>
                      <h4 className="font-bold">Eco-Friendly Investment</h4>
                      <p className="text-white/60 text-sm">Reduce your carbon footprint and contribute to a greener Chennai.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-sun-yellow shrink-0" />
                    <div>
                      <h4 className="font-bold">High Return on Investment</h4>
                      <p className="text-white/60 text-sm">Most systems pay for themselves within 3-4 years of installation.</p>
                    </div>
                  </li>
                </ul>
                <div className="pt-8 border-t border-white/10">
                  <p className="text-xs text-white/50 italic text-center">
                    Data based on average solar irradiation levels in Tamil Nadu as per <a href="https://mnre.gov.in/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">MNRE guidelines</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-panel-navy">Common Questions About Solar in Chennai</h2>
            <p className="text-gray-600">Everything you need to know about making the switch to renewable energy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "What is the cost of solar panel installation in Chennai?",
                a: "The <strong>cost of solar panel installation in Chennai</strong> varies based on capacity. For residential setups, a <strong>3kw solar system price in Chennai</strong> typically starts around ₹1.8 Lakhs to ₹2.2 Lakhs (pre-subsidy). For accurate <strong>solar panel price Chennai</strong> details, <Link to='/contact' class='text-solar-red hover:underline'>get a free site assessment</Link> today."
              },
              {
                q: "How to apply for solar subsidy in Tamil Nadu?",
                a: "Applying for the <strong>PM Surya Ghar solar subsidy Chennai</strong> is easy with Arka. The scheme provides up to ₹78,000 for <strong>home solar system Chennai</strong> projects. Our experts guide you on <strong>how to apply solar subsidy Tamil Nadu</strong> through the official portal."
              },
              {
                q: "What are the benefits of solar energy for homes in Chennai?",
                a: "The <strong>benefits of solar energy for homes</strong> include eliminating up to 90% of your EB bill, increasing property value, and contributing to a greener city. It is the most effective <strong>solar energy company Chennai</strong> solution for rising electricity tariffs."
              },
              {
                q: "How do I find a reliable solar installer near me?",
                a: "Arka Solar Energy is the <strong>best solar company in Chennai</strong> with a proven track record. We are a trusted <strong>solar energy company Chennai</strong> providing certified <strong>rooftop solar installation Chennai</strong> with 25+ years of panel warranty."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <h4 className="text-lg font-bold text-panel-navy mb-4">{faq.q}</h4>
                <div className="text-gray-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }}></div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 text-solar-red font-bold hover:gap-3 transition-all">
              Have more questions? Ask our solar experts
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-gray-200/50 border border-gray-100/50">
            <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-panel-navy leading-tight">
                Expert Solar Panel Installation & <br />
                <span className="text-solar-red">Renewable Energy</span> Services in Chennai
              </h2>
              <div className="w-24 h-1 bg-sun-yellow mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 bg-solar-red/5 rounded-2xl flex items-center justify-center text-solar-red shrink-0 group-hover:bg-solar-red group-hover:text-white transition-all duration-300">
                    <Zap size={28} />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-panel-navy">Residential Solar Installation & Commercial Solutions</h2>
                    <p className="text-gray-600 leading-relaxed">
                      As the most trusted provider of <strong>solar panel installation in Chennai</strong>, Arka Solar Energy is committed to helping homeowners and businesses transition to sustainable power. Our comprehensive <strong>solar energy solutions</strong> are designed to withstand Chennai's specific climate conditions, ensuring long-term durability and peak performance for any <Link to="/services" className="text-solar-red hover:underline">rooftop solar power plant</Link>.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Our <Link to="/services" className="text-solar-red hover:underline">rooftop solar systems</Link> utilize premium Tier-1 components, including Tier-1 solar modules and high-efficiency inverters. These advanced technologies, combined with our expert engineering at <strong>Arka Solar Energy</strong>, guarantee that your investment delivers maximum returns for decades to come.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-14 h-14 bg-leaf-green/5 rounded-2xl flex items-center justify-center text-leaf-green shrink-0 group-hover:bg-leaf-green group-hover:text-white transition-all duration-300">
                    <ShieldCheck size={28} />
                  </div>
                  <p className="text-gray-600 leading-relaxed py-2">
                    Transitioning to solar power in Chennai has never been easier, thanks to the <strong>PM Surya Ghar: Muft Bijli Yojana</strong>. Our team provides end-to-end support for subsidy registration, ensuring you receive the maximum government assistance of up to ₹78,000 for residential installations.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-panel-navy/5 p-10 rounded-[2.5rem] border border-panel-navy/5">
                  <h3 className="text-2xl font-bold text-panel-navy mb-6 flex items-center gap-3">
                    <Sun className="text-sun-yellow" />
                    Why Choose Rooftop Solar?
                  </h3>
                  <div className="space-y-6 text-gray-600">
                    <p className="leading-relaxed">
                      Chennai receives over 300 days of sunshine annually, making it the ideal location for <strong>rooftop solar power plants</strong>. By installing solar, you can eliminate up to 100% of your electricity bills while contributing to a greener environment.
                    </p>
                    <p className="leading-relaxed font-medium text-panel-navy">
                      Our <strong>solar EPC services</strong> include detailed shading analysis and structural checks to ensure your roof is optimized for energy generation.
                    </p>
                    <p className="leading-relaxed">
                      At Arka Solar Energy, we don't just install panels; we build long-term partnerships. Our <strong>solar operations and maintenance (O&M)</strong> programs include regular panel cleaning, system health checks, and performance monitoring.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                  <div className="flex -space-x-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-400">
                        {i}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <span className="font-bold text-panel-navy">Join 50+ families</span> already saving with Arka.
                    <Link to="/contact" className="text-solar-red block hover:underline font-semibold">Get a free site assessment today</Link>
                  </div>
                </div>
              </div>
            </div>
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
              { name: "Bharathkumar K", text: "Prompt delivery. Quality as promised. Service minded team. Cost effective. Care that was taken by the total team is to be appreciated" },
              { name: "Amarjothi Sankar", text: "We are greatly satisfied with their recent solar installation service provided by ARKA SOLAR Energy. From the initial discussion to final installation, everything was handled with great professionalism and commitment.What truly impressed us was their sense of responsibility in managing all the procedures, approvals, and documentation smoothly." },
              { name: "karthik morgan", text: "Excellent service from ARKA Solar Energy — the team was professional, knowledgeable, and completed the installation on time.They explained everything clearly and made the entire process smooth and hassle-free.Very happy with the system performance and already seeing savings on my electricity bill!" }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
                <div className="flex text-sun-yellow">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 italic">"{t.text}"</p>
                <div className="pt-4 border-t border-gray-50">
                  <div className="font-bold text-panel-navy">{t.name}</div>
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
                Get a Free site Assessment
              </Link>
              <a
                href="tel:+917708924365"
                className="bg-panel-navy text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-panel-navy/90 transition-all border border-white/10"
              >
                Call Us: +91 77089 24365
              </a>
            </div>

            <div className="pt-8 border-t border-white/20 mt-12">
              <p className="text-sm font-bold mb-6">Connect with us & share our website:</p>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href={CONTACT_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 px-6 rounded-full transition-all flex items-center gap-3 text-sm font-semibold border border-white/10"
                >
                  <Facebook size={20} /> Facebook Page
                </a>
                <a
                  href={CONTACT_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 px-6 rounded-full transition-all flex items-center gap-3 text-sm font-semibold border border-white/20"
                >
                  <Instagram size={20} /> Instagram
                </a>
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent('Check out Arka Solar Energy for the best solar panel installation in Chennai: ' + window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 px-6 rounded-full transition-all flex items-center gap-3 text-sm font-semibold border border-white/10"
                >
                  <MessageCircle size={20} /> Share on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
