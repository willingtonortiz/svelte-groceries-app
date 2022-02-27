<script lang="ts">
  import IoIosArrowDown from 'svelte-icons/io/IoIosArrowDown.svelte';
  import IoIosArrowForward from 'svelte-icons/io/IoIosArrowForward.svelte';

  export let show = false;
  const toggleShow = () => (show = !show);
</script>

<div class="flex flex-col {$$props.class ?? ''}">
  <div class="flex justify-between" on:click={toggleShow}>
    <slot name="title" />

    <div class="flex flex-row items-center">
      <slot name="extra" />

      <div class="ml-4 w-6">
        {#if show}
          <IoIosArrowDown />
        {:else}
          <IoIosArrowForward />
        {/if}
      </div>
    </div>
  </div>

  {#if show}
    <slot name="content" />
  {/if}
</div>
