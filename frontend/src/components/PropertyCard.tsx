import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Bed, Move, Bath } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link to={`/property/${property.id}`} className="block group">
      <motion.div
        whileHover={{ y: -10 }}
        className="relative aspect-[4/5] overflow-hidden rounded-sm mb-6"
      >
        <img
          src={property.thumbnail}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 bg-black/40 backdrop-blur-md text-[10px] uppercase tracking-widest border border-white/10">
            {property.type === 'sale' ? 'For Sale' : 'For Rent'}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
          <div className="flex gap-4 text-white/80 text-[10px] uppercase tracking-widest">
            <div className="flex items-center gap-1">
              <Bed size={12} /> {property.beds} Beds
            </div>
            <div className="flex items-center gap-1">
              <Bath size={12} /> {property.baths} Baths
            </div>
            <div className="flex items-center gap-1">
              <Move size={12} /> {property.sqft} Sqft
            </div>
          </div>
        </div>
      </motion.div>
      
      <div className="space-y-1">
        <h3 className="font-serif text-xl tracking-wide group-hover:text-brand-gold-light transition-colors">
          {property.title}
        </h3>
        <p className="text-white/40 text-[10px] uppercase tracking-[0.2em]">
          {property.location}
        </p>
        <p className="font-sans text-brand-gold-light font-medium tracking-wider pt-2">
          {property.price}
        </p>
      </div>
    </Link>
  );
}
