<template>
  <span>{{ venue.name }}</span>

  <span>Adres: {{ venue.address }}</span>
</template>

<script setup>
const props = defineProps({
  venue: Object,
});
</script>
