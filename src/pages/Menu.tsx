import { useState } from 'react';
import { motion } from 'motion/react';
import { dishes } from '../data';
import DishCard from '../components/DishCard';

export default function Menu() {
  const categories = ['All', 'Starters', 'Mains', 'Desserts', 'Drinks'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredDishes = activeCategory === 'All' 
    ? dishes 
    : dishes.filter(d => d.category === activeCategory);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[radial-gradient(circle_at_top_right,rgba(217,119,6,0.08),transparent_50%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Offerings</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif italic mb-6">Seasonal Curations</h1>
          <p className="text-white/40 max-w-2xl mx-auto text-sm leading-relaxed">
            A celebration of fire, smoke, and seasonal ingredients. Everything is prepared fresh daily.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-6 mb-16 text-[10px] uppercase tracking-widest font-bold">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`transition-colors pb-1 ${
                activeCategory === category 
                  ? 'text-amber-500 border-b border-amber-500' 
                  : 'text-white/40 hover:text-white border-b border-transparent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredDishes.map((dish) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={dish.id}
            >
              <DishCard dish={dish} />
            </motion.div>
          ))}
        </motion.div>

        {filteredDishes.length === 0 && (
          <div className="text-center py-24 text-white/30 text-sm">
            No dishes found in this category.
          </div>
        )}

      </div>
    </div>
  );
}
