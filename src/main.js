import { createApp, VueElement } from 'vue'
import './style.css'
import App from './App.vue'
import * as echarts from 'echarts'
import 'echarts-gl'
import jquery from 'jquery';
import ecStat from 'echarts-stat';

const app = createApp(App)

App.jquery = jquery;
App.echarts = echarts;
app.ecStat = ecStat



// Object.defineProperty(VueElement.prototype, '$echarts', { value: echarts })
createApp(App).mount('#app')


