<script lang="ts">
  export let label = '';
</script>

<button
  on:click
  class="min-w-max py-4 bg-green-600 text-white rounded-2xl {$$props.class ??
    ''}"
>
  {label}
</button>
