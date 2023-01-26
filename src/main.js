import { createApp, VueElement } from 'vue'
import './style.css'
import App from './App.vue'
import * as echarts from 'echarts'
import 'echarts-gl'
import jquery from 'jquery';
import ecStat from 'echarts-stat';

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import router from './router'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

App.jquery = jquery;
App.echarts = echarts;
App.ecStat = ecStat

const vuetify = createVuetify({
    components,
    directives,
})


// Object.defineProperty(VueElement.prototype, '$echarts', { value: echarts })
createApp(App).use(pinia).use(router).use(vuetify).mount('#app')


