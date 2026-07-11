import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Check } from 'lucide-react';
import { dishes, reviews } from '../data';
import DishCard from '../components/DishCard';
import ReviewCard from '../components/ReviewCard';
import { useEffect } from 'react';

export default function DishDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const dish = dishes.find(d => d.id === id);
  
  // Scroll to top on mount or id change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!dish) {
    return (
      <div className="pt-40 pb-24 min-h-screen bg-stone-950 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl mb-4">Dish not found</h1>
        <p className="text-stone-400 mb-8">The item you're looking for doesn't exist or has been removed from the menu.</p>
        <button 
          onClick={() => navigate('/menu')}
          className="bg-amber-600 hover:bg-amber-700 text-stone-50 px-6 py-3 font-medium transition-colors"
        >
          Back to Menu
        </button>
      </div>
    );
  }

  // Find related dishes in same category
  const relatedDishes = dishes
    .filter(d => d.category === dish.category && d.id !== dish.id)
    .slice(0, 3);

  // Find reviews for this specific dish
  const dishReviews = reviews.filter(r => r.dishId === dish.id);

  return (
    <div className="pt-24 min-h-screen bg-[#070707] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/5 blur-[120px] rounded-full z-0 pointer-events-none"></div>
      
      {/* Detail Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <button 
            onClick={() => navigate('/menu')}
            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 text-[10px] uppercase tracking-widest font-bold relative z-10"
          >
            <ArrowLeft size={14} /> Back to Menu
          </button>

          <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">
            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="absolute inset-0 bg-amber-600/20 blur-2xl rounded-full translate-x-4 translate-y-4"></div>
              <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-white/[0.02] border border-white/5 relative z-10">
                <img 
                  src={dish.image} 
                  alt={dish.imageAlt} 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-1/2 flex flex-col justify-center relative z-10"
            >
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-amber-500 bg-amber-500/10 px-4 py-2 rounded">
                  {dish.category}
                </span>
                {dish.isSignature && (
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/60 bg-white/5 px-4 py-2 rounded">
                    Chef's Signature
                  </span>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif italic mb-6">{dish.name}</h1>
              <p className="text-3xl text-white/80 font-serif italic font-medium mb-10">₹{dish.price}</p>
              
              <p className="text-white/60 text-base leading-relaxed mb-10">
                {dish.longDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 border-y border-white/5 py-10">
                <div>
                  <h3 className="text-white font-serif italic text-2xl mb-5">Key Ingredients</h3>
                  <ul className="flex flex-col gap-3">
                    {dish.ingredients.map(ing => (
                      <li key={ing} className="flex items-center gap-3 text-white/50 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                        {ing}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-serif italic text-2xl mb-5">Dietary Info</h3>
                  <ul className="flex flex-col gap-3">
                    {dish.dietary.map(diet => (
                      <li key={diet} className="flex items-center gap-3 text-white/50 text-sm">
                        <Check size={16} className="text-amber-500 shrink-0" />
                        {diet}
                      </li>
                    ))}
                    {dish.dietary.length === 0 && (
                      <li className="text-white/30 text-sm italic">No specific dietary claims.</li>
                    )}
                  </ul>
                </div>
              </div>

              <button className="w-full bg-amber-600 hover:bg-amber-500 text-white px-8 py-5 rounded-lg text-sm font-bold shadow-[0_10px_30px_rgba(217,119,6,0.2)] transition-all text-center uppercase tracking-[0.2em]">
                Add to Order
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dish Reviews */}
      {dishReviews.length > 0 && (
        <section className="py-20 bg-black/20 border-t border-white/5 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Testimonials</span>
              <h2 className="text-4xl md:text-5xl font-serif italic">Guest Reviews</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {dishReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Dishes */}
      {relatedDishes.length > 0 && (
        <section className="py-20 bg-transparent border-t border-white/5 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif italic mb-10 border-b border-white/5 pb-4">More {dish.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedDishes.map((relatedDish) => (
                <DishCard key={relatedDish.id} dish={relatedDish} />
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
