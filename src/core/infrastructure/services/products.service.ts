import { firstValueFrom, timer } from 'rxjs';

import { ALL_PRODUCTS } from '../../mock_data';

export const getHomeProducts = async () => {
  console.log('START HOME PRODUCTS');

  await firstValueFrom(timer(1000));

  console.log('END HOME PRODUCTS');

  return {
    exclusive: [...ALL_PRODUCTS],
    bestSelling: [...ALL_PRODUCTS],
    groceries: [...ALL_PRODUCTS],
  };
};

export const getProductById = async (id: string) => {
  console.log('START PRODUCT BY ID');

  await firstValueFrom(timer(1000));

  console.log('END PRODUCT BY ID');

  const foundProduct = ALL_PRODUCTS.find((p) => p.id === id);
  return foundProduct;
};
