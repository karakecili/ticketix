<template>
  <form class="w-full p-4">
    <div
      class="flex flex-row gap-6 md:flex-col sm:flex-col xs:flex-col mb-6 text-left"
    >
      <div class="relative z-0 w-full group">
        <input
          type="text"
          name="txt_first_name"
          id="txt_first_name"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          v-model="input.firstName"
          @keyup="validateNameField('firstName', input.firstName)"
          @blur="validateNameField('firstName', input.firstName)"
        />
        <div class="text-red-900 text-xs" v-if="errors.firstName">
          {{ errors.firstName }}
        </div>
        <label
          for="txt_first_name"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Ad</label
        >
      </div>
      <div class="relative z-0 w-full group">
        <input
          type="text"
          name="txt_last_name"
          id="txt_last_name"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          v-model="input.lastName"
          @keyup="validateNameField('lastName', input.lastName)"
          @blur="validateNameField('lastName', input.lastName)"
        />
        <div class="text-red-900 text-xs" v-if="errors.lastName">
          {{ errors.lastName }}
        </div>
        <label
          for="txt_last_name"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Soyad</label
        >
      </div>
    </div>
    <div class="relative z-0 w-full mb-6 group text-left">
      <input
        type="email"
        name="txt_email"
        id="txt_email"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
        v-model="input.mail"
        @keyup="validateEmailField('mail', input.mail)"
        @blur="validateEmailField('mail', input.mail)"
      />
      <div class="text-red-900 text-xs" v-if="errors.mail">
        {{ errors.mail }}
      </div>
      <label
        for="txt_email"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >E-Mail</label
      >
    </div>
    <div class="relative z-0 w-full mb-6 group text-left">
      <input
        type="text"
        name="txt_CCcard"
        id="txt_CCcard"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
        v-model="input.CCnumber"
        @keyup="validateCCField('CCnumber', input.CCnumber)"
        @blur="validateCCField('CCnumber', input.CCnumber)"
      />
      <div class="text-red-900 text-xs" v-if="errors.CCnumber">
        {{ errors.CCnumber }}
      </div>
      <label
        for="txt_CCcard"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Kredi Kartı</label
      >
    </div>
    <div
      class="flex flex-row gap-6 md:flex-col sm:flex-col xs:flex-col mb-6 text-left"
    >
      <div class="relative z-0 w-full group">
        <input
          type="number"
          name="txt_month"
          id="txt_month"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          v-model="input.mount"
          @keyup="validateMountField('mount', input.mount)"
          @blur="validateMountField('mount', input.mount)"
        />
        <div class="text-red-900 text-xs" v-if="errors.mount">
          {{ errors.mount }}
        </div>
        <label
          for="txt_month"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Ay</label
        >
      </div>
      <div class="relative z-0 w-full group">
        <input
          type="number"
          name="txt_year"
          id="txt_year"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          v-model="input.year"
          @keyup="validateYearField('year', input.year)"
          @blur="validateYearField('year', input.year)"
        />
        <div class="text-red-900 text-xs" v-if="errors.year">
          {{ errors.year }}
        </div>
        <label
          for="txt_year"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Yıl</label
        >
      </div>
      <div class="relative z-0 w-full group">
        <input
          type="number"
          name="floating_last_name"
          id="floating_last_name"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          v-model="input.CVV"
          @keyup="validateCVVField('CVV', input.CVV)"
          @blur="validateCVVField('CVV', input.CVV)"
        />
        <div class="text-red-900 text-xs" v-if="errors.CVV">
          {{ errors.CVV }}
        </div>
        <label
          for="floating_last_name"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >CVV</label
        >
      </div>
    </div>
    <button
      type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      :disabled="isSubmitDisabled"
      @click.prevent="submitPressed"
    >
      Onayla
    </button>
  </form>
</template>

<script setup>
import { reactive, computed } from 'vue';
import { useStore } from 'vuex';
import { useValidation } from '../composables/validators';

const store = useStore();
const {
  errors,
  validateNameField,
  validateEmailField,
  validateMountField,
  validateYearField,
  validateCCField,
  validateCVVField,
} = useValidation();

let input = reactive({
  firstName: '',
  lastName: '',
  mail: '',
  CCnumber: '',
  mount: '',
  year: '',
  CVV: '',
});

const isSubmitDisabled = computed(() => {
  let disabled = true;
  for (let field in input) {
    if (!input[field] || errors[field]) {
      disabled = true;
      break;
    }
    disabled = false;
  }
  return disabled;
});

const emit = defineEmits({
  submitForm: ({ input }) => {
    if (input) return true;
    else return false;
  },
});

function selectCategory(input) {
  emit('submitForm', { input });
}

const submitPressed = () => {
  emit('submitForm', { input });
};

// console.log(useValidation);
</script>
