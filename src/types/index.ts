export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  stock: number;
  specifications: {
    maxSpeed: string;
    range: string;
    weight: string;
    maxLoad: string;
    chargingTime: string;
    motor: string;
  };
  rating: number;
  reviews: Review[];
  images: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
}

export interface Review {
  id: number;
  userId: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  likes: number;
}

export interface Order {
  id: number;
  date: string;
  items: CartItem[];
  total: number;
  status: 'En attente' | 'Confirmée' | 'Expédiée' | 'Livrée';
  trackingNumber: string;
}

export interface Filter {
  category: string[];
  priceRange: [number, number];
  rating: number;
  inStock: boolean;
}
