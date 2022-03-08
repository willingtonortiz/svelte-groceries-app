<script lang="ts">
  export let title = '';
  export let link = '';
</script>

<div class="m-4 flex flex-row justify-between {$$props.class ?? ''}">
  <h2 class="text-xl font-bold">{title}</h2>

  <a class="text-green-600">{link}</a>
</div>
