<script setup>
import Navbar from './components/layouts/Navbar.vue'
import Footer from './components/layouts/Footer.vue'
</script>

<template>
  <div class="custom-scrollbar">
    <Navbar />
    
    <main class="pt-20 min-h-screen overflow-x-hidden">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <Footer />

    <a href="https://wa.me/12345" class="fixed bottom-8 right-8 bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-50 group flex items-center gap-3 border-4 border-cream shadow-rich-red/20">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    </a>
  </div>
</template>

<style>
.page-enter-active, .page-leave-active { transition: opacity 0.4s ease; }
.page-enter-from, .page-leave-to { opacity: 0; transform: translateY(10px); }
</style>