<script lang="ts">
  export let label = '';
</script>

<button
  on:click
  class="relative min-w-max py-4 bg-primary text-white rounded-2xl flex flex-row justify-between {$$props.class ??
    ''}"
>
  <slot name="start" />

  <p class="absolute w-full">{label}</p>

  <slot name="end" />
</button>
