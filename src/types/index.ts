export interface Product {
  id: string;
  name: string;
  slug: string;
  price: string;
  image: string;
  description: string;
  features: string[];
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  business: string;
  review: string;
  image: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
  title: string;
}