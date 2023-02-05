<template>
  <div class="bg-gray-700 text-white min-h-screen">
    <router-view />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

onMounted(() => {
  // console.log('app is mounted');
});
</script>
