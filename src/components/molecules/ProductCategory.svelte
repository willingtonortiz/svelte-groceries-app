<script lang="ts">
  export let imageUrl = '';
  export let name = '';
</script>

<div class="w-60 rounded-xl flex flex-row p-4 items-center bg-orange-100">
  <img src={imageUrl} alt={name} />

  <p class="ml-4 text-xl font-semibold">{name}</p>
</div>
