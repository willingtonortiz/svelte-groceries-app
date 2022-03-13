<script lang="ts">
  import { Router, Route } from 'svelte-navigator';
  import HomeLayout from './modules/layouts/HomeLayout.svelte';
  import CategoryProductsListPage from './pages/CategoryProductsListPage.svelte';
  import ProductDetailPage from './pages/ProductDetailPage.svelte';

  // TODO: Chackra UI Svelte
</script>

<div class="absolute w-full h-full">
  <Router primary={false}>
    <Route>
      <HomeLayout />
    </Route>

    <Route path="products/:id" let:params>
      <ProductDetailPage id={params.id} />
    </Route>

    <Route path="categories/:id" let:params>
      <CategoryProductsListPage categoryId={params.id} />
    </Route>
  </Router>
</div>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
