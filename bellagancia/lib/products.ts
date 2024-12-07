import { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Luxury Body Lotion',
    description: 'Rich, moisturizing body lotion with natural ingredients',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=2070',
    category: 'body-care'
  },
  {
    id: '2',
    name: 'Exfoliating Body Scrub',
    description: 'Gentle exfoliating scrub for smooth, radiant skin',
    price: 38.99,
    image: 'https://images.unsplash.com/photo-1601612628452-9e99ced43524?q=80&w=2070',
    category: 'body-care'
  },
  {
    id: '3',
    name: 'Premium Nail Polish Set',
    description: 'Long-lasting, chip-resistant nail polish collection',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=2070',
    category: 'nail-beauty'
  },
  {
    id: '4',
    name: 'Nail Care Kit',
    description: 'Complete professional nail care essentials',
    price: 54.99,
    image: 'https://images.unsplash.com/photo-1607779097040-26e80aa4576b?q=80&w=2070',
    category: 'nail-beauty'
  }
];

export const getProductsByCategory = (category: Product['category']) => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};
