import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20">
       <header className="max-w-7xl mx-auto px-6 mb-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10px] uppercase tracking-[0.5em] text-brand-gold-dark mb-4"
        >
          Connect With Us
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl font-serif tracking-tight"
        >
          Begin the <span className="italic">Dialogue</span>
        </motion.h1>
      </header>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">
         <div className="space-y-16">
            <div className="space-y-6">
               <h2 className="text-3xl font-serif">Global Headquarters</h2>
               <div className="space-y-4">
                  <div className="flex items-center gap-4 text-white/40">
                     <MapPin size={18} className="text-brand-gold-dark" />
                     <span className="text-lg">9560 Wilshire Blvd, Beverly Hills, CA 90212</span>
                  </div>
                  <div className="flex items-center gap-4 text-white/40">
                     <Mail size={18} className="text-brand-gold-dark" />
                     <span className="text-lg">concierge@auraspace.com</span>
                  </div>
                  <div className="flex items-center gap-4 text-white/40">
                     <Phone size={18} className="text-brand-gold-dark" />
                     <span className="text-lg">+1 (310) 909-8800</span>
                  </div>
               </div>
            </div>

            <div className="space-y-6">
               <h2 className="text-3xl font-serif">Departments</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-brand-gold-dark mb-2">Media & Film</h4>
                    <p className="text-white/40 text-sm">studio@auraspace.com</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-brand-gold-dark mb-2">Architecture</h4>
                    <p className="text-white/40 text-sm">design@auraspace.com</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-brand-gold-dark mb-2">Private Listings</h4>
                    <p className="text-white/40 text-sm">exclusive@auraspace.com</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-brand-gold-dark mb-2">Press</h4>
                    <p className="text-white/40 text-sm">press@auraspace.com</p>
                  </div>
               </div>
            </div>
         </div>

         <div className="bg-white/5 p-12 border border-white/10 rounded-sm">
            <form className="space-y-8">
               <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Interests</label>
                  <div className="flex flex-wrap gap-4 pt-2">
                     {['Buying', 'Selling', 'Renting', 'Media Service', 'Architecture'].map(type => (
                       <label key={type} className="flex items-center gap-2 cursor-pointer group">
                          <input type="checkbox" className="hidden peer" />
                          <div className="px-4 py-2 border border-white/10 text-[10px] uppercase tracking-widest peer-checked:bg-brand-gold-light peer-checked:text-brand-black transition-all">
                             {type}
                          </div>
                       </label>
                     ))}
                  </div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label className="text-[10px] uppercase tracking-widest text-white/40">Name</label>
                     <input type="text" className="w-full bg-brand-black border border-white/10 p-3 text-sm focus:outline-none focus:border-brand-gold-dark/40" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] uppercase tracking-widest text-white/40">Email</label>
                     <input type="email" className="w-full bg-brand-black border border-white/10 p-3 text-sm focus:outline-none focus:border-brand-gold-dark/40" />
                  </div>
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Message</label>
                  <textarea rows={6} className="w-full bg-brand-black border border-white/10 p-3 text-sm focus:outline-none focus:border-brand-gold-dark/40" />
               </div>
               <button className="w-full gold-gradient-bg py-4 text-brand-black text-[10px] uppercase tracking-[0.3em] font-bold rounded-sm">
                  Initiate Request
               </button>
            </form>
         </div>
      </section>

      {/* Map Placeholder */}
      <section className="max-w-7xl mx-auto px-6 pt-40">
         <div className="w-full h-[500px] bg-white/5 border border-white/10 rounded-sm flex items-center justify-center grayscale overflow-hidden relative">
            <img 
               src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80" 
               className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute flex flex-col items-center">
               <div className="w-12 h-12 bg-brand-gold-dark rounded-full flex items-center justify-center mb-4 animate-bounce">
                  <MapPin size={24} className="text-brand-black" />
               </div>
               <p className="text-[10px] uppercase tracking-[0.3em] font-bold">Aura Space HQ</p>
            </div>
         </div>
      </section>
    </div>
  );
}
