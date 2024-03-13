<script setup lang="ts">
const routes = ref<{ name: string, slug: string }[]>([{ name: 'Студия', slug: '' }, { name: 'Портфолио', slug: 'portfolio' }, { name: 'Контакты', slug: 'contact' }])
</script>

<template>
  <nav w-full border-b bg-white py-5>
    <div mx-auto max-w-7xl>
      <div mx-auto px-6>
        <div flex items-center justify-between lg:gap-20>
          <div contents>
            <RouterLink to="/">
              <h1 text-xl text-primary-black font-bold font-raleway>
                <span text-primary-blue>Web</span>Studio
              </h1>
            </RouterLink>
          </div>
          <div
            fixed hidden h-screen w-full flex-col justify-between bg-white md:static md:contents md:h-auto lg:flex
            md:flex-row md:items-center md:bg-transparent lg:px-5
          >
            <ul flex flex-col gap-10 md:flex-row md:items-center>
              <li
                v-for="item in routes" :key="`page-${item.slug}`" text-2xl text-primary-black font-medium
                md:text-base
              >
                <RouterLink hover:text-primary-blue :to="item.slug.charAt(0) !== '/' ? `/${item.slug}` : item.slug">
                  {{ item.name }}
                </RouterLink>
              </li>
            </ul>
            <ul flex flex-col gap-1 text-primary-gray lg:flex-row md:items-center lg:gap-10>
              <li>
                <a flex items-center gap-2 hover:text-primary-blue href="mailto:info@devstudio.com">
                  info@devstudio.com</a>
              </li>
              <li order--1 text-2xl text-primary-blue md:order-0 md:text-base md:text-inherit>
                <a flex items-center gap-2 href="tel:+380961111111">
                  +38 096 111 11 11</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.router-link-active.router-link-exact-active {
  @apply text-primary-blue;
}
</style>
