<template>
  <div class="relative bg-gray-900 text-white p-4 rounded-lg mt-6 w-1/2">
    <button
      @click.prevent="copyCode"
      class="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-sm px-2 py-1 rounded flex items-center"
      aria-label="複製程式碼"
    >
        <template v-if="copied">
            <img src="../assets/check.png" alt="checkIcon" class="w-[12px] mr-2"></img>
            <span>已複製</span>
        </template>
        <template v-else>
            <span>📋 複製</span>
        </template>
    </button>
    <pre class="flex items-center text-left">
            <code>{{ code }}</code>
      </pre>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import useClipboard from "vue-clipboard3";

// 定義 props，確保 code 是 string
const props = defineProps<{
  code: string;
}>();

const { toClipboard } = useClipboard();
const copied = ref(false);

const copyCode = async () => {
  try {
    await toClipboard(props.code); // 明確確保是 string
    copied.value = true;
    setTimeout(() => (copied.value = false), 1200); // 使用 setTimeout
  } catch (e) {
    console.error("複製失敗", e);
  }
};
</script>
