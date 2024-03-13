<template>
  <div class="head__section" relative isolate w-full flex items-center justify-center bg-cover bg-no-repeat py-20 lg:py-45 md:py-40 sm:py-30 xl:py-50 style="background-image: url('assets/images/backdrop.png');">
    <div mx-auto max-w-7xl w-full px-3 sm:px-4>
      <div mx-auto flex items-center justify-center container>
        <div mx-auto>
          <div w-full flex flex-col items-center>
            <div>
              <h1 text-center text-xl text-white font-black tracking-wide uppercase lg:text-3xl md:text-2xl xl:text-4xl>
                Эффективные решения<br>для вашего бизнеса
              </h1>
            </div>
            <div my-4 />
            <div>
              <button btn>
                Заказать услугу
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.head__section::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(000, 000, 000, 0.4);
  z-index: -1;
}

[btn] {
  box-shadow: 0px 4px 4px 0px black;
}
</style>
