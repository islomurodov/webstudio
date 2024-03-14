<script setup lang="ts"></script>

<template>
  <div w-full>
    <div mx-auto max-w-7xl w-full px-3 sm:px-4>
      <div mx-auto container>
        <div mx-auto w-full>
          <div w-full>
            <h1 text-center text-xl text-primary-black font-bold lg:text-3xl md:text-2xl xl:text-4xl>
              Постоянные клиенты
            </h1>
          </div>
          <div mt-10>
            <ul grid grid-cols-2 w-full justify-between gap-3 md:grid-cols-3 xl:grid-cols-6 md:gap-6>
              <li v-for="(client, i) in 6" :key="`client-${i + 1}`" h-full w-full>
                <a target="_blank" h-full w-full flex items-center justify-center border rounded-md py-4>
                  <img object-cover :src="`../assets/icons/clients/client-${i + 1}.svg`">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
