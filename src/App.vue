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
  </div>
</template>

<style>
.page-enter-active, .page-leave-active { transition: opacity 0.4s ease; }
.page-enter-from, .page-leave-to { opacity: 0; transform: translateY(10px); }
</style>