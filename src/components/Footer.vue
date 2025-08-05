<template>
    <footer class="bg-gray-950 text-gray-300 pt-12 pb-6">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                <div>
                    <h3 class="text-xl font-bold text-white mb-4">Hardware Haven</h3>
                    <p class="mb-4">
                        Lorem ipsum dolor sit amt consectetur adipisicing elit. Ipsam velit
                        ad, dolore similique.
                    </p>
                    <div class="flex space-x-4">
                        <a v-for="(social, index) in socialLinks" :href="social.url" :key="index"
                            class="text-gray-400 hover:text-white transition">
                            <Icon :icon="social.icon" class="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <!-- Quick links -->
                <div>
                    <h3 class="text-lg font-semibold text-white mb-4">
                        Quick Links
                    </h3>
                    <ul class="space-y-2">
                        <li v-for="(link, index) in quickLinks" :key="index">
                            <a href="#" class="hover:text-white transition">{{ link }}</a>
                        </li>
                    </ul>
                </div>

                <!-- Customer Service -->
                <div>
                    <h3 class="text-lg font-semibold text-white mb-4">
                        Customer Service
                    </h3>
                    <ul class="space-y-2">
                        <li v-for="(link, index) in customerService" :key="index">
                            <a href="#" class="hover:text-white transition">{{ link }}</a>
                        </li>
                    </ul>
                </div>

                <!-- Newsletter -->
                 <div>
                      <h3 class="text-lg font-semibold text-white mb-4">
                        Newsletter
                    </h3>
                    <p class="mb-4">Subscribe to get updates on new arrivals and special offers.</p>
                    <form class="flex">
                        <input type="email" placeholder="Your email"
                        class="px-4 py-2 w-full rounded-l-lg focus:outline-none bg-gray-100 text-gray-900" required/>
                        <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white
                        p-2 rounded-r-lg transition">Subscribe</button>
                    </form>
                    <div class="mt-3 flex items-center">
                        <Icon icon="fa6-solid:envelope" class="w-5 h-5 mr-2" />
                        <span>support@brickbyte.com</span>
                    </div>
                 </div>
            </div>
            <div class="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
                <p>&nbsp; {{ new Date().getFullYear() }} BrickByte. All rights reserved</p>
                <div class="flex space-x-6 mt-4 md:mt-0">
                    <Icon v-for="(icon, index) in paymentIcons" :key="index" :icon="icon"
                    class="w-6 h-6" />
                </div>
            </div>
        </div>
    </footer>
</template>
<script setup lang="ts">
import { ref } from "vue";

const quickLinks = ref([
    "Home",
    "Shop",
    "New Arrivals",
    "Best Sellers",
    "Gift Combos",
]);
const customerService = ref([
    "Contact Us",
    "FAQs",
    "Shipping Policy",
    "Returns & Exchange",
    "Privacy Policy",
]);
const paymentIcons = ref(["logos:visa", "logos:mastercard", "logos:paypal"]);
const socialLinks = ref([
    { icon: "fa6-brands:facebook-f", url: "#" },
    { icon: "fa6-brands:twitter", url: "#" },
    { icon: "fa6-brands:instagram", url: "#" },
]);
</script>
