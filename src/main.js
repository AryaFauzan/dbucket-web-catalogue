import { createApp } from 'vue'
import './assets/style.css' // Pastikan CSS Tailwind v4 tetap diimpor
import { inject } from '@vercel/analytics'
import App from './App.vue'
import router from './router/router' // Impor router

const app = createApp(App)

app.use(router) // Gunakan router
app.mount('#app')

inject() // Inisialisasi Vercel Analytics
