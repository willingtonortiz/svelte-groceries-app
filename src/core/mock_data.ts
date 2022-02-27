import type { Category } from './domain/models/category.model';
import type { Product } from './domain/models/product.model';

const banana: Product = {
  id: '01',
  imageUrl: '/images/banana.png',
  name: 'Organic Bananas',
  description:
    'Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
  amount: '7pcs, Priceg',
  price: '$4.99',
};
const apple: Product = {
  id: '02',
  imageUrl: '/images/apple.png',
  name: 'Red Apple',
  description:
    'Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
  amount: '1kg, Priceg',
  price: '$4.99',
};
const bellPepper: Product = {
  id: '03',
  imageUrl: '/images/bell-pepper-red.png',
  name: 'Bell Pepper Red',
  description:
    'Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
  amount: '1kg, Priceg',
  price: '$4.99',
};
const ginger: Product = {
  id: '04',
  imageUrl: '/images/ginger.png',
  name: 'Ginger',
  description:
    'Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
  amount: '250gm, Priceg',
  price: '$4.99',
};
const beefBone: Product = {
  id: '05',
  imageUrl: '/images/beef-bone.png',
  name: 'Beef Bone',
  description:
    'Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
  amount: '1kg, Priceg',
  price: '$4.99',
};
const broilerChicken: Product = {
  id: '06',
  imageUrl: '/images/broiler-chicken.png',
  name: 'Broiler Chicken',
  description:
    'Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
  amount: '1kg, Priceg',
  price: '$4.99',
};

export const ALL_PRODUCTS: Product[] = [
  banana,
  apple,
  bellPepper,
  ginger,
  beefBone,
  broilerChicken,
];

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

const pulsesCategory: Category = {
  id: '01',
  name: 'Pulses',
  imageUrl: 'images/pulses.png',
};
const RiceCategory = { id: '02', name: 'Rice', imageUrl: 'images/rice.png' };

export const PRODUCT_CATEGORIES = [pulsesCategory, RiceCategory];
