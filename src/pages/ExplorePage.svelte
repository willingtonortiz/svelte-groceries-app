<script lang="ts">
  import { slide } from 'svelte/transition';
  import { useNavigate } from 'svelte-navigator';
  import { useQuery } from '@sveltestack/svelte-query';
  import { Dialog, DialogOverlay } from '@rgossiaux/svelte-headlessui';
  import GoSettings from 'svelte-icons/go/GoSettings.svelte';

  import { getAllCategories } from '../core/infrastructure/services/categories.service';
  import Input from '../components/atoms/Input.svelte';
  import Header from '../components/molecules/Header.svelte';
  import FiltersPage from './FiltersPage.svelte';
  import RowSkeleton from '../components/molecules/RowSkeleton.svelte';

  let showFiltersButton = false;
  let showFilters = false;

  const navigator = useNavigate();

  const allCategories = useQuery('homeProducts', getAllCategories);

  const onCategorySelected = (categoryId: string) =>
    navigator(`/categories/${categoryId}`);

  const onInputType = (_: any) => (showFiltersButton = true);
  const openFilters = () => (showFilters = true);
  const closeFilters = () => (showFilters = false);
  const onSearch = (event: CustomEvent) => {
    console.log(event.detail.value);
  };
  const getRandomColor = () => {
    const colors = [
      'bg-red-100 border-red-300',
      'bg-orange-100 border-orange-300',
      'bg-amber-100 border-amber-300',
      'bg-yellow-100 border-yellow-300',
      'bg-green-100 border-green-300',
      'bg-teal-100 border-teal-300',
      'bg-cyan-100 border-cyan-300',
      'bg-sky-100 border-sky-300',
      'bg-blue-100 border-blue-300',
    ];

    return colors[Math.round(Math.random() * colors.length) - 1];
  };
</script>

<div class="h-full">
  <Header class="m-4" title="Find Products" />

  <div class="m-4 flex flex-row items-center">
    <Input
      class="w-full"
      placeholder="Search Store"
      clearText
      on:input={onInputType}
      on:search={onSearch}
    />

    {#if showFiltersButton}
      <div class="ml-4 w-6" on:click={openFilters} transition:slide>
        <GoSettings />
      </div>
    {/if}
  </div>

  {#if $allCategories.isLoading}
    <RowSkeleton class="mb-4" />
    <RowSkeleton class="mb-4" />
    <RowSkeleton />
  {:else}
    <div class="m-4 grid grid-cols-2 gap-4">
      {#each $allCategories.data as category}
        <div
          class="p-4 {getRandomColor()} rounded-xl border-2 flex flex-col items-center"
          on:click={() => onCategorySelected(category.id)}
        >
          <img class="mb-4" src={category.imageUrl} alt={category.name} />

          <p class="text-center">{category.name}</p>
        </div>
      {/each}
    </div>
  {/if}
</div>

<Dialog
  open={showFilters}
  class="absolute h-full w-full bg-white"
  on:close={closeFilters}
>
  <DialogOverlay />

  <FiltersPage on:close={closeFilters} on:apply={closeFilters} />
</Dialog>
