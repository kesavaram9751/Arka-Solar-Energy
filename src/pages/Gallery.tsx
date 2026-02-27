import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Zap, Maximize2 } from 'lucide-react';

const PROJECTS = [
  { id: 1, type: 'Residential', loc: 'Anna Nagar, Chennai', cap: '3 kW', img: 'https://picsum.photos/seed/proj1/800/600' },
  { id: 2, type: 'Residential', loc: 'Velachery, Chennai', cap: '5 kW', img: 'https://picsum.photos/seed/proj2/800/600' },
  { id: 3, type: 'Commercial', loc: 'T. Nagar, Chennai', cap: '10 kW', img: 'https://picsum.photos/seed/proj3/800/600' },
  { id: 4, type: 'Industrial', loc: 'Ambattur, Chennai', cap: '50 kW', img: 'https://picsum.photos/seed/proj4/800/600' },
  { id: 5, type: 'Apartment', loc: 'Porur, Chennai', cap: '8 kW', img: 'https://picsum.photos/seed/proj5/800/600' },
  { id: 6, type: 'Residential', loc: 'Tambaram, Chennai', cap: '4 kW', img: 'https://picsum.photos/seed/proj6/800/600' },
  { id: 7, type: 'Commercial', loc: 'OMR, Chennai', cap: '20 kW', img: 'https://picsum.photos/seed/proj7/800/600' },
  { id: 8, type: 'Residential', loc: 'Chromepet, Chennai', cap: '3 kW', img: 'https://picsum.photos/seed/proj8/800/600' },
  { id: 9, type: 'Industrial', loc: 'Sriperumbudur', cap: '100 kW', img: 'https://picsum.photos/seed/proj9/800/600' },
];

const FILTERS = ['All', 'Residential', 'Apartment', 'Commercial', 'Industrial'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selectedImg, setSelectedImg] = useState<null | typeof PROJECTS[0]>(null);

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.type === filter);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gray-50 py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-panel-navy">Our Work Speaks for Itself</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real installations across Chennai and Tamil Nadu.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 border-b border-gray-100 sticky top-20 z-30 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  filter === f 
                    ? 'bg-solar-red text-white shadow-lg shadow-solar-red/20' 
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer"
                  onClick={() => setSelectedImg(project)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.loc}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-panel-navy/90 via-panel-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                    <div className="flex justify-between items-end text-white">
                      <div className="space-y-1">
                        <div className="inline-block bg-solar-red text-[10px] font-bold uppercase px-2 py-0.5 rounded">
                          {project.type}
                        </div>
                        <h3 className="text-lg font-bold flex items-center gap-1">
                          <MapPin size={16} className="text-sun-yellow" />
                          {project.loc}
                        </h3>
                        <div className="text-sm text-white/70 flex items-center gap-1">
                          <Zap size={14} className="text-sun-yellow" />
                          {project.cap} Capacity
                        </div>
                      </div>
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                        <Maximize2 size={20} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 bg-panel-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-12 text-center">
            <div className="space-y-1">
              <div className="text-3xl font-bold text-sun-yellow">50+</div>
              <div className="text-xs uppercase font-bold tracking-widest text-white/50">Projects</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold text-sun-yellow">15+</div>
              <div className="text-xs uppercase font-bold tracking-widest text-white/50">Areas in Chennai</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold text-sun-yellow">500 kW+</div>
              <div className="text-xs uppercase font-bold tracking-widest text-white/50">Total Capacity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-panel-navy/95 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-5xl w-full bg-white rounded-[2.5rem] overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="lg:col-span-2 aspect-video lg:aspect-auto">
                  <img
                    src={selectedImg.img}
                    alt={selectedImg.loc}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-10 space-y-8">
                  <div className="space-y-4">
                    <div className="inline-block bg-solar-red text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                      {selectedImg.type} Project
                    </div>
                    <h2 className="text-3xl font-bold text-panel-navy">{selectedImg.loc}</h2>
                    <div className="flex items-center gap-3 text-panel-navy/60 font-semibold">
                      <Zap className="text-solar-red" size={20} />
                      {selectedImg.cap} Solar Installation
                    </div>
                  </div>
                  <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
                    <p>This project involved a complete end-to-end EPC solution including custom engineering, TANGEDCO approvals, and final commissioning.</p>
                    <p>The client is now saving approximately 80% on their monthly electricity bills.</p>
                  </div>
                  <button
                    onClick={() => setSelectedImg(null)}
                    className="w-full py-4 bg-panel-navy text-white rounded-2xl font-bold hover:bg-solar-red transition-colors"
                  >
                    Close Project
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
