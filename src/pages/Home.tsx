import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame, MapPin, Clock } from 'lucide-react';
import { dishes, reviews } from '../data';
import DishCard from '../components/DishCard';
import ReviewCard from '../components/ReviewCard';

export default function Home() {
  const signatureDishes = dishes.filter(d => d.isSignature).slice(0, 4);
  const featuredReviews = reviews.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2000&auto=format&fit=crop" 
            alt="Steak cooking over an open wood fire" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-950/70"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif italic leading-tight mb-6"
          >
            Smoke, Fire, & <br className="hidden md:block" />
            Pristine Ingredients.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-white/40 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Elemental cooking returning to its roots. Wood-fired steaks, Mediterranean coastal catch, and an atmosphere built for lingering.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/menu" className="w-full sm:w-auto bg-amber-600 hover:bg-amber-500 text-white px-8 py-5 rounded-lg text-sm font-bold uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(217,119,6,0.2)] transition-all text-center">
              Order Online
            </Link>
            <Link to="/contact" className="w-full sm:w-auto bg-white/5 border border-white/10 text-white hover:border-amber-600/50 px-8 py-5 rounded-lg text-sm font-bold uppercase tracking-[0.2em] transition-all text-center">
              Reserve a Table
            </Link>
          </motion.div>
        </div>

        {/* Social Proof Strip */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-black/40 backdrop-blur-md py-4"
        >
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 text-[10px] uppercase tracking-widest text-white/40">
            <span className="flex items-center gap-2 font-bold"><span className="text-amber-500">★</span> 4.8 on Google</span>
            <span className="hidden md:block w-1 h-1 bg-white/20 rounded-full"></span>
            <span className="font-bold">Over 500+ 5-star reviews</span>
            <span className="hidden md:block w-1 h-1 bg-white/20 rounded-full"></span>
            <span className="font-bold">Featured in Culinary Weekly</span>
          </div>
        </motion.div>
      </section>

      {/* Featured Dishes */}
      <section className="py-24 bg-[radial-gradient(circle_at_top_right,rgba(217,119,6,0.08),transparent_50%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Featured</span>
              <h2 className="text-4xl md:text-5xl font-serif italic mb-4">Signatures from the Hearth</h2>
              <p className="text-white/40 max-w-xl text-sm leading-relaxed">
                Our menu revolves around the custom oak-wood grill. These are the dishes that define Ember & Oak.
              </p>
            </div>
            <Link to="/menu" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold shrink-0">
              Explore full menu <ArrowRight size={14} />
            </Link>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {signatureDishes.map((dish) => (
              <motion.div key={dish.id} variants={itemVariants}>
                <DishCard dish={dish} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Order Direct */}
      <section className="py-24 bg-black/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Commitment</span>
            <h2 className="text-4xl md:text-5xl font-serif italic mb-4">Why Order Directly?</h2>
            <p className="text-white/40 text-sm leading-relaxed">
              Skip the third-party apps. Ordering directly from our website guarantees the best price and supports our kitchen staff directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-500 mb-6 shadow-[0_0_15px_rgba(217,119,6,0.1)]">
                <Flame size={24} />
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-3">Better Pricing</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                No hidden service fees or inflated app menus. You pay exactly what you would dining in our restaurant.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-500 mb-6 shadow-[0_0_15px_rgba(217,119,6,0.1)]">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-3">Priority Preparation</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Direct orders go straight to our kitchen display, ensuring your food is ready exactly when promised.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-500 mb-6 shadow-[0_0_15px_rgba(217,119,6,0.1)]">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-3">Support Local</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                100% of your payment stays with the restaurant, allowing us to source better ingredients and pay fair wages.
              </p>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center">
             <Link to="/menu" className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-5 rounded-lg text-sm font-bold uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(217,119,6,0.2)] transition-all text-center">
              Start Order
            </Link>
          </div>
        </div>
      </section>

      {/* Story Teaser */}
      <section className="py-24 bg-[#070707]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute top-0 -left-10 w-64 h-64 bg-amber-600/10 blur-3xl rounded-full"></div>
                <img 
                  src="/images/philosophy-image.jpeg" 
                  alt="Chef plating a dish with tweezers in a bustling kitchen" 
                  className="w-full h-auto object-cover rounded-2xl border border-white/5 relative z-10"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative z-10">
              <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Origins</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic mb-6">Our Philosophy</h2>
              <p className="text-white/60 mb-6 text-sm leading-relaxed">
                Ember & Oak was born from a simple belief: that the best food doesn't need to be manipulated, it needs to be respected. 
              </p>
              <p className="text-white/40 mb-8 text-sm leading-relaxed">
                We source from farmers we know by name, and we cook over live fire. It is an elemental, honest approach to dining that strips away the pretense of fine dining while maintaining exacting standards. We're always looking for people who share this obsession with real food.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors text-[10px] font-bold uppercase tracking-widest border-b border-amber-500/30 pb-1">
                Read our full story <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-black/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Testimonials</span>
              <h2 className="text-4xl md:text-5xl font-serif italic">Words From Our Guests</h2>
            </div>
            <Link to="/reviews" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest shrink-0">
              Read all reviews <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
