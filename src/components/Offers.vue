<template>
    <div id="offers" class="container scroll-mt-20 mx-auto px-4 py-12">
        <h2 class="text-3xl font-bold text-center mb-2 text-blue-900">Special Offers</h2>
        <p class="text-center text-gray-600 mb-12">
            Take advantage of these limited-time offers
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="offer in currentOffers" :key="offer.id" :class="[offer.bgColor,
                'rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105',
                'hover:cursor-pointer'
            ]">
                <div class="p-6">
                    <div class="flex justify-between items-start mb-4">
                        <h3 :class="[offer.textColor, 'text-xl font-semibold']">{{ offer.title }}</h3>
                        <span class="bg-white rounded-full p-3 shadow-md">
                            <Icon :icon="offer.discount.includes('%') ? 'material-symbols:percent' : 'mdi:gift'"
                                :class="[offer.textColor, 'text-2xl']" />
                        </span>
                    </div>
                    <p class="text-gray-700 mb-5">{{ offer.description }}</p>
                    <div class="flex items-center text-gray-600 mb-6">
                        <Icon icon="svg-spinners:clock" class="mr-2" />
                        <span>Ends on {{ offer.endDate }}</span>
                    </div>

                    <div class="bg-white rounded-lg p-4 mb-4">
                        <p class="text-sm text-gray-500 mb-1 ">Use Code</p>
                        <p class="font-bold font-mono text-lg hover:cursor-default">{{ offer.code }}</p>
                    </div>

                    <button :class="[offer.textColor, 'w-full py-3 rounded-lg font-semibold border',
                    offer.textColor.replace('text', 'border'),
                        'hover:bg-white hover:cursor-pointer transition-colors duration-300'
                    ]">Claim Offer</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Offer } from "../types/types"

const currentOffers = ref<Offer[]>([
    {
        id: 1,
        title: 'Hot Summer Sale',
        description: 'Up to 30% off on our summer tech essentials',
        discount: '30%',
        endDate: '2025-08-31',
        code: 'SUMMER30',
        bgColor: 'bg-blue-200',
        textColor: 'text-blue-700'
    },
    {
        id: 2,
        title: 'Back to School Deals',
        description: 'Save up to 25% on laptops and accessories for students',
        discount: '25',
        endDate: '2025-09-15',
        code: 'SCHOOL25',
        bgColor: 'bg-blue-200',
        textColor: 'text-blue-700'
    },
    {
        id: 3,
        title: 'Early Autumn Upgrade',
        description: 'Grab new CPUs and GPUs with up to 20% off',
        discount: '20%',
        endDate: '2025-10-01',
        code: 'AUTUMN20',
        bgColor: 'bg-blue-200',
        textColor: 'text-blue-700'
    }
])

</script>
