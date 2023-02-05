<template>
  <h1 class="text-2xl font-bold">{{ detail.title }}</h1>

  <span>Tarih: {{ dateValue }}</span>

  <venue :venue="detail.venue" />

  <img :src="detail.image_url" :alt="detail.title" class="w-full" />
  <span>{{ detail.description }}</span>
</template>

<script setup>
import { ref, onBeforeMount, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import venue from '../components/venue.vue';

const eventDetail = ref({});

const props = defineProps({
  detail: Object,
  eventId: Number,
});

const store = useStore();
const route = useRoute();

const dateValue = computed(() => {
  return (
    new Date(props.detail.event_date).toLocaleDateString() +
    ' ' +
    new Date(props.detail.event_date).toLocaleTimeString()
  );
});
onBeforeMount(() => {
  //   const eventDetail = store.act.getEventDetail(props.id);
  //   console.log(eventDetail);
});
</script>
