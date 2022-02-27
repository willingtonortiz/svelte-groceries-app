<script lang="ts">
  export let title = '';
</script>

<div class="h-8 flex justify-between items-center relative {$$props.class}">
  <slot name="left" />

  <h1 class="absolute -z-10 w-full text-center font-bold text-xl">{title}</h1>

  <slot name="right" />
</div>
