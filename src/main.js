import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"
import './stylesheet/style.scss'
import router from './router/router'

createApp(App).use(router).mount('#app')
