export interface Artisan {
  id: string;
  name: string;
  trade: string;
  rating: number;
  reviews: number;
  location: string;
  imageUrl?: string;
}

export interface Review {
  id: string;
  author: string;
  content: string;
  rating: number;
  date: string;
}

export interface ServiceArea {
  city: string;
  areas: string[];
  artisanCount: number;
}
