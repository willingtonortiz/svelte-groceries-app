<script lang="ts">
  import { FreeMode } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import 'swiper/css';

  import ProductCard from '../molecules/ProductCard.svelte';

  export let products: {
    id: string;
    imageUrl: string;
    name: string;
    amount: string;
    price: string;
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
          amount={product.amount}
          on:onClick
          on:onAdd
        />
      </div>
    </SwiperSlide>
  {/each}
</Swiper>
