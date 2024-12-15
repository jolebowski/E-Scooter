import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Trottinette Électrique Pro Max",
    price: 799.99,
    description: "La Pro Max est notre modèle haut de gamme avec une autonomie exceptionnelle et des performances de pointe. Parfaite pour les trajets quotidiens comme pour les longues distances.",
    image: "https://images.unsplash.com/photo-1565236289923-3e97e933ce14?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Premium",
    stock: 10,
    specifications: {
      maxSpeed: "25 km/h",
      range: "40 km",
      weight: "12 kg",
      maxLoad: "120 kg",
      chargingTime: "4 heures",
      motor: "350W"
    },
    rating: 4.8,
    reviews: [
      {
        id: 1,
        userId: 1,
        userName: "Jean D.",
        rating: 5,
        comment: "Excellente trottinette, très confortable et autonomie au top !",
        date: "2023-06-15",
        likes: 12
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1565236289923-3e97e933ce14?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ]
  },
  {
    id: 2,
    name: "Urban Rider Lite",
    price: 449.99,
    description: "Légère et compacte, l'Urban Rider Lite est idéale pour la ville. Son design pliable la rend parfaite pour les transports en commun.",
    image: "https://images.unsplash.com/photo-1675980892208-7b6ba39120ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Urbaine",
    stock: 15,
    specifications: {
      maxSpeed: "20 km/h",
      range: "25 km",
      weight: "10 kg",
      maxLoad: "100 kg",
      chargingTime: "3 heures",
      motor: "250W"
    },
    rating: 4.5,
    reviews: [],
    images: [
      "https://images.unsplash.com/photo-1675980892208-7b6ba39120ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 3,
    name: "SpeedMaster 3000",
    price: 999.99,
    description: "La SpeedMaster 3000 est conçue pour les amateurs de sensations fortes. Puissante et stable, elle offre une expérience de conduite incomparable.",
    image: "https://plus.unsplash.com/premium_photo-1715697682205-e033c9ec5efa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Sport",
    stock: 5,
    specifications: {
      maxSpeed: "35 km/h",
      range: "45 km",
      weight: "15 kg",
      maxLoad: "130 kg",
      chargingTime: "5 heures",
      motor: "500W"
    },
    rating: 4.9,
    reviews: [],
    images: [
      "https://plus.unsplash.com/premium_photo-1715697682205-e033c9ec5efa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 4,
    name: "EcoRider Basic",
    price: 299.99,
    description: "L'EcoRider Basic est parfaite pour débuter. Abordable mais fiable, elle offre toutes les fonctionnalités essentielles.",
    image: "https://plus.unsplash.com/premium_photo-1715255817287-9ee9e976570d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Entrée de gamme",
    stock: 20,
    specifications: {
      maxSpeed: "18 km/h",
      range: "20 km",
      weight: "9 kg",
      maxLoad: "90 kg",
      chargingTime: "3 heures",
      motor: "200W"
    },
    rating: 4.2,
    reviews: [],
    images: [
      "https://plus.unsplash.com/premium_photo-1715255817287-9ee9e976570d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 5,
    name: "Adventure X",
    price: 899.99,
    description: "L'Adventure X est conçue pour l'exploration urbaine et tout-terrain. Avec ses pneus larges et sa suspension renforcée.",
    image: "https://images.unsplash.com/photo-1723432204814-a078b73e95ff?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Tout-terrain",
    stock: 8,
    specifications: {
      maxSpeed: "30 km/h",
      range: "35 km",
      weight: "16 kg",
      maxLoad: "125 kg",
      chargingTime: "4.5 heures",
      motor: "450W"
    },
    rating: 4.7,
    reviews: [],
    images: [
      "https://images.unsplash.com/photo-1723432204814-a078b73e95ff?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  }
];
