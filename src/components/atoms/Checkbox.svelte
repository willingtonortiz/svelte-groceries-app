<script lang="ts">
  import IoMdCheckmark from 'svelte-icons/io/IoMdCheckmark.svelte';
  export let label = '';
  export let checked = false;

  const toggle = () => (checked = !checked);
</script>

<div
  class="flex flex-row flex-nowrap justify-start items-center {$$props.class ??
    ''}"
  on:click={toggle}
>
  <label
    class="flex flex-row flex-nowrap justify-start items-center"
    for={label}
  >
    <input name={label} type="checkbox" class="hidden" bind:checked on:click />

    <div
      class="w-6 h-6 border border-gray-300 rounded-md default:bg-transparent mr-3"
      class:bg-primary={checked}
    >
      {#if checked}
        <div class="text-white">
          <IoMdCheckmark />
        </div>
      {/if}
    </div>

    {label}
  </label>
</div>
