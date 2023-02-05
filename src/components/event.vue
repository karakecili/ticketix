<template>
  <div
    class="border-solid border-4 border-cyan-600 rounded-xl p-4 bg-slate-800 flex flex-col gap-4 text-center"
  >
    <h1 class="text-2xl font-bold">{{ title }}</h1>

    <span>{{ venueName }}</span>

    <span>Tarih: {{ dateValue }}</span>

    <img :src="image_url" :alt="title" class="w-full" />

    <router-link
      :to="{
        name: 'detail',
        params: {
          eventId: id,
        },
      }"
      class="bg-slate-500 p-4 rounded-lg m-2"
    >
      Detaylar
    </router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  id: Number,
  title: String,
  image_url: String,
  venueName: String,
  venueID: Number,
  date: String,
});

const dateValue = computed(() => {
  return (
    new Date(props.date).toLocaleDateString() +
    ' ' +
    new Date(props.date).toLocaleTimeString()
  );
});
</script>
