import { motion } from 'motion/react';

const CONCEPTS = [
  { title: 'The Vertical Forest', year: '2025', image: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80', description: 'Merging biophilic design with urban density.' },
  { title: 'Marble Monolith', year: '2024', image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80', description: 'A study in seamless stone transitions.' },
  { title: 'Floating Sanctuary', year: '2024', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80', description: 'Exploring cantilevered structures above water.' },
];

export default function ArchitecturePage() {
  return (
    <div className="pt-32 pb-20">
      <header className="max-w-7xl mx-auto px-6 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-end">
          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[10px] uppercase tracking-[0.5em] text-brand-gold-dark"
            >
              Architectural Concept Studio
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-9xl font-serif leading-none"
            >
              Space <br /><span className="italic">Defined</span>
            </motion.h1>
          </div>
          <div className="space-y-6">
            <p className="text-white/40 text-lg leading-relaxed max-w-sm">
              We don’t just market spaces; we conceive them. Our architectural studio provides avant-garde design solutions for luxury residential and commercial developments.
            </p>
            <div className="flex gap-10 border-t border-white/10 pt-10">
               <div>
                 <p className="text-2xl font-serif gold-gradient-text">12</p>
                 <p className="text-[10px] uppercase tracking-widest text-white/40">Active Projects</p>
               </div>
               <div>
                 <p className="text-2xl font-serif gold-gradient-text">24</p>
                 <p className="text-[10px] uppercase tracking-widest text-white/40">Concepts Created</p>
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Visuals Grid */}
      <section className="max-w-7xl mx-auto px-6 space-y-40">
        {CONCEPTS.map((concept, idx) => (
          <motion.div 
            key={concept.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row gap-20 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className={`w-full md:w-2/3 aspect-[16/10] overflow-hidden rounded-sm relative group cursor-crosshair`}>
               <img 
                 src={concept.image} 
                 alt={concept.title} 
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute top-6 right-6 text-white/20 text-[60px] font-serif leading-none opacity-0 group-hover:opacity-100 transition-opacity">
                 {concept.year}
               </div>
            </div>
            <div className="w-full md:w-1/3 space-y-6">
               <h2 className="text-3xl font-serif">{concept.title}</h2>
               <p className="text-white/40 leading-relaxed italic">
                 {concept.description}
               </p>
               <button className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-brand-gold-dark/40 pb-2 hover:text-brand-gold-light transition-colors">
                 View Concept Details
               </button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Services Breakdown */}
      <section className="mt-60 max-w-7xl mx-auto px-6 py-40 border-t border-white/5">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            <div className="space-y-6">
               <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold-dark">01</span>
               <h3 className="text-2xl font-serif">Schematic Planning</h3>
               <p className="text-white/40 text-sm leading-relaxed">Optimization of flow and functional layouts for modern living standards.</p>
            </div>
            <div className="space-y-6">
               <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold-dark">02</span>
               <h3 className="text-2xl font-serif">High-Fidelity Rendering</h3>
               <p className="text-white/40 text-sm leading-relaxed">Hyper-realistic visualizations used for pre-sale marketing and conceptual approval.</p>
            </div>
            <div className="space-y-6">
               <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold-dark">03</span>
               <h3 className="text-2xl font-serif">Interior Architecture</h3>
               <p className="text-white/40 text-sm leading-relaxed">Curation of materials, bespoke cabinetry, and luxury fixtures that define the luxury experience.</p>
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 text-center px-6">
          <p className="text-[10px] uppercase tracking-[0.5em] text-brand-gold-dark mb-8">Ready to Collaborate?</p>
          <h2 className="text-4xl md:text-7xl font-serif mb-12">Building the <br /> <span className="italic">Future of Luxury</span></h2>
          <button className="gold-gradient-bg px-14 py-5 text-brand-black text-[10px] uppercase tracking-[0.3em] font-bold rounded-full transform hover:scale-105 transition-all">
            Schedule a Consultation
          </button>
      </section>
    </div>
  );
}
