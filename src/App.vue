<script setup lang="ts">
useHead({
  title: 'WebStudio',
  meta: [
    {
      name: 'description',
      content: 'Web Studio UI clone from figma',
    },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#212121' : '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg',
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
