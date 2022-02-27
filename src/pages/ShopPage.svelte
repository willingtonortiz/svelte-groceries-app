<script lang="ts">
  import { useNavigate } from 'svelte-navigator';
  import {
    EXCLUSIVE_OFFER_PRODUCTS,
    BEST_SELLING_PRODUCTS,
    GROCERIES_PRODUCTS,
    PRODUCT_CATEGORIES,
  } from '../core/mock_data';
  import ProductsRow from '../components/organisms/ProductsRow.svelte';
  import Title from '../components/molecules/Title.svelte';
  import ProductCategoryRow from '../components/molecules/ProductCategoryRow.svelte';
  import Input from '../components/atoms/Input.svelte';
  import BannerCarrousel from '../components/molecules/BannerCarrousel.svelte';

  const navigate = useNavigate();

  const exclusiveOfferProducts = EXCLUSIVE_OFFER_PRODUCTS;
  const bestSellingProducts = BEST_SELLING_PRODUCTS;
  const groceriesProducts = GROCERIES_PRODUCTS;

  const productCategories = PRODUCT_CATEGORIES;

  const onProductClicked = ({ detail }: CustomEvent) => {
    navigate(`/products/${detail.id}`);
  };
</script>

<div class="h-full">
  <div class="m-4 flex justify-center">
    <img src="images/logo.png" alt="logo" />
  </div>

  <Input class="m-4" placeholder="Search Store" />

  <BannerCarrousel
    class="m-4"
    images={['images/banner.png', 'images/banner.png', 'images/banner.png']}
  />

  <Title title="Exclusive Offer" link="See all" />
  <ProductsRow
    products={exclusiveOfferProducts}
    on:onClick={onProductClicked}
  />

  <Title title="Best Selling" link="See all" />
  <ProductsRow products={bestSellingProducts} on:onClick={onProductClicked} />

  <Title title="Groceries" link="See all" />
  <ProductCategoryRow categories={productCategories} class="my-4" />
  <ProductsRow products={groceriesProducts} on:onClick={onProductClicked} />
</div>
