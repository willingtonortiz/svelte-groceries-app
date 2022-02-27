<script lang="ts">
  import { Route } from 'svelte-navigator';
  import Page from '../../components/molecules/Page.svelte';
  import NavigationBar from '../../components/molecules/NavigationBar.svelte';
  import ShopPage from '../../pages/ShopPage.svelte';
  import Redirect from '../../components/molecules/Redirect.svelte';
  import ProductDetailPage from '../../pages/ProductDetailPage.svelte';
</script>

<Page>
  <div slot="content">
    <Route path="shop" component={ShopPage} />

    <Route path="explore">
      <div class="h-full flex justify-center items-center">
        <h1>Explore Page</h1>
      </div>
    </Route>

    <Route path="cart">
      <div class="h-full flex justify-center items-center">
        <h1>Cart Page</h1>
      </div>
    </Route>

    <Route path="favourite">
      <div class="h-full flex justify-center items-center">
        <h1>Favourite Page</h1>
      </div>
    </Route>

    <Route path="account">
      <div class="h-full flex justify-center items-center">
        <h1>Account Page</h1>
      </div>
    </Route>

    <Route>
      <Redirect to="shop" />
    </Route>
  </div>

  <NavigationBar slot="footer" />
</Page>
