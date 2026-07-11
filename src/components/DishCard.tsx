import React from 'react';
import { Link } from 'react-router-dom';
import { Dish } from '../types';

interface DishCardProps {
  dish: Dish;
  key?: React.Key;
}

export default function DishCard({ dish }: DishCardProps) {
  return (
    <Link 
      to={`/menu/${dish.id}`}
      className={`group relative flex flex-col overflow-hidden justify-between transition-all duration-300 rounded-2xl ${
        dish.isSignature
          ? 'bg-white/[0.03] border border-amber-600/30 shadow-[0_10px_40px_rgba(217,119,6,0.1)]'
          : 'bg-white/[0.03] border border-white/5 hover:bg-white/[0.05]'
      }`}
    >
      {dish.isSignature && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/10 blur-3xl z-0 pointer-events-none"></div>
      )}
      <div className="aspect-[4/3] overflow-hidden relative z-10">
        <img 
          src={dish.image} 
          alt={dish.imageAlt} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {dish.isSignature && (
          <div className="absolute top-3 right-3 px-2 py-1 bg-amber-600/20 text-amber-500 rounded text-[9px] uppercase tracking-tighter font-bold backdrop-blur-sm">
            Chef's Signature
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow relative z-10">
        <div className="flex justify-between items-start mb-4 gap-4">
          <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-amber-500 transition-colors">
            {dish.name}
          </h3>
          <span className="text-white/80 font-serif italic text-xl font-medium shrink-0">
            ₹{dish.price}
          </span>
        </div>
        <p className="text-white/40 text-sm leading-relaxed mb-4 flex-grow">
          {dish.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {dish.dietary.map(tag => (
            <span key={tag} className="px-2 py-1 bg-white/5 rounded text-[9px] uppercase tracking-tighter text-white/50">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
