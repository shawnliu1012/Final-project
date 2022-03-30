import { createApp } from 'vue'
import 'bootstrap'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import CircleProgress from 'vue3-circle-progress'

createApp(App).use(router).use(VueAxios, axios).use(CircleProgress).mount('#app')
