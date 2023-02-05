import { reactive, computed } from 'vue';

function validatorTypes() {
  const isEmpty = (fieldName, fieldValue) => {
    return !fieldValue ? '' + fieldName + ' alanı zorunludur' : '';
  };

  const minLength = (fieldName, fieldValue, min) => {
    return fieldValue.toString().length < min
      ? `${fieldName} alanı en az ${min} karaktere sahip olmalıdır`
      : '';
  };
  const maxLength = (fieldName, fieldValue, max) => {
    return fieldValue.toString().length > max
      ? `${fieldName} alanı en fazla ${max} karaktere sahip olmalıdır`
      : '';
  };

  const minNumber = (fieldName, fieldValue, min) => {
    return fieldValue < min
      ? `${fieldName} alanı ${min} değerinden küçük olamaz`
      : '';
  };

  const maxNumber = (fieldName, fieldValue, max) => {
    return fieldValue > max
      ? `${fieldName} alanı ${max} değerinden büyük olamaz`
      : '';
  };

  const isEmail = (fieldName, fieldValue) => {
    let re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !re.test(fieldValue)
      ? 'Geçerli bir ' + fieldName + ' adresi değil'
      : '';
  };

  const isNum = (fieldName, fieldValue) => {
    let isNum = /^\d+$/.test(fieldValue);
    return !isNum
      ? ' ' + fieldName + ' alanı sadece nümerik değerler içerir'
      : '';
  };

  return {
    isEmpty,
    minLength,
    maxLength,
    minNumber,
    maxNumber,
    isEmail,
    isNum,
  };
}

const errors = reactive({});

export function useValidation() {
  const {
    isEmpty,
    minLength,
    maxLength,
    minNumber,
    maxNumber,
    isEmail,
    isNum,
  } = validatorTypes();

  const validateNameField = (fieldName, fieldValue) => {
    errors[fieldName] =
      isEmpty(fieldName, fieldValue) || minLength(fieldName, fieldValue, 4);
  };

  const validateEmailField = (fieldName, fieldValue) => {
    errors[fieldName] =
      isEmpty(fieldName, fieldValue) || isEmail(fieldName, fieldValue);
  };

  const validatePhoneField = (fieldName, fieldValue) => {
    errors[fieldName] = !fieldValue
      ? isEmpty(fieldName, fieldValue)
      : isNum(fieldName, fieldValue);
  };

  const validatePasswordField = (fieldName, fieldValue) => {
    errors[fieldName] = !fieldValue
      ? isEmpty(fieldName, fieldValue)
      : minLength(fieldName, fieldValue, 8);
  };

  const validateCCField = (fieldName, fieldValue) => {
    errors[fieldName] =
      isEmpty(fieldName, fieldValue) ||
      isNum(fieldName, fieldValue) ||
      minLength(fieldName, fieldValue, 16) ||
      maxLength(fieldName, fieldValue, 16);
  };

  const validateMountField = (fieldName, fieldValue) => {
    errors[fieldName] =
      isEmpty(fieldName, fieldValue) ||
      isNum(fieldName, fieldValue) ||
      minNumber(fieldName, fieldValue, 1) ||
      maxNumber(fieldName, fieldValue, 12);
  };

  const validateYearField = (fieldName, fieldValue) => {
    errors[fieldName] =
      isEmpty(fieldName, fieldValue) ||
      isNum(fieldName, fieldValue) ||
      minNumber(fieldName, fieldValue, new Date().getFullYear()) ||
      maxNumber(fieldName, fieldValue, 2099);
  };

  const validateCVVField = (fieldName, fieldValue) => {
    errors[fieldName] =
      isEmpty(fieldName, fieldValue) ||
      isNum(fieldName, fieldValue) ||
      minLength(fieldName, fieldValue, 3) ||
      maxLength(fieldName, fieldValue, 3);
  };

  return {
    errors,
    validateNameField,
    validateMountField,
    validateYearField,
    validateEmailField,
    validatePhoneField,
    validatePasswordField,
    validateCVVField,
    validateCCField,
  };
}
