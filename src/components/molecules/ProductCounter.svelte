<script lang="ts">
  import TiPlus from 'svelte-icons/ti/TiPlus.svelte';
  import TiMinus from 'svelte-icons/ti/TiMinus.svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let count = 0;
  export let min: number | undefined = undefined;
  export let max: number | undefined = undefined;

  const decrement = () => {
    if (min !== undefined && count - 1 < min) {
      return;
    }
    dispatch('decrement');
  };
  const increment = () => {
    if (max !== undefined && count + 1 > max) {
      return;
    }
    dispatch('increment');
  };
</script>

<div class="w-min h-10 flex flex-row flex-nowrap">
  <div class="w-10 flex justify-center items-center" on:click={decrement}>
    <div class="w-6">
      <TiMinus />
    </div>
  </div>

  <div
    class="w-10 border border-gray-300 rounded-2xl flex justify-center items-center"
  >
    <span class="text-xl">{count}</span>
  </div>

  <div class="w-10 flex justify-center items-center" on:click={increment}>
    <div class="w-6">
      <TiPlus />
    </div>
  </div>
</div>
