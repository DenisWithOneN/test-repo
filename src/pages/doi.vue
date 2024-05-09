<script setup></script>
<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <img src="/pngimg.com - snoopy_PNG3.png" alt="" class="w-32" />
    <p class="text-2xl text-pink-500 font-black text-center px-10">
      ce faci pisi? nu crezi ca stai prea bine?
    </p>
    <div class="flex gap-2">
      <RouterLink
        to="/trei"
        class="text-xl border-2 border-black rounded-lg px-2 mt-8"
        >ba da</RouterLink
      >
      <RouterLink
        to="/trei"
        class="text-xl border-2 border-black rounded-lg px-2 mt-8"
        >nu prea</RouterLink
      >
    </div>
  </div>
</template>
<style scoped></style>
