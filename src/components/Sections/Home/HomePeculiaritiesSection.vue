<script setup lang="ts">
const items = ref<{ icon: string, title: string, paragraph: string }[]>([{ icon: 'anthenna.svg', title: 'Внимание к деталям', paragraph: 'Идейные соображения, а также начало повседневной работы по формированию позиции.' }, { icon: 'clock.svg', title: 'Пунктуальность', paragraph: 'Задача организации, в особенности же рамки и место обучения кадров влечет за собой.' }, { icon: 'diagram.svg', title: 'Планирование', paragraph: 'Равным образом консультация с широким активом в значительной степени обуславливает.' }, { icon: 'astronaut.svg', title: 'Современные технологии', paragraph: 'Значимость этих проблем настолько очевидна, что реализация плановых заданий.' }])
</script>

<template>
  <div relative w-full>
    <div mx-auto max-w-7xl w-full px-3 sm:px-4>
      <div mx-auto container>
        <div grid grid-cols-1 place-items-center items-baseline gap-6 lg:grid-cols-4 sm:grid-cols-2>
          <div v-for="(item, i) in items" :key="`card-${i}`">
            <div class="bg-[#F5F4FA]" flex items-center justify-center rounded py-5>
              <img :src="`assets/icons/${item.icon}`">
            </div>
            <div mt-6>
              <h4 text-sm font-bold md:text-base>
                {{ item.title }}
              </h4>
              <p mt-2 text-sm text-primary-gray md:text-base>
                {{ item.paragraph }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
