<template>
  <NavBar />
  <defaultLayout>
    <router-view></router-view>
  </defaultLayout>
</template>

<script setup lang="ts">
import defaultLayout from "./layouts/defaultLayout.vue";
import NavBar from "./components/NavBar.vue";
</script>

<style scoped></style>
