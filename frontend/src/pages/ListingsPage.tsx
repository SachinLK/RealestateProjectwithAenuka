import { useState } from 'react';
import { motion } from 'motion/react';
import { PROPERTIES } from '../data/mockData';
import PropertyCard from '../components/PropertyCard';
import { ListingType } from '../types';
import { ChevronDown, Search } from 'lucide-react';

export default function ListingsPage() {
  const [filterType, setFilterType] = useState<ListingType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProperties = PROPERTIES.filter((p) => {
    const matchesType = filterType === 'all' || p.type === filterType;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="pt-32 pb-20 px-6">
      <header className="max-w-7xl mx-auto mb-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10px] uppercase tracking-[0.5em] text-brand-gold-dark mb-4"
        >
          Exclusive Collections
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-serif tracking-tight mb-12"
        >
          Curated <span className="italic">Lifestyles</span>
        </motion.h1>

        {/* Filter System */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 border-y border-white/5 py-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setFilterType('all')}
              className={`text-[10px] uppercase tracking-widest px-6 py-2 rounded-full border transition-all ${
                filterType === 'all' ? 'bg-brand-gold-light text-brand-black border-brand-gold-light' : 'border-white/10 hover:border-white/40'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilterType('sale')}
              className={`text-[10px] uppercase tracking-widest px-6 py-2 rounded-full border transition-all ${
                filterType === 'sale' ? 'bg-brand-gold-light text-brand-black border-brand-gold-light' : 'border-white/10 hover:border-white/40'
              }`}
            >
              Sale
            </button>
            <button
              onClick={() => setFilterType('rent')}
              className={`text-[10px] uppercase tracking-widest px-6 py-2 rounded-full border transition-all ${
                filterType === 'rent' ? 'bg-brand-gold-light text-brand-black border-brand-gold-light' : 'border-white/10 hover:border-white/40'
              }`}
            >
              Rent
            </button>
          </div>

          <div className="hidden md:block w-px h-8 bg-white/10" />

          <div className="relative w-full md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={14} />
            <input
              type="text"
              placeholder="Search by location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-12 pr-4 text-[10px] uppercase tracking-widest focus:outline-none focus:border-brand-gold-dark/60 transition-colors"
            />
          </div>

          <div className="flex items-center gap-2 cursor-pointer group">
            <span className="text-[10px] uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">Price Range</span>
            <ChevronDown size={14} className="text-white/40" />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
        {filteredProperties.map((property, idx) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <PropertyCard property={property} />
          </motion.div>
        ))}
      </div>

      {filteredProperties.length === 0 && (
        <div className="text-center py-20 text-white/20 uppercase tracking-[0.3em] font-light">
          No listings found matching your criteria.
        </div>
      )}

      {/* Featured Section */}
      <section className="mt-40 border-t border-white/5 pt-40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2 space-y-8">
            <p className="text-[10px] uppercase tracking-[0.5em] text-brand-gold-dark">Featured Spotlight</p>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">Beyond the <br /><span className="italic">Standard</span></h2>
            <p className="text-white/40 max-w-sm leading-relaxed">
              Every property at Aura Space is hand-selected and professionally produced to ensure the highest architectural and visual standard.
            </p>
            <button className="gold-gradient-bg px-10 py-4 text-brand-black text-[10px] uppercase tracking-[0.3em] font-bold rounded-full transform hover:scale-105 transition-all">
              Learn More
            </button>
          </div>
          <div className="w-full md:w-1/2 aspect-[4/5] overflow-hidden rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
