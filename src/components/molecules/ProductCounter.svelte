<script lang="ts">
  import TiPlus from 'svelte-icons/ti/TiPlus.svelte';
  import TiMinus from 'svelte-icons/ti/TiMinus.svelte';

  export let count = 1;
  const increment = () => count++;
  const decrement = () => count--;
</script>

<div class="w-min h-10 flex flex-row flex-nowrap">
  <div class="w-10 flex justify-center items-center" on:click={increment}>
    <div class="w-6">
      <TiPlus />
    </div>
  </div>

  <div
    class="w-10 border border-gray-300 rounded-2xl flex justify-center items-center"
  >
    <span class="text-xl">{count}</span>
  </div>

  <div class="w-10 flex justify-center items-center" on:click={decrement}>
    <div class="w-6">
      <TiMinus />
    </div>
  </div>
</div>
