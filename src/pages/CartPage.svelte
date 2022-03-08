<script lang="ts">
  import Button from '../components/atoms/Button.svelte';
  import Chip from '../components/atoms/Chip.svelte';
  import Divider from '../components/atoms/Divider.svelte';
  import Header from '../components/molecules/Header.svelte';
  import CartItem from '../modules/cart/ui/components/CartItem.svelte';
  import {
    cartProducts,
    decrementProductCount,
    incrementProductCount,
    removeProductFromCart,
    totalAmountOfCartStr,
  } from '../modules/cart/state';
  import Center from '../components/molecules/Center.svelte';
</script>

<div class="h-full flex flex-col">
  <Header class="m-4" title="My Cart" />

  <Divider />

  {#if $cartProducts.length > 0}
    {#each $cartProducts as product}
      <CartItem
        class="mx-6 my-4"
        id={product.id}
        imageUrl={product.imageUrl}
        name={product.name}
        detail={product.detail}
        amount={product.count}
        price={product.price}
        on:increment={() => incrementProductCount(product.id)}
        on:decrement={() => decrementProductCount(product.id)}
        on:onRemove={({ detail }) => removeProductFromCart(detail.productId)}
      />
    {/each}

    <div class="mt-24 w-full h-1" />
  {:else}
    <Center>
      <p>There are no products in cart</p>
    </Center>
  {/if}

  {#if $cartProducts.length > 0}
    <div class="absolute left-0 right-0 bottom-20 mx-6">
      <Button label="Go to Checkout" class="w-full">
        <Chip
          slot="end"
          label="${$totalAmountOfCartStr}"
          class="w-min bg-secondary"
        />
      </Button>
    </div>
  {/if}
</div>
