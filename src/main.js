import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Icon } from "@iconify/vue";
import './style.css'

createApp(App).use(router).component("Icon", Icon).mount('#app')
