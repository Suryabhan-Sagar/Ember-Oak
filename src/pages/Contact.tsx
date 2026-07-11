import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[radial-gradient(circle_at_top_right,rgba(217,119,6,0.08),transparent_50%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Availability</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif italic mb-6">Secure Your Table</h1>
          <p className="text-white/40 max-w-2xl mx-auto text-sm leading-relaxed">
            Experience culinary artistry in an atmosphere of refined elegance.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Reservation Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-3/5 bg-white/[0.03] border border-white/5 p-8 md:p-10 rounded-2xl"
          >
            <h2 className="text-2xl font-serif italic mb-8 text-white">Book a Table</h2>
            
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="date" className="text-[10px] uppercase tracking-widest text-white/30 ml-1">Date</label>
                  <input 
                    type="date" 
                    id="date"
                    className="bg-white/5 border border-white/10 text-white px-4 py-4 rounded-lg focus:outline-none focus:border-amber-600/50 transition-colors text-sm"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="time" className="text-[10px] uppercase tracking-widest text-white/30 ml-1">Time</label>
                  <select 
                    id="time"
                    className="bg-white/5 border border-white/10 text-white px-4 py-4 rounded-lg focus:outline-none focus:border-amber-600/50 transition-colors appearance-none text-sm"
                    required
                  >
                    <option value="">Select a time</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="17:30">5:30 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="party" className="text-[10px] uppercase tracking-widest text-white/30 ml-1">Party Size</label>
                <select 
                  id="party"
                  className="bg-white/5 border border-white/10 text-white px-4 py-4 rounded-lg focus:outline-none focus:border-amber-600/50 transition-colors appearance-none text-sm"
                  required
                >
                  <option value="">Select party size</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                  <option value="large">9+ (Requires direct contact)</option>
                </select>
              </div>

              <div className="border-t border-white/5 my-2 pt-8">
                <h3 className="text-lg font-serif italic mb-6 text-white">Guest Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="firstName" className="text-[10px] uppercase tracking-widest text-white/30 ml-1">First Name</label>
                    <input 
                      type="text" 
                      id="firstName"
                      className="bg-white/5 border border-white/10 text-white px-4 py-4 rounded-lg focus:outline-none focus:border-amber-600/50 transition-colors text-sm"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="lastName" className="text-[10px] uppercase tracking-widest text-white/30 ml-1">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName"
                      className="bg-white/5 border border-white/10 text-white px-4 py-4 rounded-lg focus:outline-none focus:border-amber-600/50 transition-colors text-sm"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-white/30 ml-1">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      className="bg-white/5 border border-white/10 text-white px-4 py-4 rounded-lg focus:outline-none focus:border-amber-600/50 transition-colors text-sm"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-[10px] uppercase tracking-widest text-white/30 ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone"
                      className="bg-white/5 border border-white/10 text-white px-4 py-4 rounded-lg focus:outline-none focus:border-amber-600/50 transition-colors text-sm"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="notes" className="text-[10px] uppercase tracking-widest text-white/30 ml-1">Special Requests</label>
                  <textarea 
                    id="notes"
                    rows={3}
                    className="bg-white/5 border border-white/10 text-white px-4 py-4 rounded-lg focus:outline-none focus:border-amber-600/50 transition-colors resize-none text-sm"
                  ></textarea>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-500 text-white px-8 py-5 rounded-lg text-sm font-bold transition-all shadow-[0_10px_30px_rgba(217,119,6,0.2)] mt-4 uppercase tracking-[0.2em]"
              >
                Confirm Reservation
              </button>
            </form>
          </motion.div>

          {/* Info Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-2/5 flex flex-col gap-10"
          >
            <div>
              <h2 className="text-2xl font-serif italic mb-6 text-white border-b border-white/5 pb-4">Location & Contact</h2>
              <ul className="flex flex-col gap-6">
                <li className="flex items-start gap-4">
                  <MapPin className="text-amber-500 shrink-0 mt-1" size={24} />
                  <div className="flex flex-col">
                    <span className="text-white font-medium mb-1 text-sm">Address</span>
                    <span className="text-white/40 text-sm">123 Culinary Row<br />Ranchi, JH 834001</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="text-amber-500 shrink-0 mt-1" size={24} />
                  <div className="flex flex-col">
                    <span className="text-white font-medium mb-1 text-sm">Phone</span>
                    <span className="text-white/40 text-sm">+91 98765 43210</span>
                    <span className="text-white/30 text-xs mt-1">Available 12pm - 10pm</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail className="text-amber-500 shrink-0 mt-1" size={24} />
                  <div className="flex flex-col">
                    <span className="text-white font-medium mb-1 text-sm">Email</span>
                    <span className="text-white/40 text-sm">hello@emberandoak.com</span>
                    <span className="text-white/30 text-xs mt-1">For general inquiries and events</span>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif italic mb-6 text-white border-b border-white/5 pb-4">Hours of Service</h2>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-4">
                  <Clock className="text-amber-500 shrink-0 mt-1" size={24} />
                  <div className="flex flex-col w-full text-sm">
                    <div className="flex justify-between w-full mb-3 border-b border-white/5 pb-3">
                      <span className="text-white/60">Monday - Thursday</span>
                      <span className="text-white/40 text-right">5:00 PM - 10:30 PM</span>
                    </div>
                    <div className="flex justify-between w-full mb-3 border-b border-white/5 pb-3">
                      <span className="text-white/60">Friday - Saturday</span>
                      <span className="text-white/40 text-right">4:30 PM - 11:30 PM</span>
                    </div>
                    <div className="flex justify-between w-full">
                      <span className="text-white/60">Sunday</span>
                      <span className="text-white/40 text-right">4:30 PM - 10:00 PM</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map Placeholder */}
            <div className="w-full aspect-video bg-white/[0.03] border border-white/5 flex items-center justify-center relative overflow-hidden rounded-2xl group cursor-pointer mt-auto">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1600&auto=format&fit=crop" 
                alt="Map location overview" 
                className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute z-20 flex flex-col items-center">
                <MapPin size={32} className="text-amber-500 mb-2 drop-shadow-[0_0_15px_rgba(217,119,6,0.4)]" />
                <span className="bg-black/60 backdrop-blur-md px-4 py-2 text-[10px] uppercase tracking-widest font-bold border border-white/10 rounded-lg text-white">
                  View on Google Maps
                </span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </div>
  );
}
