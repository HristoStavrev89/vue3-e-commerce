<template>
  <div id="about" class="min-h-screen scroll-mt-20 bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col lg:flex-row gap-12 mb-20">
        <!-- Image Section -->
        <div class="lg:w-1/2">
          <div class="relative rounded-2xl overflow-hidden h-96 shadow-xl">
            <img src="../assets/AboutUs.webp" alt="BrickByte Logo" class="w-full h-full object-cover object-[center_20%]" />
            <div class="absolute inset-0"></div>
            <div class="absolute bottom-0 left-0 p-6 text-white">
                <h2 class="mt-2 text-black-600">Since 2021</h2>
                <p class="mt-2">Powering Next-Level PC Builds</p>
            </div>
          </div>
        </div>

        <!-- Text Content -->
         <div class="lg:w-1/2 flex flex-col justify-center">
            <h2 class="text-4xl font-bold text-blue-900 mb-6">About Us</h2>
            <p class="text-lg text-gray-600 mb-4">
                BrickByte is your go-to source for high-performance PC components. 
                We help enthusiasts and builders craft powerful, reliable systems 
                using only top-tier hardware and trusted brands.
            </p>
            <div class="grid grid-cols-2 gap-4 mt-4">
                <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <h4 class="font-semibold text-blue-600">2000+</h4>
                    <p class="text-gray-600">Components in stock</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <h4 class="font-semibold text-blue-600">80+</h4>
                    <p class="text-gray-600">Trusted brands</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <h4 class="font-semibold text-blue-600">10K+</h4>
                    <p class="text-gray-600">Happy builders served</p>
                </div>
                 <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <h4 class="font-semibold text-blue-600">24/7</h4>
                    <p class="text-gray-600">Customer support</p>
                </div>
                
            </div>
         </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
