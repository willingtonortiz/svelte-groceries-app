<script lang="ts">
  export let label = '';
</script>

<button
  on:click
  class="min-w-max py-4 bg-primary text-white rounded-2xl {$$props.class ?? ''}"
>
  {label}
</button>
