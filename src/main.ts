import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/base.css'
import './assets/css/main.scss'
import './assets/css/font.scss'
import './assets/css/common.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')
