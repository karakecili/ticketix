<template>
  <div class="flex flex-row gap-4 p-2 justify-center items-center">
    <span>{{ row }}:</span>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  row: String,
});
</script>
