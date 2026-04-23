import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-serif tracking-widest flex items-center gap-2">
            <span className="gold-gradient-text font-bold">AURA</span>
            <span className="font-light tracking-[0.3em] opacity-80">SPACE</span>
          </Link>
          <p className="text-white/40 text-sm leading-relaxed max-w-xs">
            Redefining luxury real estate through cinematic media, architectural innovation, and exclusive marketing.
          </p>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/80 mb-8 font-semibold">Explore</h4>
          <ul className="space-y-4">
            {['Listings', 'Services', 'Architecture', 'Sell With Us'].map((item) => (
              <li key={item}>
                <Link to={item === 'Listings' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="text-white/40 hover:text-brand-gold-light transition-colors text-sm">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/80 mb-8 font-semibold">Contact</h4>
          <ul className="space-y-4">
            <li className="text-white/40 text-sm">info@auraspace.com</li>
            <li className="text-white/40 text-sm">+1 (310) 555-0123</li>
            <li className="text-white/40 text-sm">Beverly Hills, CA</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/80 mb-8 font-semibold">Social</h4>
          <ul className="space-y-4">
            {['Instagram', 'YouTube', 'Vimeo', 'LinkedIn'].map((item) => (
              <li key={item}>
                <a href="#" className="text-white/40 hover:text-brand-gold-light transition-colors text-sm uppercase tracking-widest text-[10px]">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 pt-10">
        <p className="text-white/20 text-[10px] uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} Aura Space. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-white/20 hover:text-white transition-colors text-[10px] uppercase tracking-[0.2em]">Privacy</a>
          <a href="#" className="text-white/20 hover:text-white transition-colors text-[10px] uppercase tracking-[0.2em]">Terms</a>
        </div>
      </div>
    </footer>
  );
}
