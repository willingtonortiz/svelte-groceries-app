<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Page from '../components/molecules/Page.svelte';
  import Header from '../components/molecules/Header.svelte';
  import IoIosClose from 'svelte-icons/io/IoIosClose.svelte';
  import Title from '../components/molecules/Title.svelte';
  import Checkbox from '../components/atoms/Checkbox.svelte';
  import Button from '../components/atoms/Button.svelte';
  import Box from '../components/atoms/Box.svelte';

  const dispatch = createEventDispatcher();

  const closePage = () => dispatch('close');
  const applyFilters = () => dispatch('apply', {});
</script>

<Page>
  <div slot="header" class="">
    <Header title="Filters" class="m-4">
      <div slot="left" class="w-8" on:click={closePage}>
        <IoIosClose />
      </div>
    </Header>
  </div>

  <div slot="content" class="py-4 bg-gray-100 rounded-t-3xl">
    <Title title="Categories" />
    <div class="flex flex-col gap-y-3">
      <Checkbox class="mx-4" label="Eggs" on:click />
      <Checkbox class="mx-4" label="Noodles & Pasta" on:click />
      <Checkbox class="mx-4" label="Chips & Crisps" on:click />
      <Checkbox class="mx-4" label="Fast Food" on:click />
    </div>

    <Box width="h-4" />

    <Title title="Brand" />
    <div class="flex flex-col gap-y-3">
      <Checkbox class="mx-4" label="Individual Callection" />
      <Checkbox class="mx-4" label="Cocola" />
      <Checkbox class="mx-4" label="Ifad" />
      <Checkbox class="mx-4" label="Kazi Farmas" />
    </div>
  </div>

  <div slot="footer" class="flex w-full bg-gray-100">
    <Button class="m-4 w-full" on:click={applyFilters}>Apply Filter</Button>
  </div>
</Page>
