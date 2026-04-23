import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Bed, Move, Bath } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: any; // Using any for simplicity here to map backend schema
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link to={`/property/${property.id}`} className="block group">
      <motion.div
        whileHover={{ y: -10 }}
        className="relative aspect-[4/5] overflow-hidden rounded-sm mb-6"
      >
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          crossOrigin="anonymous"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 bg-white/80 backdrop-blur-md text-brand-dark text-[10px] uppercase tracking-widest border border-black/10">
            {property.type}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
          <div className="flex gap-4 text-white/80 text-[10px] uppercase tracking-widest">
            <div className="flex items-center gap-1">
              <Bed size={12} /> {property.bedrooms || 0} Beds
            </div>
            <div className="flex items-center gap-1">
              <Bath size={12} /> {property.bathrooms || 0} Baths
            </div>
          </div>
        </div>
      </motion.div>
      
      <div className="space-y-1">
        <h3 className="font-serif text-xl tracking-wide group-hover:text-brand-gold-dark transition-colors">
          {property.title}
        </h3>
        <p className="text-brand-dark/40 text-[10px] uppercase tracking-[0.2em]">
          {property.address}
        </p>
        <p className="font-sans text-brand-gold-dark font-medium tracking-wider pt-2">
          ${property.price?.toLocaleString()}
        </p>
      </div>
    </Link>
  );
}
