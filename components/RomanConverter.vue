<script setup>
const emit = defineEmits(["conversion-result"]);

const number = ref(0);
const romanNumeral = ref(null);

const emitResult = () => {
  emit("conversion-result", {
    number: number.value,
    romanNumeral: romanNumeral.value,
  });
};

// console.log(emit);

const handleConvert = () => {
  if (number.value >= 3999) {
    alert(`Kindly enter number less than 3999`);
  } else {
    romanNumeral.value = toRoman(number.value);
  }
};

const toRoman = (number) => {
  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  let result = "";

  romanNumerals.forEach(({ value, numeral }) => {
    while (number >= value) {
      result += numeral;
      number -= value;
    }
  });

  return result;
  //   console.log(result);
};
</script>

<template>
  <CommonSubHeading
    class="mt-4 underline text-center text-3xl font-bold leading-9 tracking-tight text-slate-500"
    >Roman Converter</CommonSubHeading
  >

  <div class="flex flex-col justify-center items-center gap-3 p-4 mt-4 mb-5">
    <label
      for="numberInput"
      class="font-bold text-slate-600 dark:text-slate-100"
      >Enter a number:</label
    >
    <input
      v-model="number"
      class="block w-32 text-center rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
      type="number"
      id="numberInput"
    />
    <CommonButton
      class="flex w-40 justify-center rounded-md bg-red-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500"
      @click="handleConvert"
      >Convert</CommonButton
    >
  </div>

  <div class="flex flex-col justify-center items-center gap-3 p-3 mb-5">
    <p class="font-bold text-slate-600 dark:text-slate-100">Result:</p>
    <p class="font-bold text-2xl text-slate-700 dark:text-slate-100">
      {{ romanNumeral }}
    </p>
    <CommonButton
      class="flex w-40 justify-center rounded-md bg-red-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500"
      @click="emitResult"
      >Notify Parent</CommonButton
    >
  </div>
</template>
