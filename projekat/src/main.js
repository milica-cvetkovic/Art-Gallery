import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

createApp(App).use(router).mount('#app')
