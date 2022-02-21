import type { Product } from './domain/models/product.model';

const banana: Product = {
  id: '01',
  imageUrl: 'images/banana.png',
  name: 'Organic Bananas',
  amount: '7pcs, Priceg',
  price: '$4.99',
};
const apple: Product = {
  id: '02',
  imageUrl: 'images/apple.png',
  name: 'Red Apple',
  amount: '1kg, Priceg',
  price: '$4.99',
};
const bellPepper: Product = {
  id: '03',
  imageUrl: 'images/bell-pepper-red.png',
  name: 'Bell Pepper Red',
  amount: '1kg, Priceg',
  price: '$4.99',
};
const ginger: Product = {
  id: '04',
  imageUrl: 'images/ginger.png',
  name: 'Ginger',
  amount: '250gm, Priceg',
  price: '$4.99',
};
const beefBone: Product = {
  id: '05',
  imageUrl: 'images/beef-bone.png',
  name: 'Beef Bone',
  amount: '1kg, Priceg',
  price: '$4.99',
};
const broilerChicken: Product = {
  id: '06',
  imageUrl: 'images/broiler-chicken.png',
  name: 'Broiler Chicken',
  amount: '1kg, Priceg',
  price: '$4.99',
};

export const EXCLUSIVE_OFFER_PRODUCTS: Product[] = [
  banana,
  apple,
  bellPepper,
  ginger,
  beefBone,
  broilerChicken,
];

export const BEST_SELLING_PRODUCTS: Product[] = [
  bellPepper,
  ginger,
  beefBone,
  broilerChicken,
  banana,
  apple,
];

export const GROCERIES_PRODUCTS: Product[] = [
  beefBone,
  broilerChicken,
  banana,
  apple,
  bellPepper,
  ginger,
];

const pulsesCategory = { name: 'Pulses', imageUrl: 'images/pulses.png' };
const RiceCategory = { name: 'Rice', imageUrl: 'images/rice.png' };

export const PRODUCT_CATEGORIES = [pulsesCategory, RiceCategory];
