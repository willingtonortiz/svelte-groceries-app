<script lang="ts">
  import { FreeMode } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import 'swiper/css';
  import ProductCategory from './ProductCategory.svelte';

  export let categories: { name: string; imageUrl: string }[] = [];
</script>

<Swiper
  modules={[FreeMode]}
  slidesPerView={1.45}
  freeMode
  class={$$props.class}
>
  {#each categories as category}
    <SwiperSlide>
      <div class="flex justify-center">
        <ProductCategory name={category.name} imageUrl={category.imageUrl} />
      </div>
    </SwiperSlide>
  {/each}
</Swiper>
