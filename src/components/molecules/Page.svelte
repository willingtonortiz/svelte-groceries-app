<script lang="ts"></script>

<div class="h-full flex flex-col">
  <slot name="header" />

  <div class="content flex-1 overflow-y-scroll">
    <slot name="content" />
  </div>

  <slot name="footer" />
</div>

<style>
  .content :global([slot='content']) {
    @apply h-full;
  }
</style>
