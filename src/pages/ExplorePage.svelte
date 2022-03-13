<script lang="ts">
  import { slide } from 'svelte/transition';
  import { useNavigate } from 'svelte-navigator';
  import { Dialog, DialogOverlay } from '@rgossiaux/svelte-headlessui';
  import GoSettings from 'svelte-icons/go/GoSettings.svelte';

  import Input from '../components/atoms/Input.svelte';
  import Header from '../components/molecules/Header.svelte';
  import { PRODUCT_CATEGORIES } from '../core/mock_data';
  import FiltersPage from './FiltersPage.svelte';

  const navigator = useNavigate();
  let showFiltersButton = false;
  let showFilters = false;

  let categories = [
    ...PRODUCT_CATEGORIES,
    ...PRODUCT_CATEGORIES,
    ...PRODUCT_CATEGORIES,
    ...PRODUCT_CATEGORIES,
    ...PRODUCT_CATEGORIES,
    ...PRODUCT_CATEGORIES,
    ...PRODUCT_CATEGORIES,
  ];

  const onCategorySelected = (categoryId: string) =>
    navigator(`/categories/${categoryId}`);

  const onInputType = (_: any) => {
    showFiltersButton = true;
  };
  const openFilters = () => (showFilters = true);
  const closeFilters = () => (showFilters = false);
</script>

<div class="h-full">
  <Header class="m-4" title="Find Products" />

  <div class="m-4 flex flex-row items-center">
    <Input
      class="w-full"
      placeholder="Search Store"
      clearText
      on:input={onInputType}
    />

    {#if showFiltersButton}
      <div class="ml-4 w-6" on:click={openFilters} transition:slide>
        <GoSettings />
      </div>
    {/if}
  </div>

  <div class="m-4 grid grid-cols-2 gap-4">
    {#each categories as category}
      <div
        class="p-4 bg-red-200 rounded-xl border-2 border-red-300 flex flex-col items-center"
        on:click={() => onCategorySelected(category.id)}
      >
        <img class="mb-4" src={category.imageUrl} alt={category.name} />

        <p>{category.name}</p>
      </div>
    {/each}
  </div>
</div>

<Dialog
  open={showFilters}
  class="absolute h-full w-full bg-white"
  on:close={closeFilters}
>
  <DialogOverlay />

  <FiltersPage on:close={closeFilters} on:apply={closeFilters} />
</Dialog>
