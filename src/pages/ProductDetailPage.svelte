<script lang="ts">
  import { useNavigate } from 'svelte-navigator';
  import { useQuery } from '@sveltestack/svelte-query';
  import { Circle2 } from 'svelte-loading-spinners';
  import IoIosHeartEmpty from 'svelte-icons/io/IoIosHeartEmpty.svelte';
  import MdChevronLeft from 'svelte-icons/md/MdChevronLeft.svelte';

  import { addProductToCart } from '../modules/cart/state';
  import Button from '../components/atoms/Button.svelte';
  import Chip from '../components/atoms/Chip.svelte';
  import Divider from '../components/atoms/Divider.svelte';
  import Stars from '../components/atoms/Stars.svelte';
  import Accordeon from '../components/molecules/Accordeon.svelte';
  import ProductCounter from '../components/molecules/ProductCounter.svelte';
  import { getProductById } from '../core/infrastructure/services/products.service';

  export let productId = '';
  let count = 0;
  let totalAmount = '0';
  const navigate = useNavigate();
  const product = useQuery(['getProductById', productId], () =>
    getProductById(productId)
  );

  $: if ($product.data) {
    totalAmount = (count * $product.data.price).toFixed(2);
  }

  const navigateBack = () => navigate('/products');
  const onDecrement = () => count--;
  const onIncrement = () => count++;
  const addProduct = () => addProductToCart($product.data.id, count);
</script>

<div class="h-full flex flex-col relative">
  {#if $product.isLoading}
    <div class="h-full flex justify-center items-center">
      <Circle2 />
    </div>
  {:else}
    <div class="absolute top-2 left-0 w-8" on:click={navigateBack}>
      <MdChevronLeft />
    </div>

    <div class="w-full h-80 bg-gray-300 flex justify-center items-center">
      <img class="w-60" src={$product.data.imageUrl} alt={$product.data.name} />
    </div>

    <div class="m-4 flex justify-between items-center">
      <div class="flex flex-col">
        <span class="text-xl font-bold">{$product.data.name}</span>

        <span class="text-sm">{$product.data.detail}</span>
      </div>

      <div class="w-8">
        <IoIosHeartEmpty />
      </div>
    </div>

    <div class="m-4 flex justify-between items-center">
      <ProductCounter
        {count}
        min={0}
        on:increment={onIncrement}
        on:decrement={onDecrement}
      />

      <span class="text-xl font-bold">${totalAmount}</span>
    </div>

    <Divider class="mt-4 mx-4" />

    <Accordeon class="m-4">
      <span slot="title" class="font-semibold">Product Detail</span>

      <span slot="content" class="mt-2 text-sm">
        {$product.data.description}
      </span>
    </Accordeon>

    <Divider class="mx-4" />

    <Accordeon class="m-4">
      <span slot="title" class="font-semibold">Nutritions</span>

      <Chip slot="extra" label="100gr" />

      <span slot="content" class="mt-2 text-sm"
        >{$product.data.description}</span
      >
    </Accordeon>

    <Divider class="mx-4" />

    <Accordeon class="m-4">
      <span slot="title" class="font-semibold">Review</span>

      <Stars slot="extra" count={5} />

      <span slot="content" class="mt-2 text-sm"
        >{$product.data.description}</span
      >
    </Accordeon>

    <Button class="m-4" on:click={addProduct}>Add To Basket</Button>
  {/if}
</div>
