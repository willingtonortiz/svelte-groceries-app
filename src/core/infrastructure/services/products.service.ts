import { firstValueFrom, timer } from 'rxjs';

import { ALL_PRODUCTS } from '../../mock_data';

export const getHomeProducts = async () => {
  await firstValueFrom(timer(2000));

  return {
    exclusive: [...ALL_PRODUCTS],
    bestSelling: [...ALL_PRODUCTS],
    groceries: [...ALL_PRODUCTS],
  };
};

export const getProductById = async (id: string) => {
  await firstValueFrom(timer(2000));

  const foundProduct = ALL_PRODUCTS.find((p) => p.id === id);
  return foundProduct;
};
