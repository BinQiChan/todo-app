import { createApp } from 'vue'
import App from './App.vue'

// import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
const app=createApp(App)

app.use(createPinia()).mount('#app')
  