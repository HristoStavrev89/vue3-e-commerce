<template>
    <section id="categories" class="py-16 scroll-mt-20 bg-white">
        <div class="container mx-auto px-4">
            <!-- Section Header -->
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-amber-950 mb-3">Explore Our Fragrance Collections</h2>
                <p class="text-lg text-gray-800 wax-2-2xl mx-auto">
                    Discover scents that match your personality
                </p>
            </div>

            <!-- Categories Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="(category, index) in categories" :key="index" class="relative group overflow-hidden rounded-lg 
                shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div class="h-64 overflow-hidden">
                        <img :src="category.image" :alt="category.alt"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                        <div class="absolute bottom-0 left-0 p-6">
                            <h3 class="text-xl font-semibold text-white">
                                {{ category.name }}
                            </h3>
                            <p class="text-gray-200 mt-1">{{ category.title }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { CategoryName, CategoryItem } from '../types/types';


const categories: CategoryItem[] = [
    {
        name: "CPU",
        title: "Powerful Processors",
        image: "https://www.trustedreviews.com/wp-content/uploads/sites/7/2021/03/Intel-Rocker-Lake-2-e1615908186584.jpg",
        alt: "Powerful Processors"
    },
    {
        name: "GPU",
        title: "High-Performance Graphics",
        image: "https://cdn.mos.cms.futurecdn.net/FbucRiSjc8TZnXzYoMo2FF.jpg",
        alt: "High-Performance Graphics",
    },
    {
        name: "Memory",
        title: "Fast & Reliable RAM",
        alt: "Fast & Reliable RAM",
        image: "https://www.cyberpowerpc.com/blog/w/wp-content/uploads/2021/08/How-to-Upgrade-RAM-in-Your-Gaming-PC.jpg"
    },
    {
        name: "Storage",
        title: "Speedy SSDs & Large HDDs",
        alt: "Speedy SSDs & Large HDDs",
        image: "https://cms-images.mmst.eu/2rj3gcd43pmw/1sz43ERJzxU2HujEe29yv1/d1d8b9e15f84806745848f244e4afde3/m2-sata-ssd-laptop.jpeg?q=60&w=1200&fm=webp"
    },
    {
        name: "Motherboard",
        title: "Robust Motherboards",
        alt: "Robust Motherboards",
        image: "https://www.trustedreviews.com/wp-content/uploads/sites/7/2019/04/Best-motherboards-2019-Q1.jpg"
    },
    {
        name: "PSU",
        title: "Reliable Power Supplies",
        alt: "Reliable Power Supplies",
        image: "https://geekawhat.com/wp-content/uploads/2023/07/Best-SFX-PSUs-Feature-Image.jpg"
    },
    {
        name: "Case",
        title: "Stylish & Functional Cases",
        alt: "Stylish & Functional Cases",
        image: "https://press.asus.com/assets/w_1820,h_1213/7301774e-2daf-4b2e-acd5-93a32a259bad/1820_1213.jpg"
    },
    {
        name: "Cooling",
        title: "Advanced Cooling Solutions",
        alt: "Advanced Cooling Solutions",
        image: "https://www.pcworld.com/wp-content/uploads/2025/04/air_vs_water_primary-100025795-orig.jpg?quality=50&strip=all"
    }
];



</script>
