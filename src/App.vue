<script setup>
import HeaderComp from "@/components/HeaderComp.vue";
import CarroselComp from "@/components/CarroselComp.vue";
</script>
<template>
  <header>
    <HeaderComp />
  </header>
  <main>
    <CarroselComp />
    <RouterView />
  </main>
</template>

<style></style>
