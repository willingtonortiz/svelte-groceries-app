<script lang="ts">
  import IoIosClose from 'svelte-icons/io/IoIosClose.svelte';

  import Divider from '../../../../components/atoms/Divider.svelte';
  import ProductCounter from '../../../../components/molecules/ProductCounter.svelte';

  export let id = '';
  export let imageUrl = '';
  export let name = '';
  export let amount = '';
  export let quantity = 1;
  export let price = 4.99;

  $: totalPrice = (price * quantity).toFixed(2);
</script>

<div class={$$props.class}>
  <div class="mb-4 flex flex-row justify-start">
    <img src={imageUrl} alt={name} class="w-16 h-min mr-6" />

    <div class="flex flex-col">
      <p class="font-bold">{name}</p>
      <p class="mb-3 text-sm">{amount}</p>

      <ProductCounter bind:count={quantity} />
    </div>

    <div class="ml-auto flex flex-col justify-between items-end">
      <div class="w-8 text-gray-400">
        <IoIosClose />
      </div>

      <p class="font-bold">${totalPrice}</p>
    </div>
  </div>

  <Divider />
</div>
