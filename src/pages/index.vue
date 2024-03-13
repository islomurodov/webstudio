<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div>
    <div>
      <HomeHeadSection />
    </div>
    <div my-10 md:my-20>
      <HomePeculiaritiesSection />
    </div>
    <div my-10 hidden md:my-20 lg:block>
      <HomeAboutSection />
    </div>
    <div my-10>
      <HomeCommandSection />
    </div>
    <div my-10>
      <HomeClientsSection />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
