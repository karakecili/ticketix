<template>
  <div class="flex flex-row gap-5 justify-center">
    <button
      v-for="category in categories"
      class="p-4 border-4 hover:border-green-400 hover:bg-green-400 hover:text-white"
      :class="[
        category.id == props.selectedCategory
          ? 'border-green-800 bg-green-800 text-white'
          : ' border-green-800 text-green-800 bg-white',
      ]"
      @click="selectCategory(category.id, category.price)"
    >
      {{ category.name }} ({{ category.price }} TL)
      {{ category.id == props.selectedCategory }}
    </button>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
// let selectedCategory = computed(() => store.state.selectedCategory);

const props = defineProps({
  categories: Array,
  selectedCategory: Number,
});

const emit = defineEmits({
  changeCategory: ({ selectedCategory }) => {
    if (selectedCategory) return true;
    else return false;
  },
});

function selectCategory(categoryId, price) {
  // console.log(categoryId);
  emit('changeCategory', { selectedCategory: categoryId, price: price });
}
</script>
