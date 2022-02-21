<script lang="ts">
  import ProductsRow from '../components/organisms/ProductsRow.svelte';
  import Title from '../components/molecules/Title.svelte';
  import {
    EXCLUSIVE_OFFER_PRODUCTS,
    BEST_SELLING_PRODUCTS,
    GROCERIES_PRODUCTS,
    PRODUCT_CATEGORIES,
  } from '../core/mock_data';
  import ProductCategoryRow from '../components/molecules/ProductCategoryRow.svelte';
  import Input from '../components/atoms/Input.svelte';
  import BannerCarrousel from '../components/molecules/BannerCarrousel.svelte';

  const exclusiveOfferProducts = EXCLUSIVE_OFFER_PRODUCTS;
  const bestSellingProducts = BEST_SELLING_PRODUCTS;
  const groceriesProducts = GROCERIES_PRODUCTS;

  const productCategories = PRODUCT_CATEGORIES;
</script>

<div class="h-full">
  <div class="m-4 flex justify-center">
    <img src="images/logo.png" alt="logo" />
  </div>

  <Input class="m-4" />

  <BannerCarrousel
    class="m-4"
    images={['images/banner.png', 'images/banner.png', 'images/banner.png']}
  />

  <Title title="Exclusive Offer" link="See all" />
  <ProductsRow
    products={exclusiveOfferProducts}
    on:onAdd={(data) => console.log(data.detail)}
  />

  <Title title="Best Selling" link="See all" />
  <ProductsRow
    products={bestSellingProducts}
    on:onAdd={(data) => console.log(data.detail)}
  />

  <Title title="Groceries" link="See all" />
  <ProductCategoryRow categories={productCategories} class="my-4" />
  <ProductsRow
    products={groceriesProducts}
    on:onAdd={(data) => console.log(data.detail)}
  />
</div>
