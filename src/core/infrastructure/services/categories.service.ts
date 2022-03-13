import { firstValueFrom, timer } from 'rxjs';

import type { Category } from '../../domain/models/category.model';

const PRODUCT_CATEGORIES: Category[] = [
  {
    id: '01',
    name: 'Frash Fruits & Vegetable',
    imageUrl: 'images/category-01.png',
  },
  { id: '02', name: 'Cooking Oil & Ghee', imageUrl: 'images/category-02.png' },
  { id: '03', name: 'Meat & Fish', imageUrl: 'images/category-03.png' },
  { id: '04', name: 'Bakery & Snacks', imageUrl: 'images/category-04.png' },
  { id: '05', name: 'Dairy & Eggs', imageUrl: 'images/category-05.png' },
  { id: '06', name: 'Beverages', imageUrl: 'images/category-06.png' },
  { id: '07', name: 'Dairy & Eggs', imageUrl: 'images/category-07.png' },
  { id: '08', name: 'Beverages', imageUrl: 'images/category-08.png' },
];

export const getAllCategories = async () => {
  await firstValueFrom(timer(2000));

  return [...PRODUCT_CATEGORIES, ...PRODUCT_CATEGORIES];
};
