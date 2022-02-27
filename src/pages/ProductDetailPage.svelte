<script lang="ts">
  import { onMount } from 'svelte';
  import { useNavigate } from 'svelte-navigator';
  import IoIosHeartEmpty from 'svelte-icons/io/IoIosHeartEmpty.svelte';
  import MdChevronLeft from 'svelte-icons/md/MdChevronLeft.svelte';
  import Button from '../components/atoms/Button.svelte';
  import Chip from '../components/atoms/Chip.svelte';
  import Divider from '../components/atoms/Divider.svelte';
  import Stars from '../components/atoms/Stars.svelte';
  import Accordeon from '../components/molecules/Accordeon.svelte';
  import ProductCounter from '../components/molecules/ProductCounter.svelte';
  import type { Product } from '../core/domain/models/product.model';
  import { ALL_PRODUCTS } from '../core/mock_data';
  const navigate = useNavigate();

  export let id = '';
  export let product: Product = {
    id: '',
    name: '',
    description: '',
    imageUrl: '',
    amount: '',
    price: '',
  };

  const navigateBack = () => {
    navigate('/products');
  };

  onMount(() => {
    const foundProduct = ALL_PRODUCTS.find((p) => p.id === id);
    product = foundProduct;
  });
</script>

<div class="h-full flex flex-col relative">
  <div class="absolute top-2 left-0 w-8" on:click={navigateBack}>
    <MdChevronLeft />
  </div>

  <div class="w-full h-80 bg-gray-300 flex justify-center items-center">
    <img class="w-60" src={product.imageUrl} alt={product.name} />
  </div>

  <div class="m-4 flex justify-between items-center">
    <div class="flex flex-col">
      <span class="text-xl font-bold">{product.name}</span>

      <span class="text-sm">{product.amount}</span>
    </div>

    <div class="w-8">
      <IoIosHeartEmpty />
    </div>
  </div>

  <div class="m-4 flex justify-between items-center">
    <ProductCounter />

    <span class="text-xl font-bold">{product.price}</span>
  </div>

  <Divider class="mt-4 mx-4" />

  <Accordeon class="m-4">
    <span slot="title" class="font-semibold">Product Detail</span>

    <span slot="content" class="mt-2 text-sm">{product.description}</span>
  </Accordeon>

  <Divider class="mx-4" />

  <Accordeon class="m-4">
    <span slot="title" class="font-semibold">Nutritions</span>

    <Chip slot="extra" label="100gr" />

    <span slot="content" class="mt-2 text-sm">{product.description}</span>
  </Accordeon>

  <Divider class="mx-4" />

  <Accordeon class="m-4">
    <span slot="title" class="font-semibold">Review</span>

    <Stars slot="extra" count={5} />

    <span slot="content" class="mt-2 text-sm">{product.description}</span>
  </Accordeon>

  <Button class="mx-4" label="Add To Basket" />
</div>
