<template>
  <section
    class="w-4/5 p-10 flex my-10 flex-col lg:flex-row md-flex-row items-center justify-evenly gap-6 m-auto bg-whitesmoke rounded-md shadow-sm shadow-red-500"
    :class="{ 'flex-row-reverse': index % 2 !== 0 }"
  >
    <div class="flex-shrink-0 mr-4">
      <img
        :src="`${item.images.jpg.image_url}`"
        :alt="`${item.name}`"
        class="w-40 h-40 object-cover rounded-md"
      />
    </div>

    <div class="flex-grow w-full">
      <div class="text-center mb-2">
        <CommonSubHeading class="text-xl font-500 text-slate-600">{{
          item.name
        }}</CommonSubHeading>
      </div>

      <p class="text-gray-700 dark:text-slate-100 text-sm overflow-hidden line-clamp-5 mb-2">
        {{ item.about }}
      </p>
    </div>
  </section>
</template>

<script setup>
const { item, index } = defineProps({
  item: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});
</script>
