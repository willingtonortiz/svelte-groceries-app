import { createEntityStore, EntityState } from '@datorama/akita';

export type CartProduct = {
  id: string;
  imageUrl: string;
  name: string;
  detail: string;
  count: number;
  price: number;
};

export interface CartState extends EntityState<CartProduct, string> {}

export const cartStore = createEntityStore<CartState>({}, { name: 'cart' });
