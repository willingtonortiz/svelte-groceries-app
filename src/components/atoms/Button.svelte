<script lang="ts">
  export let label = '';
</script>

<button
  on:click
  class="p-4 min-w-max bg-primary text-white rounded-2xl grid grid-cols-1 grid-rows-1 items-center {$$props.class ??
    ''}"
>
  <div
    class="col-start-1 col-span-1 row-start-1 row-span-1 flex flex-row flex-nowrap justify-between"
  >
    <div class="left">
      <slot name="start" />
    </div>

    <div class="right">
      <slot name="end" />
    </div>
  </div>

  <p class="col-start-1 col-span-1 row-start-1 row-span-1 flex-1 text-center">
    {label}
    <slot />
  </p>
</button>
