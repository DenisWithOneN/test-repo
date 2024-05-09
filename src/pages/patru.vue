<script setup>
import { ref } from "vue";

const buttonSize = ref(2);
const verify = ref(false);

function increaseButtonSize() {
  buttonSize.value++;
  if (buttonSize.value >= 7) {
    verify.value = true;
  }
}
</script>

<template>
  <div class="flex flex-col justify-center items-center min-h-screen">
    <img src="/Image.webp" alt="" class="w-32" />
    <p v-if="!verify" class="text-2xl text-pink-500 text-center font-black">
      imi faci onoarea de a te avea vineri seara cu mine la date?
    </p>
    <div v-if="!verify" class="flex gap-5">
      <RouterLink
        to="/cinci"
        :class="`text-${buttonSize}xl font-bold rounded-lg px-2 mt-8`"
        >da</RouterLink
      >
      <button
        @click="increaseButtonSize"
        class="text-2xl font-bold  rounded-lg px-2 mt-8"
      >
        nu
      </button>
    </div>

    <div v-if="verify" class="flex flex-col items-center">
      <p class="text-2xl text-blue-500 text-center font-black">te cam intreci</p>
      <RouterLink
        to="/cinci"
        :class="`text-2xl border-2 border-black rounded-lg px-2 mt-2`"
        >bine, vin</RouterLink
      >
    </div>
  </div>
</template>

<style scoped></style>
