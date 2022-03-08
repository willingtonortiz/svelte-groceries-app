import { createEntityQuery } from '@datorama/akita';
import { map } from 'rxjs/operators';

import { CartProduct, CartState, cartStore } from './cart.store';

const reduceProductsToTotalAmount = (products: CartProduct[]) =>
  products.reduce((accu, curr) => {
    return accu + curr.count * curr.price;
  }, 0);

export const cartQuery = createEntityQuery<CartState>(cartStore);
export const cartProducts = cartQuery.selectAll();
export const totalAmountOfCart = cartQuery
  .selectAll()
  .pipe(map(reduceProductsToTotalAmount));
export const totalAmountOfCartStr = totalAmountOfCart.pipe(
  map((amount) => amount.toFixed(2))
);
