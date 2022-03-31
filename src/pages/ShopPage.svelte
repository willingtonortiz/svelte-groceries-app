<script lang="ts">
  import { useNavigate } from 'svelte-navigator';
  import { useQuery } from '@sveltestack/svelte-query';
  import { FlatToast, ToastContainer, toasts } from 'svelte-toasts';

  import ProductsRow from '../components/organisms/ProductsRow.svelte';
  import Title from '../components/molecules/Title.svelte';
  import ProductCategoryRow from '../components/molecules/ProductCategoryRow.svelte';
  import Input from '../components/atoms/Input.svelte';
  import BannerCarrousel from '../components/molecules/BannerCarrousel.svelte';
  import { addProductToCart } from '../modules/cart/state';
  import { PRODUCT_CATEGORIES } from '../core/mock_data';
  import { getHomeProducts } from '../core/infrastructure/services/products.service';
  import RowSkeleton from '../components/molecules/RowSkeleton.svelte';

  const navigate = useNavigate();

  // Queries
  const homeProducts = useQuery('homeProducts', getHomeProducts);
  const productCategories = PRODUCT_CATEGORIES;

  const onProductClicked = ({ detail }: CustomEvent) =>
    navigate(`/products/${detail.id}`);
  const addProductHandler = (productId: string) => {
    toasts.clearAll();

    toasts.info({
      title: 'Product added',
      description: 'Product added to cart',
      theme: 'light',
      placement: 'bottom-center',
      duration: 5000,
      showProgress: true,
      onClick: () => {
        toasts.clearAll();
        navigate('/cart');
      },
    });

    addProductToCart(productId);
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
  {#if $homeProducts.isLoading}
    <RowSkeleton />
  {:else}
    <ProductsRow
      products={$homeProducts.data.exclusive}
      on:onAdd={({ detail }) => addProductHandler(detail.productId)}
      on:click={onProductClicked}
    />
  {/if}

  <Title title="Best Selling" link="See all" />
  {#if $homeProducts.isLoading}
    <RowSkeleton />
  {:else}
    <ProductsRow
      products={$homeProducts.data.bestSelling}
      on:onAdd={({ detail }) => addProductHandler(detail.productId)}
      on:click={onProductClicked}
    />
  {/if}

  <Title title="Groceries" link="See all" />
  <ProductCategoryRow categories={productCategories} class="my-4" />
  {#if $homeProducts.isLoading}
    <RowSkeleton />
  {:else}
    <ProductsRow
      products={$homeProducts.data.groceries}
      on:onAdd={({ detail }) => addProductHandler(detail.productId)}
      on:click={onProductClicked}
    />
  {/if}
</div>

<ToastContainer let:data>
  <div class="bg-white">
    <FlatToast {data} />
  </div>
</ToastContainer>
