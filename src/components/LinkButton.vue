<script setup lang="ts">
defineProps<{
  url?: string
}>()
</script>

<template>
  <a :href="url" target="_blank">
    <button rounded-full bg-white bg-opacity-10 p-3 text-white icon-btn>
      <slot />
    </button>
  </a>
</template>
