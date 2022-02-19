<script lang="ts">
  import FaStoreAlt from 'svelte-icons/fa/FaStoreAlt.svelte';
  import FaSearch from 'svelte-icons/fa/FaSearch.svelte';
  import FaShoppingCart from 'svelte-icons/fa/FaShoppingCart.svelte';
  import FaRegHeart from 'svelte-icons/fa/FaRegHeart.svelte';
  import FaRegUser from 'svelte-icons/fa/FaRegUser.svelte';

  let selected = 0;

  const selectItem = (item: number) => {
    selected = item;
  };
</script>

<nav
  class="px-6 py-3 bg-white rounded-2xl shadow flex flex-nowrap justify-between"
>
  <div
    class="flex flex-col justify-between items-center
    {selected === 0 ? 'text-green-500' : ''}"
    on:click={() => selectItem(0)}
  >
    <div class="w-5">
      <FaStoreAlt />
    </div>

    <span class="text-sm">Shop</span>
  </div>

  <div
    class="flex flex-col justify-between items-center
    {selected === 1 ? 'text-green-500' : ''}"
    on:click={() => selectItem(1)}
  >
    <div class="w-5">
      <FaSearch />
    </div>

    <span class="text-sm">Explore</span>
  </div>

  <div
    class="flex flex-col justify-between items-center
    {selected === 2 ? 'text-green-500' : ''}"
    on:click={() => selectItem(2)}
  >
    <div class="w-5">
      <FaShoppingCart />
    </div>

    <span class="text-sm">Cart</span>
  </div>

  <div
    class="flex flex-col justify-between items-center
    {selected === 3 ? 'text-green-500' : ''}"
    on:click={() => selectItem(3)}
  >
    <div class="w-5">
      <FaRegHeart />
    </div>

    <span class="text-sm">Favourite</span>
  </div>

  <div
    class="flex flex-col justify-between items-center
    {selected === 4 ? 'text-green-500' : ''}"
    on:click={() => selectItem(4)}
  >
    <div class="w-5">
      <FaRegUser />
    </div>

    <span class="text-sm">Accounts</span>
  </div>
</nav>
