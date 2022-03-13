<script lang="ts">
  import { Route } from 'svelte-navigator';

  import Page from '../../components/molecules/Page.svelte';
  import NavigationBar from '../../components/molecules/NavigationBar.svelte';
  import ShopPage from '../../pages/ShopPage.svelte';
  import Redirect from '../../components/molecules/Redirect.svelte';
  import ExplorePage from '../../pages/ExplorePage.svelte';
  import CartPage from '../../pages/CartPage.svelte';
  import AccountPage from '../../pages/AccountPage.svelte';
</script>

<Page>
  <div slot="content">
    <Route path="shop">
      <ShopPage />
    </Route>

    <Route path="explore">
      <ExplorePage />
    </Route>

    <Route path="cart">
      <CartPage />
    </Route>

    <Route path="favourite">
      <!-- <div class="h-full flex justify-center items-center">
          <h1>Favourite Page</h1>
        </div> -->
    </Route>

    <Route path="account">
      <AccountPage />
    </Route>

    <Route>
      <Redirect to="shop" />
    </Route>
  </div>

  <NavigationBar slot="footer" />
</Page>
