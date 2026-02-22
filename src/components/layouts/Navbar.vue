<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const isMobileMenuOpen = ref(false)
const route = useRoute()

// Fungsi untuk mengecek apakah rute sedang aktif untuk styling menu
const isActive = (path) => route.path === path
</script>

<template>
  <nav class="fixed w-full bg-dark-red/95 backdrop-blur-md z-50 border-b border-rich-red/20 shadow-xl">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <router-link to="/" class="flex items-center gap-2 cursor-pointer">
          <div class="w-10 h-10 bg-cream rounded-full flex items-center justify-center shadow-lg shadow-black/20">
            <svg xmlns="http://www.w3.org/2000/svg" class="text-rich-red w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
          </div>
          <span class="text-2xl font-serif font-bold text-cream tracking-tight">BloomBliss</span>
        </router-link>

        <div class="hidden md:flex items-center space-x-10 font-bold text-xs uppercase tracking-widest">
          <router-link to="/" :class="isActive('/') ? 'text-cream border-b-2 border-rich-red pb-1' : 'text-cream/60 hover:text-cream transition-all'">Beranda</router-link>
          <router-link to="/catalog" :class="isActive('/catalog') ? 'text-cream border-b-2 border-rich-red pb-1' : 'text-cream/60 hover:text-cream transition-all'">Katalog</router-link>
          <router-link to="/about" :class="isActive('/about') ? 'text-cream border-b-2 border-rich-red pb-1' : 'text-cream/60 hover:text-cream transition-all'">Tentang</router-link>
          <router-link to="/contact" class="bg-rich-red text-cream px-8 py-3 rounded-xl hover:bg-maroon transition-all transform hover:-translate-y-1 shadow-lg shadow-black/30 border border-rich-red/50">Hubungi Kami</router-link>
        </div>

        <button class="md:hidden p-2 text-cream" @click="isMobileMenuOpen = !isMobileMenuOpen">
          <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
    </div>

    <transition name="page">
      <div v-if="isMobileMenuOpen" class="md:hidden bg-dark-red border-t border-rich-red/20 p-6 flex flex-col space-y-4 shadow-xl">
        <router-link to="/" @click="isMobileMenuOpen = false" class="text-left py-2 font-bold text-cream">Beranda</router-link>
        <router-link to="/catalog" @click="isMobileMenuOpen = false" class="text-left py-2 font-bold text-cream">Katalog</router-link>
        <router-link to="/about" @click="isMobileMenuOpen = false" class="text-left py-2 font-bold text-cream">Tentang Kami</router-link>
        <router-link to="/contact" @click="isMobileMenuOpen = false" class="text-left py-2 font-bold text-rich-red bg-cream rounded-lg px-4">Kontak</router-link>
      </div>
    </transition>
  </nav>
</template>