<!-- src/layouts/DefaultLayout.vue -->
<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-1">
      <slot />
    </main>
    <footer class="bg-gray-100 text-center py-4 text-sm text-gray-500">
      © {{ new Date().getFullYear() }} MyShop. All rights reserved.
    </footer>
  </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
</script>
