<script lang="ts">
  import Button from '../components/atoms/Button.svelte';

  import Chip from '../components/atoms/Chip.svelte';
  import Divider from '../components/atoms/Divider.svelte';
  import Header from '../components/molecules/Header.svelte';
  import { ALL_PRODUCTS } from '../core/mock_data';
  import CartItem from '../modules/cart/ui/components/CartItem.svelte';

  let items = ALL_PRODUCTS;
</script>

<div class="h-full">
  <Header class="m-4" title="My Cart" />

  <Divider />

  {#each items as item}
    <CartItem
      class="mx-6 my-4"
      imageUrl={item.imageUrl}
      name={item.name}
      description={item.description}
      amount={item.amount}
      price={item.price}
    />
  {/each}

  <div class="mt-24 w-full h-1" />

  <div class="absolute left-0 right-0 bottom-20 mx-6">
    <Button label="Go to Checkout" class="w-full">
      <Chip slot="end" label="$12.96" class="w-min bg-secondary" />
    </Button>
    <!-- <div class="" />

    <span>Go to Checkout</span>
	-->
  </div>
</div>
