<template>
  <nav class="dark:bg-slate-900 dark:text-slate-100">
    <ul
      class="m-auto w-4/5 flex flex-wrap rounded-lg justify-center gap-4 lg:w-1/2 md:w-3/4 sm:w-4/5 items-center px-2 py-4 shadow-sm shadow-red-500"
    >
      <NuxtLink :to="`${path}`" v-for="{ title, path } in links">
        <li
          class="cursor-pointer border border-red-600 w-auto px-2 h-10 flex justify-center items-center rounded-md hover:bg-red-600 hover:text-white hover:shadow-lg"
        >
          {{ title }}
        </li>
      </NuxtLink>
    </ul>
  </nav>
</template>

<script setup>
const props = defineProps(["links"]);
</script>

<style scoped>
.router-link-exact-active {
  /* Your styling for the active link goes here */
  background-color: #dc2626;
  color: white;
  border-radius: 4px;
  border: none;
  outline: none;
  /* Add any other styles you want for the active link */
}
</style>
