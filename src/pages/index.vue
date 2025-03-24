<template>
  <!-- tailwind 基本介紹、歡迎詞、搜尋（搜尋）、資料列 -->
  <div class="header">
    <h1
      class="px-2 py-3 mt-16 text-4xl tracking-tighter max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl"
    >
      Note Your Tailwind Journey
    </h1>
    <p
      class="px-2 text-lg/7 font-medium text-gray-600 max-sm:px-4 dark:text-gray-400"
    >
      本網站使用 Tailwind
      ，透過實際應用來掌握這項技術，並紀錄開發過程中使用過的樣式。
    </p>
    <div class="mt-8 flex gap-4">
      <router-link
        to="/article"
        class="grid rounded-4xl bg-black bg-gray-700 px-6 text-sm font-semibold text-white hover:bg-gray-800 items-center"
        >Read More</router-link
      >
      <button
        type="button"
        class="mx-2 px-4 py-2 rounded-lg bg-blue-500 grid w-full grid-cols-[auto_1fr_auto] items-center gap-1 rounded-full px-4 py-2 text-left text-sm/6 text-gray-950/50 inset-ring inset-ring-gray-950/8 sm:w-80 dark:bg-white/5 dark:text-white/50 dark:inset-ring-white/15"
        @click="openDialog"
      >
        <img src="../assets/glass.png" alt="" />
        Search
      </button>
    </div>
  </div>
  <!-- 建立專案，開啟步驟、放入可複製 markdown -->
  <div class="mt-20">
    <p class="text-sky-400 text-left text-sm tracking-widest mb-4 px-2">
      開始建立專案
    </p>
    <div>
      <h2 class="mt-2 text-xl tracking-tighter">步驟 1：建立 Vite 專案</h2>
      <CodeBlock :code="sampleCode" />
    </div>
  </div>
  <dialog ref="dialog" @click.self="closeDialog">
    <div class="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
      <p class="mb-4">搜尋功能尚未完成</p>
      <button
        class="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600"
        @click="closeDialog"
      >
        關閉
      </button>
    </div>
  </dialog>
</template>
<script setup lang="ts">
import { ref } from "vue";
import CodeBlock from "../components/CodeBlock.vue";

const dialog = ref<HTMLDialogElement | null>(null);

// 開啟 Dialog
const openDialog = () => {
  if (dialog.value instanceof HTMLDialogElement) {
    dialog.value.showModal(); // showModal 是 dialog 內建的方法
  }
  console.log(dialog.value);
};

// 關閉 Dialog
const closeDialog = () => {
  if (dialog.value instanceof HTMLDialogElement) {
    dialog.value.close();
  }
};

const sampleCode =
`npm create vite@latest tailwindnote-project --template vue`;
</script>
<style scoped lang="scss">
dialog {
  // dialog 標籤的 position 是 static ，用 class = "fixed" 會蓋不過去。
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
}
</style>
