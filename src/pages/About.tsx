import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Target, Heart, Award, MapPin, Zap, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutImage from '../assets/image1.jpg';

export default function About() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/about-hero/1920/600?brightness=0.5"
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
              { icon: Sun, title: "Our Mission", text: "To make clean, affordable solar energy accessible to every home and business in Tamil Nadu." },
              { icon: Target, title: "Our Vision", text: "A Chennai where every rooftop contributes to a sustainable, self-sufficient energy grid." },
              { icon: Heart, title: "Our Values", text: "Transparency, Quality, Customer-First, and Engineering Excellence in every project." }
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
      <section className="py-24">
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
      </section>

      {/* Stats */}
      <section className="py-20 bg-panel-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { val: "50+", label: "Installations Completed" },
              { val: "500 kW+", label: "Total Capacity Installed" },
              { val: "100%", label: "Client Satisfaction" },
              { val: "25 Years", label: "Equipment Warranty" }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-sun-yellow">{stat.val}</div>
                <div className="text-sm text-white/60 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-12 bg-solar-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to Work With Chennai's Trusted Solar Partner?</h2>
            <Link
              to="/contact"
              className="bg-sun-yellow text-panel-navy px-8 py-4 rounded-full font-bold hover:bg-white transition-all shadow-xl whitespace-nowrap"
            >
              Get a Free Site Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
