import { motion } from 'motion/react';
import { ShieldCheck, BarChart3, Film, Rocket } from 'lucide-react';

export default function SellWithUsPage() {
  return (
    <div className="pt-32 pb-20">
      <header className="max-w-7xl mx-auto px-6 mb-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10px] uppercase tracking-[0.5em] text-brand-gold-dark mb-4"
        >
          Partner With Aura Space
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl font-serif tracking-tight"
        >
          Sell With <span className="italic">Distinction</span>
        </motion.h1>
      </header>

      {/* Revenue Models */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 mb-40">
         <div className="p-12 bg-white/5 border border-white/10 rounded-sm space-y-8 flex flex-col justify-between hover:border-brand-gold-dark/40 transition-colors">
            <div className="space-y-6">
               <Film className="text-brand-gold-dark" size={32} />
               <h2 className="text-3xl font-serif">Service Package Model</h2>
               <p className="text-white/40 leading-relaxed">
                 Pay for elite production upfront. Retain your current agency but utilize our cinematic media and marketing assets to elevate the presentation.
               </p>
               <ul className="space-y-4 pt-4">
                  <li className="flex items-center gap-3 text-sm text-white/60">
                    <ShieldCheck size={16} className="text-brand-gold-dark" /> Fixed upfront cost
                  </li>
                  <li className="flex items-center gap-3 text-sm text-white/60">
                    <ShieldCheck size={16} className="text-brand-gold-dark" /> Full ownership of all media assets
                  </li>
                  <li className="flex items-center gap-3 text-sm text-white/60">
                    <ShieldCheck size={16} className="text-brand-gold-dark" /> Professional property staging consultation
                  </li>
               </ul>
            </div>
            <button className="w-full py-4 border border-brand-gold-dark/40 text-[10px] uppercase tracking-[0.3em] font-bold mt-10 hover:bg-brand-gold-light hover:text-brand-black transition-all">
               View Media Packages
            </button>
         </div>

         <div className="p-12 bg-brand-gold-dark/10 border border-brand-gold-dark/20 rounded-sm space-y-8 flex flex-col justify-between hover:border-brand-gold-dark/60 transition-colors">
            <div className="space-y-6">
               <BarChart3 className="text-brand-gold-dark" size={32} />
               <h2 className="text-3xl font-serif">Commission Model</h2>
               <p className="text-white/40 leading-relaxed">
                 A full-service partnership. We handle the entire sales process, from elite production to final negotiations, for a competitive commission.
               </p>
               <ul className="space-y-4 pt-4">
                  <li className="flex items-center gap-3 text-sm text-white/60">
                    <Rocket size={16} className="text-brand-gold-dark" /> 1% – 3% Commission at closing
                  </li>
                  <li className="flex items-center gap-3 text-sm text-white/60">
                    <Rocket size={16} className="text-brand-gold-dark" /> $0 Upfront marketing costs
                  </li>
                  <li className="flex items-center gap-3 text-sm text-white/60">
                    <Rocket size={16} className="text-brand-gold-dark" /> Priority placement on Aura Space platform
                  </li>
               </ul>
            </div>
            <button className="w-full py-4 gold-gradient-bg text-brand-black text-[10px] uppercase tracking-[0.3em] font-bold mt-10 hover:opacity-90 transition-opacity">
               Inquire Partnership
            </button>
         </div>
      </section>

      {/* Process Section */}
      <section className="bg-white/5 py-40 px-6">
         <div className="max-w-7xl mx-auto space-y-20">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-serif">The Aura <span className="italic">Advantage</span></h2>
              <p className="text-white/40 max-w-xl mx-auto">We don’t just list properties; we launch them into the global luxury market with surgical precision.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
               {[
                 { step: '01', title: 'Curatorial Audit', desc: 'We assess the property’s architectural strengths and target demographic.' },
                 { step: '02', title: 'Cinematic Production', desc: 'Our film crew captures the home’s essence using 4K cinema cameras and drones.' },
                 { step: '03', title: 'Global Launch', desc: 'Strategic distribution across social channels, HNW networks, and our platform.' },
                 { step: '04', title: 'Private Showing', desc: 'Qualified viewings handled with absolute discretion and luxury service.' },
               ].map((item) => (
                 <div key={item.step} className="space-y-6">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold-dark font-bold">{item.step}</span>
                    <h3 className="text-xl font-serif">{item.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Ready CTA */}
      <section className="py-40 text-center px-6">
         <div className="max-w-3xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-7xl font-serif">A Remarkable <span className="italic">Exit</span></h2>
            <p className="text-white/40 text-lg">Your property deserves more than just a listing. It deserves a legacy.</p>
            <button className="gold-gradient-bg px-14 py-5 text-brand-black text-[10px] uppercase tracking-[0.3em] font-bold rounded-full transform hover:scale-105 transition-all">
               Get Started
            </button>
         </div>
      </section>
    </div>
  );
}
