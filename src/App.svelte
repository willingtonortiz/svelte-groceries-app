<script lang="ts">
  import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
  import { Router, Route } from 'svelte-navigator';
  import HomeLayout from './modules/layouts/HomeLayout.svelte';
  import CategoryProductsListPage from './pages/CategoryProductsListPage.svelte';
  import ProductDetailPage from './pages/ProductDetailPage.svelte';

  const queryClient = new QueryClient();
  // TODO: Chackra UI Svelte
</script>

<QueryClientProvider client={queryClient}>
  <div class="absolute w-full h-full">
    <Router primary={false}>
      <Route>
        <HomeLayout />
      </Route>

      <Route path="products/:id" let:params>
        <ProductDetailPage productId={params.id} />
      </Route>

      <Route path="categories/:id" let:params>
        <CategoryProductsListPage categoryId={params.id} />
      </Route>
    </Router>
  </div>
</QueryClientProvider>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
