<script lang="ts">
  import IoIosAdd from 'svelte-icons/io/IoIosAdd.svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let id = '';
  export let imageUrl = 'https://via.placeholder.com/400';
  export let name = 'Organic Bananas';
  export let amount = '7pcs, Priceg';
  export let price = '$4.99';

  const onClick = () => {
    dispatch('onClick', { id });
  };

  const onAdd = () => {
    dispatch('onAdd', { id });
  };
</script>

<div
  class="w-40 p-3 bg-white border-gray-300 border rounded-2xl flex flex-col items-center"
  on:click={onClick}
>
  <div class="w-24 h-20">
    <img src={imageUrl} alt={name} />
  </div>

  <p class="w-full mt-2 text-base font-bold">{name}</p>

  <p class="w-full mb-4 text-sm text-gray-600">{amount}</p>

  <div class="w-full flex flex-row justify-between items-center">
    <p class="font-bold">{price}</p>

    <div class="bg-green-600 w-10 text-white rounded-xl" on:click={onAdd}>
      <IoIosAdd />
    </div>
  </div>
</div>
