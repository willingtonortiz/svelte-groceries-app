import { ALL_PRODUCTS } from '../../../core/mock_data';
import { cartQuery } from './cart.query';
import { cartStore } from './cart.store';

export const addProductToCart = (productId: string, count: number = 1) => {
  const product = ALL_PRODUCTS.find((product) => product.id === productId);

  cartStore.add({ ...product, count });
};

export const incrementProductCount = (productId: string) => {
  cartStore.update(productId, (product) => ({
    ...product,
    count: product.count + 1,
  }));
};

export const decrementProductCount = (productId: string) => {
  const product = cartQuery.getEntity(productId);
  if (!product) {
    return;
  }
  if (product.count === 1) {
    removeProductFromCart(productId);
    return;
  }

  cartStore.update(productId, (product) => ({
    ...product,
    count: product.count - 1,
  }));
};

export const removeProductFromCart = (productId: string) => {
  cartStore.remove(productId);
};

export const resetCart = () => {
  cartStore.set([]);
};
