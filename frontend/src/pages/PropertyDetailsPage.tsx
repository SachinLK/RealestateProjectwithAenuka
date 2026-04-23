import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PROPERTIES } from '../data/mockData';
import { Bed, Bath, Move, MapPin, ArrowLeft, Play, Boxes } from 'lucide-react';

export default function PropertyDetailsPage() {
  const { id } = useParams();
  const property = PROPERTIES.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="pt-40 text-center">
        <h1 className="text-2xl font-serif">Property not found.</h1>
        <Link to="/" className="text-brand-gold-light uppercase tracking-widest text-[10px] mt-4 block underline">
          Back to listings
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-20">
      {/* Cinematic Hero Video */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover brightness-50"
          src={property.video}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
        
        <div className="absolute bottom-20 left-6 md:left-20 max-w-2xl space-y-4">
          <Link to="/" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors uppercase tracking-[0.3em] text-[10px] mb-8">
            <ArrowLeft size={16} /> Listings
          </Link>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-brand-gold-light uppercase tracking-[0.5em] text-[10px]"
          >
            {property.type === 'sale' ? 'Private Residence' : 'Exclusive Rental'}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-serif"
          >
            {property.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 text-white/60 uppercase tracking-[0.2em] text-[10px]"
          >
            <MapPin size={14} className="text-brand-gold-dark" /> {property.location}
          </motion.div>
        </div>

        <div className="absolute bottom-20 right-6 md:right-20 hidden md:block">
           <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 space-y-6 min-w-[280px]">
              <div>
                <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Asking Price</p>
                <p className="text-3xl font-serif gold-gradient-text">{property.price}</p>
              </div>
              <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] text-white/60">
                 <div className="flex items-center gap-2"><Bed size={14}/> {property.beds}</div>
                 <div className="flex items-center gap-2"><Bath size={14}/> {property.baths}</div>
                 <div className="flex items-center gap-2"><Move size={14}/> {property.sqft}</div>
              </div>
              <button className="w-full gold-gradient-bg text-brand-black px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm hover:opacity-90 transition-opacity">
                Request Inquiry
              </button>
           </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-20">
         <div className="space-y-12">
            <div>
              <h2 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6 font-semibold underline underline-offset-8">Property Essence</h2>
              <p className="text-lg md:text-2xl font-serif text-white/80 leading-relaxed font-light">
                {property.description}
              </p>
            </div>

            <div>
              <h2 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-8 font-semibold">Distinguished Features</h2>
              <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
                {property.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-white/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold-dark" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
         </div>

         <div className="space-y-8">
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-semibold mb-8">Virtual Experience</h2>
            <div className="aspect-video bg-white/5 border border-white/10 rounded-sm flex flex-col items-center justify-center p-8 text-center group cursor-pointer relative overflow-hidden">
               <img src={property.gallery[0]} className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
               <Boxes size={48} className="text-brand-gold-dark mb-4 group-hover:scale-110 transition-transform" />
               <h3 className="text-xl font-serif mb-2">Matterport 3D Tour</h3>
               <p className="text-white/40 text-[10px] uppercase tracking-widest">Experience the flow of space virtually</p>
               <div className="mt-8 px-6 py-2 border border-white/20 rounded-full text-[10px] uppercase tracking-[0.2em] group-hover:bg-white group-hover:text-brand-black transition-all">
                 Enter Tour
               </div>
            </div>
         </div>
      </section>

      {/* Image Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-semibold mb-12">Visual Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {property.gallery.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`overflow-hidden rounded-sm ${idx === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-square'}`}
            >
              <img src={img} className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-40 bg-brand-black/50 border-y border-white/5 text-center px-6">
         <div className="max-w-3xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-7xl font-serif">Aura Space <span className="italic">Service</span></h2>
            <p className="text-white/40 text-lg">Interested in this property or looking to showcase your own in this standard?</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
               <button className="px-12 py-4 gold-gradient-bg text-brand-black rounded-full text-[10px] uppercase tracking-[0.3em] font-bold">
                 Contact Agent
               </button>
               <Link to="/sell" className="px-12 py-4 border border-white/20 rounded-full text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-brand-black transition-all">
                 Sell With Us
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
