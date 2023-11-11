import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import {useRouter} from 'vue-router'
import router from './routers'


createApp(App).use(router).use(ElementPlus).mount('#app')
