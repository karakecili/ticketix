<template>
  <default-layout>
    <div class="flex flex-row gap-2 items-center">
      <span>Toplam hesap:</span>
      <span class="text-green-300 font-bold text-3xl">{{ orderTotal }}</span>
      <span>₺</span>
    </div>
    <payment-form @submitForm="onSubmitForm" />
  </default-layout>
</template>

<script setup>
import { ref, onBeforeMount, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import defaultLayout from '../layouts/defaultLayout.vue';
import paymentForm from '../components/paymentForm.vue';

const store = useStore();
const router = useRouter();

const orderTotal = computed(() => store.getters.getOrderTotal);

const orderInfo = computed(() => store.getters.getOrderInfo);

function renameKeys(obj, newKeys) {
  const keyValues = Object.keys(obj).map((key) => {
    const newKey = newKeys[key] || key;
    return { [newKey]: obj[key] };
  });
  return Object.assign({}, ...keyValues);
}

function onSubmitForm({ input }) {
  const obj = { ...input, ...orderInfo.value };
  const newKeys = {
    firstName: 'customer_name',
    lastName: 'customer_surname',
    mail: 'customer_email',
    CCnumber: 'cc_number',
    mount: 'cc_exp_month',
    year: 'cc_exp_year',
    CVV: 'cc_exp_cvv',
  };
  const renamedObj = renameKeys(obj, newKeys);
  store.dispatch('setPayment', renamedObj).then((e) => orderSucceed(e));
}

const orderSucceed = (response) => {
  window.alert(response);
  router.push({ name: 'main' });
};
</script>
