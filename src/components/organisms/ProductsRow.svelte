<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { FreeMode } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import 'swiper/css';
  import ProductCard from '../molecules/ProductCard.svelte';

  const dispatch = createEventDispatcher();

  const addProduct = (productId: string) => {
    dispatch('onAdd', { productId });
  };

  export let products: {
    id: string;
    imageUrl: string;
    name: string;
    price: number;
    detail: string;
  }[] = [];
</script>

<Swiper modules={[FreeMode]} slidesPerView={2.1} freeMode>
  {#each products as product}
    <SwiperSlide>
      <div class="flex justify-center">
        <ProductCard
          id={product.id}
          imageUrl={product.imageUrl}
          name={product.name}
          price={product.price}
          on:onClick
          on:onAdd={() => addProduct(product.id)}
        />
      </div>
    </SwiperSlide>
  {/each}
</Swiper>
