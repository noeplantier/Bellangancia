export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: 'body-care' | 'nail-beauty';
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }
  