<script lang="ts">
  import Skeleton from 'svelte-skeleton/Skeleton.svelte';

  export let height = 160;
</script>

<div class={$$props.class ?? ''}>
  <Skeleton {height} speed={1}>
    <rect x="20" y="0" width="120" {height} rx="12" ry="12" />
    <rect x="160" y="0" width="120" {height} rx="12" ry="12" />
    <rect x="300" y="0" width="120" {height} rx="12" ry="12" />
  </Skeleton>
</div>
