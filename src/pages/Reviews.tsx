import { motion } from 'motion/react';
import { reviews } from '../data';
import ReviewCard from '../components/ReviewCard';
import { Star } from 'lucide-react';

export default function Reviews() {
  // Mock average
  const averageRating = 4.9;
  const totalReviews = 532;

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#070707] relative overflow-hidden">
      <div className="absolute top-0 -left-10 w-64 h-64 bg-amber-600/10 blur-3xl rounded-full z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/5 blur-3xl rounded-full z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 border-b border-white/5 pb-16">
          <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Testimonials</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif italic mb-8">Guest Experiences</h1>
          
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-6xl font-serif text-white">{averageRating}</span>
              <div className="flex flex-col items-start gap-1">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className={i < Math.floor(averageRating) ? "text-amber-500 fill-amber-500" : "text-white/10"} 
                    />
                  ))}
                </div>
                <span className="text-white/40 text-[10px] uppercase tracking-widest mt-1">Based on {totalReviews} reviews</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <ReviewCard review={review} />
            </motion.div>
          ))}
          
          {/* Add some more mock reviews just for the grid density */}
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={`mock-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: (reviews.length + i) * 0.05, duration: 0.5 }}
            >
              <ReviewCard 
                review={{
                  id: `mock-${i}`,
                  author: ['James Wright', 'Olivia Martinez', 'Thomas Becker', 'Sophia Lee'][i-1],
                  rating: 5,
                  date: ['March 12, 2024', 'March 28, 2024', 'April 05, 2024', 'April 19, 2024'][i-1],
                  content: [
                    "An absolute triumph of a meal. The service was attentive without being overbearing.",
                    "Best steak I've had in the city. The wood fire makes a massive difference.",
                    "Beautiful interior, fantastic wine list, and the Branzino was cooked perfectly.",
                    "A great spot for a celebration. They really know how to make an evening feel special."
                  ][i-1]
                }} 
              />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
