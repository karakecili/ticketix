<template>
  <div
    class="p-2 rounded-md cursor-pointer"
    :class="[
      seat.isBooked
        ? 'bg-red-600'
        : isSelected
        ? 'bg-blue-600'
        : 'bg-green-600',
    ]"
    @click="selectSeat()"
  >
    {{ seat.seat }}
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const props = defineProps({
  seat: Object,
  // isSelected: Boolean,
});

// const isSelected = ref(props.seat.isSelected);
const isSelected = ref(store.getters.getCheckSeatSelected(props.seat.id));
// const emit = defineEmits({
//   selectedChange: ({ row, seat }) => {
//     if (row && seat) return true;
//     else return false;
//   },
// });

function selectSeat() {
  if (props.seat.isBooked) {
    window.alert(`${props.seat.row}-${props.seat.seat} koltuğu dolu`);
  } else {
    if (isSelected.value) {
      store.commit('unSelectSeat', props.seat.id);
    } else {
      store.commit('selectSeat', props.seat.id);
    }
    isSelected.value = !isSelected.value;
    // emit('selectedChange', { row: props.seat.row, seat: props.seat.seat });
  }
}
</script>
