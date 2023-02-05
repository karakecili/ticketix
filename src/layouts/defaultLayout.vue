<template>
  <div
    class="mx-auto flex flex-col place-items-center w-[1152px] xl:w-[1024px] lg:w-[768px] md:w-[640px] sm:w-full xs:w-full"
  >
    <header-component />
    <slot></slot>
    <div class="mt-5">
      <!-- Footer component -->
    </div>
  </div>
</template>

<script setup>
import headerComponent from '../components/headerComponent.vue';
</script>
