import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import $ from 'jquery'

import './assets/js/main.js'

createApp(App).use(router).mount('#app')
