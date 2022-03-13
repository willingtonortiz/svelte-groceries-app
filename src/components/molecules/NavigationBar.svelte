<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { Link, useLocation } from 'svelte-navigator';
  import type { Unsubscriber } from 'svelte/store';

  import FaStoreAlt from 'svelte-icons/fa/FaStoreAlt.svelte';
  import FaSearch from 'svelte-icons/fa/FaSearch.svelte';
  import FaShoppingCart from 'svelte-icons/fa/FaShoppingCart.svelte';
  import FaRegHeart from 'svelte-icons/fa/FaRegHeart.svelte';
  import FaRegUser from 'svelte-icons/fa/FaRegUser.svelte';
  import NavigationBarItem from './NavigationBarItem.svelte';

  const location = useLocation();

  let selected = 0;
  const selectItem = (item: number) => (selected = item);
  let unsubscriber: Unsubscriber;

  onMount(() => {
    unsubscriber = location.subscribe((value) => {
      const pathName = value.pathname.toLowerCase();

      if (pathName.includes('shop')) {
        selected = 0;
      } else if (pathName.includes('explore')) {
        selected = 1;
      } else if (pathName.includes('cart')) {
        selected = 2;
      } else if (pathName.includes('favourite')) {
        selected = 3;
      } else if (pathName.includes('account')) {
        selected = 4;
      }
    });
  });

  onDestroy(() => {
    unsubscriber();
  });
</script>

<nav
  class="px-6 py-3 bg-white rounded-2xl shadow flex flex-nowrap justify-between"
>
  <Link to="shop">
    <NavigationBarItem
      icon={FaStoreAlt}
      label="Shop"
      selected={selected === 0}
      on:click={() => selectItem(0)}
    />
  </Link>

  <Link to="explore">
    <NavigationBarItem
      icon={FaSearch}
      label="Explore"
      selected={selected === 1}
      on:click={() => selectItem(1)}
    />
  </Link>

  <Link to="cart">
    <NavigationBarItem
      icon={FaShoppingCart}
      label="Cart"
      selected={selected === 2}
      on:click={() => selectItem(2)}
    />
  </Link>

  <Link to="favourite">
    <NavigationBarItem
      icon={FaRegHeart}
      label="Favourite"
      selected={selected === 3}
      on:click={() => selectItem(3)}
    />
  </Link>

  <Link to="account">
    <NavigationBarItem
      icon={FaRegUser}
      label="Accounts"
      selected={selected === 4}
      on:click={() => selectItem(4)}
    />
  </Link>
</nav>
