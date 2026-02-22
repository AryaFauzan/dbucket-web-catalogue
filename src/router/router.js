import { createRouter, createWebHistory } from 'vue-router'
// Kita akan mengimpor komponen halaman (Views) nanti,
// untuk sekarang kita buat HomeView sebagai contoh pertama.
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // Rute /catalog, /about, dan /contact akan kita tambahkan nanti
  ],
  // Fungsi ini agar setiap pindah halaman, scroll kembali ke paling atas
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router
