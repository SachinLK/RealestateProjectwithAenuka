import { motion } from 'motion/react';
import { SERVICES } from '../data/mockData';
import { Check, Camera, Play, Boxes, PenTool } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20">
      <header className="max-w-7xl mx-auto px-6 mb-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10px] uppercase tracking-[0.5em] text-brand-gold-dark mb-4"
        >
          Visual Marketing / Architectural Solutions
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl font-serif tracking-tight"
        >
          The Art of <span className="italic">Presentation</span>
        </motion.h1>
      </header>

      {/* Media Services */}
      <section className="max-w-7xl mx-auto px-6 space-y-40">
        {SERVICES.map((service, idx) => (
          <div 
            key={service.id} 
            className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-20`}
          >
            <div className="w-full lg:w-1/2 aspect-video overflow-hidden rounded-sm relative group">
               <img 
                 src={service.image} 
                 alt={service.name} 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors" />
            </div>

            <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-serif">{service.name}</h2>
              <p className="text-white/40 leading-relaxed text-lg max-w-xl mx-auto lg:mx-0">
                {service.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                 {service.packages.map((pkg) => (
                   <div key={pkg.id} className="p-8 bg-white/5 border border-white/10 rounded-sm space-y-6 hover:border-brand-gold-dark/40 transition-colors">
                      <div className="flex justify-between items-center">
                         <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold-dark">{pkg.name}</span>
                         <span className="font-serif text-xl">{pkg.price}</span>
                      </div>
                      <ul className="space-y-3">
                        {pkg.features.map(f => (
                          <li key={f} className="text-[10px] uppercase tracking-widest text-white/40 flex items-center gap-2">
                             <Check size={12} className="text-brand-gold-dark" /> {f}
                          </li>
                        ))}
                      </ul>
                   </div>
                 ))}
              </div>
              <button className="gold-gradient-bg px-10 py-4 text-brand-black text-[10px] uppercase tracking-[0.3em] font-bold rounded-full">
                 Request Package
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Booking Form CTA */}
      <section className="mt-40 bg-white/5 py-32 px-6">
         <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-3xl md:text-6xl font-serif">Tailored <span className="italic">Campaigns</span></h2>
            <p className="text-white/40 text-lg">Need a custom solution for a large-scale project or development? Our team creates bespoke marketing and design strategies.</p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
               <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 p-3 rounded-sm focus:outline-none focus:border-brand-gold-dark/40" />
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Property Type</label>
                  <select className="w-full bg-brand-black border border-white/10 p-3 rounded-sm focus:outline-none focus:border-brand-gold-dark/40">
                     <option>Residential</option>
                     <option>Commercial</option>
                     <option>Luxury Estate</option>
                     <option>Development</option>
                  </select>
               </div>
               <div className="md:col-span-2 space-y-2">
                   <label className="text-[10px] uppercase tracking-widest text-white/40">Project Message</label>
                   <textarea rows={4} className="w-full bg-white/5 border border-white/10 p-3 rounded-sm focus:outline-none focus:border-brand-gold-dark/40" />
               </div>
               <button className="md:col-span-2 gold-gradient-bg px-10 py-4 text-brand-black text-[10px] uppercase tracking-[0.3em] font-bold rounded-full">
                  Send Inquiry
               </button>
            </form>
         </div>
      </section>
    </div>
  );
}
