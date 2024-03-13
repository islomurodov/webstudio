<script setup lang="ts">
const items = ref<{ img: string }[]>([{ img: 'about-1.png' }, { img: 'about-2.png' }, { img: 'about-3.png' }])
</script>

<template>
  <div w-full>
    <div mx-auto max-w-7xl w-full px-3 sm:px-4>
      <div mx-auto container>
        <div w-full>
          <div w-full>
            <h1 text-center text-xl text-primary-black font-bold lg:text-3xl md:text-2xl xl:text-4xl>
              Чем мы занимаемся
            </h1>
          </div>
          <div my-10 />
          <div flex items-center justify-between gap-6>
            <div v-for="(item, i) in items" :key="`about-${i}`" w-full>
              <div>
                <img w-full object-cover :src="`/assets/images/about/${item.img}`" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
