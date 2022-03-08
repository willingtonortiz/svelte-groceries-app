<script lang="ts">
  import IoIosSearch from 'svelte-icons/io/IoIosSearch.svelte';
  import IoIosCloseCircle from 'svelte-icons/io/IoIosCloseCircle.svelte';

  export let placeholder = '';
  export let clearText = false;
  let value = '';

  $: showClearText = value && clearText;

  const onClearText = () => {
    value = '';
  };
</script>

<div
  class="p-3 bg-gray-100 rounded-xl flex flex-row flex-nowrap items-center {$$props.class}"
>
  <div class="w-6 mr-2">
    <IoIosSearch />
  </div>

  <input
    class="w-full outline-none bg-transparent text-sm text-gray-800"
    type="text"
    {placeholder}
    bind:value
    on:input
  />

  {#if showClearText}
    <div class="w-6 ml-2 text-gray-400" on:click={onClearText}>
      <IoIosCloseCircle />
    </div>
  {/if}
</div>
