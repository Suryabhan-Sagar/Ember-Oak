import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '../types';

interface ReviewCardProps {
  review: Review;
  key?: React.Key;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 overflow-hidden flex flex-col justify-between hover:bg-white/[0.05] transition-all h-full">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < Math.floor(review.rating) ? "text-amber-500 fill-amber-500" : "text-white/10"} 
          />
        ))}
      </div>
      <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow italic">
        "{review.content}"
      </p>
      <div className="flex items-center justify-between mt-auto">
        <div className="flex flex-col">
          <span className="text-white/80 font-bold text-sm tracking-tight">{review.author}</span>
          <span className="text-white/30 text-[10px] uppercase tracking-widest">{review.date}</span>
        </div>
      </div>
    </div>
  );
}
