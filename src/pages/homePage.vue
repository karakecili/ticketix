<template>
  <default-layout>
    <div class="flex flex-col gap-3">
      <event
        v-for="event in eventList"
        :id="event.id"
        :title="event.title"
        :image_url="event.image_url"
        :venueName="event.venueName"
        :venueID="event.venueID"
        :date="event.event_date"
      />
    </div>
  </default-layout>
</template>

<script setup>
import { ref, onBeforeMount, computed } from 'vue';
import { useStore } from 'vuex';
import defaultLayout from '../layouts/defaultLayout.vue';
import event from '../components/event.vue';

const store = useStore();
onBeforeMount(() => {
  // console.log('before mounted');
  store.dispatch('getEventList');
});

const eventList = computed(() => store.getters.getEventList);
</script>
