<template>
  <default-layout>
    <div v-if="isLoading">
      <span>isLoading</span>
    </div>
    <div class="flex flex-col gap-3" v-else>
      <detail :detail="details" :eventId="eventId" />

      <router-link
        :to="{
          name: 'seats',
          params: {
            eventId: eventId,
          },
        }"
        class="p-4 border-none bg-green-400 hover:bg-green-800 flex flex-row gap-2 mx-auto rounded-md"
      >
        <img src="../assets/seat.svg" alt="seat logo" />
        Koltuk Seçimi
      </router-link>
    </div>
  </default-layout>
</template>

<script setup>
import { ref, onBeforeMount, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import defaultLayout from '../layouts/defaultLayout.vue';
import detail from '../components/detail.vue';

const store = useStore();
const route = useRoute();
let eventId = ref(parseInt(route.params.eventId));

const details = computed(() => store.getters.getDetail);
const venue = computed(() => store.getters.getVenue);
const isLoading = computed(() => details == {});

onBeforeMount(() => {
  // console.log(eventId);
  // eventId.value = parseInt(route.params.eventId);
  store.dispatch('getEventDetail', eventId.value);
  // .then((e) => (loaded = true));
  // console.log('eventDetail2', eventDetail);
});
</script>
