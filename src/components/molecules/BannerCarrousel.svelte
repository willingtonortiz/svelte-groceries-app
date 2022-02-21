<script lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import { Pagination } from 'swiper';

  export let images: string[] = [];
</script>

<div class={$$props.class}>
  <Swiper
    modules={[Pagination]}
    slidesPerView={1}
    pagination={{ bulletActiveClass: 'active-bullet' }}
  >
    {#each images as image}
      <SwiperSlide>
        <img src={image} alt={image} />
      </SwiperSlide>
    {/each}
  </Swiper>
</div>

<style>
  :global(.active-bullet) {
    @apply bg-green-500;
    width: 20px;
    border-radius: 7px;
    opacity: 1;
  }
</style>
