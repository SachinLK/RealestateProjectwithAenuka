import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Bed, Bath, Move, MapPin, ArrowLeft, Boxes } from 'lucide-react';

export default function PropertyDetailsPage() {
  const { id } = useParams();
  const [property, setProperty] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/listings/${id}`)
      .then(res => res.json())
      .then(data => {
        if(data.success) {
          setProperty(data.data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="pt-40 text-center">Loading...</div>;
  }

  if (!property) {
    return (
      <div className="pt-40 text-center">
        <h1 className="text-2xl font-serif text-brand-dark">Property not found.</h1>
        <Link to="/" className="text-brand-gold-dark uppercase tracking-widest text-[10px] mt-4 block underline">
          Back to listings
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-20">
      {/* Cinematic Hero Video */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={property.imageUrl}
          alt={property.title}
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
        
        <div className="absolute bottom-20 left-6 md:left-20 max-w-2xl space-y-4">
          <Link to="/" className="flex items-center gap-2 text-brand-dark/60 hover:text-brand-dark transition-colors uppercase tracking-[0.3em] text-[10px] mb-8">
            <ArrowLeft size={16} /> Listings
          </Link>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-brand-gold-dark uppercase tracking-[0.5em] text-[10px]"
          >
            {property.type}
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
            className="flex items-center gap-2 text-brand-dark/60 uppercase tracking-[0.2em] text-[10px]"
          >
            <MapPin size={14} className="text-brand-gold-dark" /> {property.address}
          </motion.div>
        </div>

        <div className="absolute bottom-20 right-6 md:right-20 hidden md:block">
           <div className="p-8 bg-white/80 backdrop-blur-xl border border-brand-dark/10 space-y-6 min-w-[280px]">
              <div>
                <p className="text-brand-dark/40 text-[10px] uppercase tracking-widest mb-1">Asking Price</p>
                <p className="text-3xl font-serif text-brand-gold-dark">${property.price?.toLocaleString()}</p>
              </div>
              <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] text-brand-dark/60">
                 <div className="flex items-center gap-2"><Bed size={14}/> {property.bedrooms || 0}</div>
                 <div className="flex items-center gap-2"><Bath size={14}/> {property.bathrooms || 0}</div>
              </div>
              <button className="w-full bg-brand-gold-dark text-white px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm hover:opacity-90 transition-opacity">
                Request Inquiry
              </button>
           </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-20">
         <div className="space-y-12">
            <div>
              <h2 className="text-[10px] uppercase tracking-[0.3em] text-brand-dark/40 mb-6 font-semibold underline underline-offset-8">Property Essence</h2>
              <p className="text-lg md:text-2xl font-serif text-brand-dark/80 leading-relaxed font-light">
                {property.description}
              </p>
            </div>
         </div>

         <div className="space-y-8">
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-brand-dark/40 font-semibold mb-8">Virtual Experience</h2>
            <div className="aspect-video bg-black/5 border border-black/10 rounded-sm flex flex-col items-center justify-center p-8 text-center group cursor-pointer relative overflow-hidden">
               <img src={property.imageUrl} className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700" crossOrigin="anonymous"/>
               <Boxes size={48} className="text-brand-gold-dark mb-4 group-hover:scale-110 transition-transform" />
               <h3 className="text-xl font-serif mb-2">Matterport 3D Tour</h3>
               <p className="text-brand-dark/40 text-[10px] uppercase tracking-widest">Experience the flow of space virtually</p>
               <div className="mt-8 px-6 py-2 border border-brand-dark/20 rounded-full text-[10px] uppercase tracking-[0.2em] group-hover:bg-brand-dark group-hover:text-white transition-all">
                 Enter Tour
               </div>
            </div>
         </div>
      </section>



      {/* Contact CTA */}
      <section className="py-40 bg-black/5 border-y border-black/5 text-center px-6">
         <div className="max-w-3xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-7xl font-serif">Aura Space <span className="italic">Service</span></h2>
            <p className="text-brand-dark/60 text-lg">Interested in this property or looking to showcase your own in this standard?</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
               <button className="px-12 py-4 bg-brand-gold-dark text-white rounded-full text-[10px] uppercase tracking-[0.3em] font-bold">
                 Contact Agent
               </button>
               <Link to="/sell" className="px-12 py-4 border border-brand-dark/20 rounded-full text-[10px] uppercase tracking-[0.3em] hover:bg-brand-dark hover:text-white transition-all">
                 Sell With Us
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
