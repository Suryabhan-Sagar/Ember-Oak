export interface Dish {
  id: string;
  name: string;
  category: 'Starters' | 'Mains' | 'Desserts' | 'Drinks';
  description: string;
  longDescription: string;
  price: number;
  image: string;
  imageAlt: string;
  dietary: string[];
  ingredients: string[];
  isSignature?: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  content: string;
  avatar?: string;
  dishId?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  imageAlt: string;
}
