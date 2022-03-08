<script lang="ts">
  export let title = '';
</script>

<div class="grid grid-cols-1 grid-rows-1 items-center {$$props.class}">
  <div
    class="z-10 col-start-1 col-span-1 row-start-1 row-span-1 flex flex-row flex-nowrap justify-between"
  >
    <div class="left">
      <slot name="left" />
    </div>

    <div class="right">
      <slot name="right" />
    </div>
  </div>

  <h1
    class="z-0 col-start-1 col-span-1 row-start-1 row-span-1 flex-1 text-center font-bold text-xl outline-none"
  >
    {title}
  </h1>
</div>
