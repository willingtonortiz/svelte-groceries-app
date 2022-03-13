<script lant="ts">
</script>

<div class="p-4 flex flex-row flex-nowrap items-center" on:click>
  {#if $$slots.left}
    <div class="mr-4">
      <slot name="left" />
    </div>
  {/if}

  <slot />

  <div class="ml-auto">
    <slot name="right" />
  </div>
</div>
