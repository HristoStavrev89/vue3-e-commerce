<template>
    <div id="contact" class="min-h-screen scroll-mt-20 bg-blue-900 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-12">
                <h1 class="text-4xl font-serif font-bold text-white mb-4">
                    Contact Us
                </h1>
                <p class="text-lg text-gray-200 wax-2-2xl mx-auto">
                    Have questions about our products? Our experts are here to help you.
                </p>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div class="bg-white p-8 rounded-lg shadow-xl border border-gray-100">
                    <h2 class="text-2xl font-serif font-semibold text-gray-900 mb-6">
                        Send Us a Message
                    </h2>
                    <form action="post" class="space-y-6">
                        <div>
                            <label for="name" class="block text-sm font-medium- text-gray-800 mb-1">Your Name</label>
                            <input type="text" id="name"
                                class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                placeholder="Your name" />
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium- text-gray-800 mb-1">Email
                                Address</label>
                            <input type="text" id="email"
                                class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                placeholder="your@email.com" />
                        </div>

                        <div>
                            <label for="message" class="block text-sm font-medium- text-gray-800 mb-1">Your
                                message</label>
                            <textarea rows="5" id="message"
                                class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                placeholder="Tell us about your needs ..."></textarea>
                        </div>
                        <button type="submit"
                            class="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-lg transition duration-300 font-medium shadow-md">
                            Send Message
                        </button>
                    </form>
                </div>
                <div class="space-y-8">
                    <div class="bg-white p-8 rounded-lg shadow-xl border border-gray-100">
                        <h2 class="text-2xl font-serif font-semibold text-gray-900 mb-4">
                            Contact Information
                        </h2>
                        <div class="space-y-6">
                            <div class="flex items-start">
                                <div class="bg-blue-200 p-3 rounded-full mr-4">
                                    <Icon icon="fa-solid:phone" class="text-blue-950 text-lg" />
                                </div>
                                <div>
                                    <h3 class="text-lg font-medium text-gray-900">Phone</h3>
                                    <p class="text-gray-800">+49 123456789</p>
                                    <p class="text-gray-600">Mon-Fri:9am-6pm</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="bg-blue-200 p-3 rounded-full mr-4">
                                    <Icon icon="fa-solid:envelope" class="text-blue-950 text-lg" />
                                </div>
                                <div>
                                    <h3 class="text-lg font-medium text-gray-900">Email</h3>
                                    <p class="text-gray-800">contact.brickbyte@mail.com</p>
                                    <p class="text-gray-600">support.brickbyte@mail.com</p>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <div class="bg-blue-200 p-3 rounded-full mr-4">
                                    <Icon icon="fa-solid:map-marker-alt" class="text-blue-950 text-lg" />
                                </div>
                                <div>
                                    <h3 class="text-lg font-medium text-gray-900">Our Shop</h3>
                                    <p class="text-gray-800">Brickbitestr 31, 50825</p>
                                    <p class="text-gray-600">Cologne, Germany</p>
                                </div>
                            </div>
                        </div>
                        <div class="mt-24">
                            <h3 class="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                            <div class="flex space-x-4">
                                <a href="#"
                                    class="bg-blue-200 hover:bg-gray-200 p-3 rounded-full transition duration-300">
                                    <Icon icon="fa-brands:instagram" class="text-blue-900" />
                                    
                                </a>
                                <a href="#"
                                    class="bg-blue-200 hover:bg-gray-200 p-3  rounded-full transition duration-300">
                                    <Icon icon="fa-brands:facebook" class="text-blue-900" />
                                    
                                </a>
                                <a href="#"
                                    class="bg-blue-200 hover:bg-gray-200 p-3  rounded-full transition duration-300">
                                    <Icon icon="fa-brands:twitter" class="text-blue-900" />
                                    
                                </a>
                            </div>
                        </div>
                    </div>



                </div>
        </div>
    </div>
    </div>


</template>

<script setup lang="ts"></script>
