<script lang="ts">
  import IoIosSearch from 'svelte-icons/io/IoIosSearch.svelte';
</script>

<div
  class="p-3 bg-gray-100 rounded-xl flex flex-row flex-nowrap {$$props.class}"
>
  <div class="w-6 mr-2">
    <IoIosSearch />
  </div>

  <input
    class="w-full bg-transparent text-sm text-gray-800"
    type="text"
    placeholder="Search Store"
  />
</div>
