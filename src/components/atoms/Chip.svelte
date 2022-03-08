<script lang="ts">
  export let label: string | number = '';
</script>

<div class="p-1 rounded-md text-xs {$$props.class ?? ''}">{label}</div>
