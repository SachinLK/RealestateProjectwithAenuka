import { motion } from 'motion/react';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <header className="max-w-7xl mx-auto px-6 mb-40 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10px] uppercase tracking-[0.5em] text-brand-gold-dark mb-4"
        >
          Our Philosophy
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl font-serif tracking-tight"
        >
          Defining the <br /><span className="italic">Aura</span>
        </motion.h1>
      </header>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-40">
        <div className="aspect-square overflow-hidden rounded-sm relative">
           <img 
             src="https://images.unsplash.com/photo-1600607687937-45a9870a363f?auto=format&fit=crop&w=1200&q=80" 
             className="w-full h-full object-cover grayscale"
             referrerPolicy="no-referrer"
           />
           <div className="absolute inset-0 border-[40px] border-brand-black/20" />
        </div>
        <div className="space-y-10">
           <h2 className="text-3xl md:text-5xl font-serif">Luxury is a <br /> <span className="italic">Visual Experience</span></h2>
           <p className="text-white/40 text-lg leading-relaxed">
             Aura Space was founded on the belief that high-end real estate is not just about square footage, but about the emotional connection to a space. We bridge the gap between traditional brokerage and high-end media production.
           </p>
           <p className="text-white/40 text-lg leading-relaxed">
             With our background in cinematic film and contemporary architecture, we present properties with a level of intentionality that creates instant desirability among the world's most discerning HNW individuals.
           </p>
           <div className="pt-10 border-t border-white/10 flex gap-20">
              <div>
                <p className="text-3xl font-serif gold-gradient-text">$2.4B</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40">Properties Launched</p>
              </div>
              <div>
                <p className="text-3xl font-serif gold-gradient-text">150+</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40">Exclusive Members</p>
              </div>
           </div>
        </div>
      </section>

      <section className="bg-white/5 py-40 text-center px-6">
         <div className="max-w-4xl mx-auto space-y-20">
            <h2 className="text-3xl md:text-5xl font-serif">Core <span className="italic">Standards</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {[
                 { title: 'Exclusivity', desc: 'We only partner with properties and designers that meet our rigorous aesthetic criteria.' },
                 { title: 'Intention', desc: 'Every frame, every sketch, and every marketing email is crafted to tell a specific story.' },
                 { title: 'Discretion', desc: 'Handling high-value assets requires a level of privacy that we maintain as our highest priority.' },
               ].map(item => (
                 <div key={item.title} className="space-y-6">
                    <h3 className="text-xl font-serif text-brand-gold-light">{item.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
