import { motion } from 'motion/react';
import { team } from '../data';

export default function About() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#070707] relative overflow-hidden">
      <div className="absolute top-40 -left-10 w-[500px] h-[500px] bg-amber-600/5 blur-[100px] rounded-full z-0 pointer-events-none"></div>
      
      {/* Hero */}
      <section className="pb-20 border-b border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2"
            >
              <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Our Story</span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif italic mb-6">Return to the Source.</h1>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Ember & Oak was founded on a very simple premise: the best food isn't engineered, it's uncovered. We believe in taking immaculate ingredients and exposing them to fire, smoke, and time.
              </p>
              <p className="text-white/40 text-sm leading-relaxed">
                We stripped away the white tablecloths and the pretense. What remains is a dining room focused entirely on warmth, hospitality, and honest cooking. Our custom-built oak wood hearth is the beating heart of our kitchen, infusing every dish with an elemental character that cannot be replicated with gas or electricity.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="absolute inset-0 bg-amber-600/10 blur-2xl rounded-full translate-x-4 translate-y-4"></div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1600&auto=format&fit=crop" 
                  alt="Cozy, dimly lit restaurant interior with warm lighting" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sourcing */}
      <section className="py-24 bg-black/20 border-b border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Ingredients</span>
            <h2 className="text-4xl md:text-5xl font-serif italic mb-6">Obsessive Sourcing</h2>
            <p className="text-white/40 text-sm leading-relaxed">
              When your cooking technique is this minimal, there is absolutely nowhere to hide. The quality of the ingredient is everything.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:bg-white/[0.04] transition-colors">
              <h3 className="font-serif italic text-3xl text-white mb-4 pb-4 border-b border-white/5">The Beef</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                We partner exclusively with independent ranchers who raise their cattle on open pasture. Every cut we serve is USDA Prime or higher, dry-aged in-house for a minimum of 45 days to concentrate flavor and maximize tenderness.
              </p>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:bg-white/[0.04] transition-colors">
              <h3 className="font-serif italic text-3xl text-white mb-4 pb-4 border-b border-white/5">The Seafood</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Sourced from day-boat fishermen who prioritize sustainable practices. Our seafood arrives within 24 hours of being caught. If the catch isn't immaculate that morning, it doesn't make it to our menu.
              </p>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:bg-white/[0.04] transition-colors">
              <h3 className="font-serif italic text-3xl text-white mb-4 pb-4 border-b border-white/5">The Produce</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Working with a network of local farms within a 50-mile radius allows us to dictate exactly what goes onto our plates. Our menu shifts subtly from week to week based entirely on what is peaking in the fields.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Family</span>
            <h2 className="text-4xl md:text-5xl font-serif italic mb-4">The People</h2>
            <p className="text-white/40 max-w-2xl mx-auto text-sm">
              A restaurant is only as good as the people who breathe life into it every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {team.map((member, index) => (
              <motion.div 
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex flex-col group"
              >
                <div className="aspect-[3/4] overflow-hidden mb-6 rounded-2xl border border-white/5 relative">
                  <div className="absolute inset-0 bg-amber-600/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={member.image} 
                    alt={member.imageAlt} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0 relative z-0"
                  />
                </div>
                <h3 className="text-3xl font-serif italic text-white mb-1">{member.name}</h3>
                <p className="text-amber-500 text-[10px] font-bold uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-white/40 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
