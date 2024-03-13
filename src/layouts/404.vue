<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main p="x4 y10" text="center primary-black">
    <div text-4xl>
      <div i-carbon-warning inline-block />
    </div>
    <RouterView />
    <div>
      <button text-sm btn m="3 t8" @click="router.back()">
        Назад
      </button>
    </div>
  </main>
</template>
