<script lang="ts">
  import IoIosStar from 'svelte-icons/io/IoIosStar.svelte';

  export let count = 0;
  $: items = Array.from({ length: count }).map((_, i) => i);
</script>

<div class="flex flex-row justify-between gap-0.5">
  {#each items as _}
    <div class="w-4 text-red-400">
      <IoIosStar />
    </div>
  {/each}
</div>
