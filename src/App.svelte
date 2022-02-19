<script lang="ts">
  import { Router, Route } from 'svelte-navigator';
  import HomeLayout from './modules/layouts/HomeLayout.svelte';
</script>

<Router>
  <Route component={HomeLayout} />
</Router>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
