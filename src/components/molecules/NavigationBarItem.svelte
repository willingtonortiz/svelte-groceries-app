<script lang="ts">
  export let selected = false;
  export let icon;
  export let label = '';
</script>

<div
  class="h-full flex flex-col justify-between items-center
    {selected  ? 'text-green-500' : ''}"
  on:click
>
  <div class="w-5">
    <svelte:component this={icon} />
  </div>

  <span class="text-sm">
    {label}
  </span>
</div>