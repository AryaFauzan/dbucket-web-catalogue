<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const isMobileMenuOpen = ref(false)
const route = useRoute()

const isActive = (path) => route.path === path
</script>

<template>
  <nav class="fixed w-full bg-dark-red/95 backdrop-blur-md z-50 border-b border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-2 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="text-cream w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5a4.5 4.5 0 1 0-4.5 4.5M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15"/><circle cx="12" cy="12" r="3"/></svg>
          <span class="text-2xl font-serif font-bold text-maroon tracking-tight">DBucket</span>
        </router-link>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center space-x-2 text-sm font-semibold">
          <router-link to="/" :class="isActive('/') ? 'bg-cream text-white px-6 py-2.5 rounded-full' : 'text-maroon/70 hover:text-maroon px-5 py-2.5 rounded-full transition-all'">Beranda</router-link>
          <router-link to="/catalog" :class="isActive('/catalog') ? 'bg-cream text-white px-6 py-2.5 rounded-full' : 'text-maroon/70 hover:text-maroon px-5 py-2.5 rounded-full transition-all'">Produk</router-link>
          <router-link to="/about" :class="isActive('/about') ? 'bg-cream text-white px-6 py-2.5 rounded-full' : 'text-maroon/70 hover:text-maroon px-5 py-2.5 rounded-full transition-all'">Tentang</router-link>
          <router-link to="/contact" :class="isActive('/contact') ? 'bg-cream text-white px-6 py-2.5 rounded-full' : 'text-maroon/70 hover:text-maroon px-5 py-2.5 rounded-full transition-all'">Kontak</router-link>
        </div>

        <!-- WhatsApp CTA -->
        <a href="https://wa.me/12345" class="hidden md:flex items-center gap-2 bg-cream text-white px-7 py-3 rounded-full font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-cream/20">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Pesan via WhatsApp
        </a>

        <!-- Mobile Toggle -->
        <button class="md:hidden p-2 text-maroon" @click="isMobileMenuOpen = !isMobileMenuOpen">
          <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="page">
      <div v-if="isMobileMenuOpen" class="md:hidden bg-dark-red border-t border-white/5 p-6 flex flex-col space-y-3">
        <router-link to="/" @click="isMobileMenuOpen = false" :class="isActive('/') ? 'bg-cream text-white px-5 py-3 rounded-full text-center font-bold' : 'text-maroon py-3 px-5 text-center font-semibold'">Beranda</router-link>
        <router-link to="/catalog" @click="isMobileMenuOpen = false" :class="isActive('/catalog') ? 'bg-cream text-white px-5 py-3 rounded-full text-center font-bold' : 'text-maroon py-3 px-5 text-center font-semibold'">Produk</router-link>
        <router-link to="/about" @click="isMobileMenuOpen = false" :class="isActive('/about') ? 'bg-cream text-white px-5 py-3 rounded-full text-center font-bold' : 'text-maroon py-3 px-5 text-center font-semibold'">Tentang</router-link>
        <router-link to="/contact" @click="isMobileMenuOpen = false" :class="isActive('/contact') ? 'bg-cream text-white px-5 py-3 rounded-full text-center font-bold' : 'text-maroon py-3 px-5 text-center font-semibold'">Kontak</router-link>
        <a href="https://wa.me/12345" class="flex items-center justify-center gap-2 bg-cream text-white px-5 py-3 rounded-full font-bold mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Pesan via WhatsApp
        </a>
      </div>
    </transition>
  </nav>
</template>