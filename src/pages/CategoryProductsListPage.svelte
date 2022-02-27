<script lang="ts">
  import MdChevronLeft from 'svelte-icons/md/MdChevronLeft.svelte';
  import GoSettings from 'svelte-icons/go/GoSettings.svelte';
  import { useNavigate } from 'svelte-navigator';

  import Header from '../components/molecules/Header.svelte';
  import ProductCard from '../components/molecules/ProductCard.svelte';
  import { ALL_PRODUCTS } from '../core/mock_data';

  const navigator = useNavigate();

  export let categoryId = '';
  let products = [...ALL_PRODUCTS, ...ALL_PRODUCTS, ...ALL_PRODUCTS];

  const onNavigateBack = () => navigator('/explore');

  const onOpenFilters = () => {};
</script>

<div class="h-full">
  <Header class="m-4" title="Beverages">
    <div slot="left" class="w-8" on:click={onNavigateBack}>
      <MdChevronLeft />
    </div>

    <div slot="right" class="w-6" on:click={onOpenFilters}>
      <GoSettings />
    </div>
  </Header>

  <div class="m-4 grid grid-cols-2 gap-4 justify-items-center">
    {#each products as product}
      <ProductCard
        id={product.id}
        imageUrl={product.imageUrl}
        name={product.name}
        price={product.price}
        amount={product.amount}
      />
    {/each}
  </div>
</div>
