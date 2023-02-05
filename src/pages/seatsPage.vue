<template>
  <default-layout>
    <span> Koltuk Seçiniz</span>

    <category
      :categories="categories"
      :selectedCategory="categoryId"
      @changeCategory="onCategoryChange"
    />
    <row v-for="item in Object.keys(seats)" :row="item">
      <seat
        v-for="seat in seats[item]"
        :seat="{
          ...seat,
          isSelected: !!selectedSeat.find(
            (x) => x.row == seat.row && x.seat == seat.seat
          ),
        }"
      />
    </row>
    <button
      :class="
        isSeatSelected
          ? 'p-4 border-4 border-none text-white bg-slate-800 hover:border-none cursor-pointer'
          : 'p-4 border-4 border-none text-gray-200 bg-gray-400 hover:border-none cursor-not-allowed'
      "
      @click="routeToPayment"
    >
      Ödeme İşlemi
    </button>
  </default-layout>
</template>

<script setup>
import { ref, onBeforeMount, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import defaultLayout from '../layouts/defaultLayout.vue';
import { useState } from '../composables/state';
import seat from '../components/seat.vue';
import row from '../components/row.vue';
import category from '../components/category.vue';

const store = useStore();
const route = useRoute();
const router = useRouter();
const { eventId } = route.params;
const [categoryId, setCategoryId] = useState(store.state.selectedCategory);
// const seats = computed(() => store.getters.getSeats);
const seats = computed(() => store.getters.getSeatsByRows);
const categories = computed(() => store.getters.getCategories);
// const isSelected = computed((row, seat) => { return !!selectedSeat.find((x) => x.row == row && x.seat == seat) })
let selectedSeat = [];
const isSeatSelected = computed(() => {
  return store.state.selectedSeats.length > 0;
});

function onSelectedChange({ row, seat }) {
  console.log(row, seat);
  if (selectedSeat.find((x) => x.row == row && x.seat == seat)) {
    selectedSeat.splice(
      selectedSeat.findIndex((x) => x.row == row && x.seat == seat),
      1
    );
  } else {
    selectedSeat.push({ row: row, seat: seat });
  }
}

function onCategoryChange({ selectedCategory, price }) {
  if (selectedCategory != categoryId) {
    setCategoryId(selectedCategory);
    store.commit('cleanSelectedSeat');
    store.commit('setPrice', price);
    store.commit('setEventCategory', selectedCategory);
    store.dispatch('getSeatPlans', {
      eventId: eventId,
      categoryId: selectedCategory,
    });
  }
}

function routeToPayment() {
  if (isSeatSelected.value) {
    router.push({ name: 'payment' });
  } else {
    window.alert('Lütfen en az 1 adet koltuk seçiniz');
  }
}

onBeforeMount(() => {
  // setCategoryId(2);
  store.dispatch('getSeatPlans', {
    eventId: eventId,
    categoryId: categoryId.value,
  });
});
</script>
