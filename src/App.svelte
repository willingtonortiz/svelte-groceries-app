<script lang="ts">
  import NavigationBar from './components/molecules/NavigationBar.svelte';
  import HomePage from './pages/HomePage.svelte';
</script>

<main class="h-full bg-gray-200 relative">
  <HomePage />

  <div class="absolute bottom-0 w-full">
    <NavigationBar />
  </div>
</main>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
