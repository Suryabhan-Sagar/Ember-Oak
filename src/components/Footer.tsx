import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#070707] border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-600/5 blur-[100px] rounded-full z-0 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="font-serif text-3xl italic tracking-wider text-white">
              Ember & Oak
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Elemental cooking, fire, smoke, and pristine ingredients in a warm, upscale atmosphere.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="text-white/40 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="mailto:hello@emberandoak.com" className="text-white/40 hover:text-white transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif italic text-xl text-white border-b border-white/5 pb-2">Visit Us</h3>
            <ul className="flex flex-col gap-4 text-sm text-white/40 mt-2">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 text-amber-500 mt-0.5" />
                <span>123 Culinary Row,<br />Ranchi, JH 834001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-amber-500" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-amber-500" />
                <span>hello@emberandoak.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif italic text-xl text-white border-b border-white/5 pb-2">Hours</h3>
            <ul className="flex flex-col gap-3 text-sm text-white/40 mt-2">
              <li className="flex justify-between">
                <span>Mon - Thu</span>
                <span className="text-white/60">5:00 PM - 10:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Fri - Sat</span>
                <span className="text-white/60">4:30 PM - 11:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white/60">4:30 PM - 10:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif italic text-xl text-white border-b border-white/5 pb-2">Stay Connected</h3>
            <p className="text-sm text-white/40 mt-2">
              Get 10% off your first online order and early access to seasonal menus.
            </p>
            <form className="flex flex-col gap-3 mt-1" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white/5 border border-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-amber-600/50 transition-colors text-sm"
                required
              />
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-3 rounded-lg text-[10px] font-bold uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(217,119,6,0.2)] transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest text-white/30 font-bold">
          <p>&copy; {new Date().getFullYear()} Ember & Oak. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
