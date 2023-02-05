<template>
  <div class="">
    <div class="mt-20 w-full">
      <!-- header placeholder -->
    </div>
    <div
      class="fixed top-0 left-0 p-4 w-full flex flex-row gap-3 bg-gray-700 shadow-md z-10"
    >
      <div
        class="w-[1152px] xl:w-[1024px] lg:w-[768px] md:w-[640px] sm:w-full xs:w-full mx-auto flex flex-row gap-3"
      >
        <router-link
          :to="{
            name: 'main',
          }"
          class="p-2 border-none bg-blue-400 hover:bg-blue-800 flex flex-row gap-2"
          v-if="showMainButon"
        >
          <img src="../assets/home.svg" alt="home logo" />
          Ana Sayfa
        </router-link>
        <span class="self-center font-bold mx-auto">{{ pageTitle }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const store = useStore();

const pageTitle = ref('');
const showMainButon = ref(true);

// console.log(route.name);
// console.log(router);
watch(
  route.name,
  async () => {
    showMainButon.value = true;
    switch (route.name) {
      case 'main':
        pageTitle.value = 'Ana Sayfa';
        showMainButon.value = false;
        break;
      case 'detail':
        pageTitle.value = computed(() => store.state.detail.title);
        break;
      case 'seats':
        pageTitle.value = 'Koltuk Seçimi';
        break;
      case 'payment':
        pageTitle.value = 'Ödeme İşlemi';
        break;

      default:
        break;
    }
  },
  { immediate: true }
);
</script>
