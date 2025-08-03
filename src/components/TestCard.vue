<template>
  <div
    class="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col transition hover:shadow-lg w-full max-w-[306px] h-[380px]"
  >
    <!-- Image -->
    <img
      :src="image"
      :alt="title"
      class="w-full h-48 object-cover"
    />

    <!-- Content -->
    <div class="p-4 flex-1 flex flex-col justify-between overflow-hidden">
      <div>
        <h3 class="text-lg font-semibold text-gray-800 truncate">{{ title }}</h3>
        <p class="text-sm text-gray-500 mt-1 line-clamp-2">{{ description }}</p>
      </div>

      <div class="mt-4">
        <p class="text-pink-600 font-bold text-lg">{{ price }}</p>
      </div>
    </div>

    <!-- Buttons -->
    <div class="flex border-t border-gray-100 divide-x">
      <button
        class="w-1/2 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 transition"
        @click="$emit('details')"
      >
        Details
      </button>
      <button
        class="w-1/2 py-2 text-sm font-medium text-pink-600 hover:text-white hover:bg-pink-600 transition"
        @click="$emit('add')"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: string
  title: string
  description?: string
  price: string
}>()

defineEmits<{
  (e: 'add'): void
  (e: 'details'): void
}>()
</script>
