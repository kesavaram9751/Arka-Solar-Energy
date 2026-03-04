import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Target, Heart, Award, MapPin, Zap, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutImage from '../assets/image6.jpg';
import climateImage from '../assets/image1.jpg';
import aboutBanner from '../assets/about-us-banner.jpg';

export default function About() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={aboutBanner}
            alt="About Arka Solar"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-panel-navy/60"></div>
        </div>
        <div className="relative z-10 text-center text-white space-y-4 px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Powering a Greener Tomorrow</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">One roof at a time, we are transforming how Chennai consumes energy.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block bg-solar-red/10 text-solar-red text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Our Story
              </div>
              <h2 className="text-4xl font-bold text-panel-navy">Who We Are</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  At Arka Solar Energy, we believe that sustainable energy should be accessible, affordable, and hassle-free. Based in the heart of Chennai, we are a dedicated Solar EPC (Engineering, Procurement, and Construction) company committed to helping homeowners and businesses transition to clean, renewable power.
                </p>
                <p>
                  Founded by experts with a strong technical foundation and a passion for renewable technology, Arka Solar Energy blends modern data-driven efficiency with traditional engineering excellence. As Your Solar Partner, we don't just install panels — we design energy ecosystems that provide long-term financial freedom.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-sun-yellow/20 rounded-[3rem] -rotate-3"></div>
              <img
                src={aboutImage}
                alt="Our Team"
                className="relative z-10 rounded-[2.5rem] shadow-2xl object-cover w-full h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Sun, title: "Our Vision", text: "To lead the renewable revolution by making solar the heartbeat of every home and business, empowering our community with clean, limitless energy for a brighter tomorrow." },
              { icon: Target, title: "Our Mission", text: "Our mission is to deliver world-class solar technology to the common people. We aim to maximize our customers' return on investment by providing high-performance energy systems, expert consultancy, and life-long support, making 'Your Solar Partner' a promise of quality and trust." },
              { icon: Heart, title: "Core Values", text: "Innovation: Deploying advanced cutting-edge solar panels, AI-driven monitoring, and hybrid inverters for maximum efficiency in tropical climates." },
              { icon: ShieldCheck, title: "Reliability", text: "25-year warranties, 99% uptime, and rigorous quality control from design to commissioning." },
              { icon: Award, title: "Transparency", text: "Clear pricing, accurate ROI calculations, and full regulatory compliance with MNRE and TANGEDCO." },
              { icon: Zap, title: "Sustainability", text: "Prioritizing eco-friendly materials, waste reduction, and community solar programs for lasting impact." },
              { icon: MapPin, title: "Partnership", text: "Tailored solutions, flexible financing, and dedicated 24/7 service to build long-term client success." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 space-y-6">
                <div className="w-14 h-14 bg-solar-red/5 rounded-2xl flex items-center justify-center text-solar-red">
                  <item.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-panel-navy">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      {/* <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-panel-navy">What Sets Us Apart</h2>
            <p className="text-gray-600">
              We understand the specific energy needs of Tamil Nadu — from the coastal climate of Chennai to the high energy demands of local industries.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Solar EPC", "TANGEDCO Approvals", "PM Surya Ghar", "Net Metering", 
              "Tier-1 Equipment", "Residential Solar", "Commercial Solar", "Industrial Solar", "Apartment Solar"
            ].map((tag, i) => (
              <span key={i} className="px-6 py-3 bg-panel-navy text-white rounded-full font-semibold text-sm shadow-lg shadow-panel-navy/20">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section> */}

      {/* Stats */}
      <section className="py-20 bg-panel-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 text-center">
            {[
              { val: "200+", label: "Installations Completed" },
              { val: "2 MW", label: "Total Capacity Installed" },
              { val: "100%", label: "Client Satisfaction" },
              { val: "24/7 Support", label: "Customer Support" }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-sun-yellow">{stat.val}</div>
                <div className="text-sm text-white/60 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Solar Solutions Built for Tamilnadu’s Climate */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-panel-navy">Solar Solutions Built for Tamilnadu’s Climate</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Tamilnadu enjoys over 2,800–3,000 hours of sunshine per year, making rooftop solar one of the most effective and cost‑saving energy options in the city. At Arka Solar Energy, we design systems that withstand coastal humidity, high temperatures, and monsoon conditions, ensuring durability and long‑term performance for homes, apartments, and industries across Chennai.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-sun-yellow/20 rounded-[3rem] -rotate-3"></div>
              <img
                src={climateImage}
                alt="Solar Solutions in Tamilnadu"
                className="relative z-10 rounded-[2.5rem] shadow-2xl object-cover w-full h-[400px]"
              />
            </div>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Our solar solutions are tailored to meet the unique challenges of Tamilnadu’s climate. With advanced technology and a commitment to sustainability, we ensure that your solar investment delivers maximum returns and long-lasting benefits.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Designed for coastal humidity and high temperatures</li>
                <li>Durable systems for monsoon conditions</li>
                <li>Optimized for long-term performance and savings</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
