<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import IoIosClose from 'svelte-icons/io/IoIosClose.svelte';
  import Divider from '../../../../components/atoms/Divider.svelte';
  import ProductCounter from '../../../../components/molecules/ProductCounter.svelte';

  const dispatch = createEventDispatcher();

  export let id = '';
  export let name = '';
  export let detail = '';
  export let imageUrl = '';
  export let amount = 0;
  export let price = 4.99;

  $: totalPrice = (price * amount).toFixed(2);

  const onRemove = () => dispatch('onRemove', { productId: id });
</script>

<div class={$$props.class}>
  <div class="mb-4 flex flex-row justify-start">
    <img src={imageUrl} alt={name} class="w-16 h-min mr-6" />

    <div class="flex flex-col">
      <p class="font-bold">{name}</p>
      <p class="mb-3 text-sm">{detail}</p>

      <ProductCounter bind:count={amount} on:increment on:decrement />
    </div>

    <div class="ml-auto flex flex-col justify-between items-end">
      <div class="w-8 text-gray-400" on:click={onRemove}>
        <IoIosClose />
      </div>

      <p class="font-bold">${totalPrice}</p>
    </div>
  </div>

  <Divider />
</div>
