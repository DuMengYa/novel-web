import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element.js'

import './assets/css/global.css'
// createApp.config.productionTip = false
import axios from 'axios'
// 配置请求的跟路径
axios.defaults.baseURL = 'http://192.168.0.102:8080/'

const app = createApp(App)
installElementPlus(app)
app.use(store).use(router).mount('#app')
