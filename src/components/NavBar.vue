<template>
  <router-link to="/">
    <nav class="fixed inset-x-0 top-0 z-10 border-b border-white/10">
      <div class="flex items-center justify-between px-4 gap-8 bg-gray-950">
        <img class="w-[48px]" src="../assets/tailwind.svg" alt="" />
        <div id="profile" class="flex items-center gap-x-4">
          <div id="searchInput" class="border-2 border-[#000]">
            <input type="text" />
          </div>
          <router-link to="/">doc</router-link>
          <router-link to="/">Note</router-link>
          <img src="../assets/vue.svg" alt="使用者頭貼" />
        </div>
      </div>
    </nav>
  </router-link>
</template>
<script setup></script>
