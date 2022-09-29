<script setup>
import HeaderComp from "@/components/HeaderComp.vue";
</script>
<template>
  <header>
    <HeaderComp />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  height: 5em;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  text-align: center;
  background-color: black;
}
</style>
