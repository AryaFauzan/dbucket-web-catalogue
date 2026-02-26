<script setup>
import { products } from '../data/dummy.js'
import ProductCard from '../components/ui/ProductCard.vue'
import whatsappNumber from '../data/whatsappNumber.js';
</script>

<template>
  <div class="animate-fade">

    <!-- ===== HEADER ===== -->
    <section class="bg-cream py-20 text-center">
      <div class="max-w-3xl mx-auto px-4 space-y-5">
        <div class="inline-flex items-center gap-2 text-dark-red/50 text-xs font-black tracking-[0.2em] uppercase">
          <span>✦</span> Koleksi Kami
        </div>
        <h1 class="text-4xl md:text-6xl font-serif font-bold italic text-dark-red">Katalog Buket Bunga</h1>
        <p class="text-dark-red/50 text-base max-w-lg mx-auto leading-relaxed">
          Temukan buket sempurna untuk setiap momen — tersedia berbagai pilihan dengan harga terjangkau.
        </p>
      </div>
    </section>

    <!-- ===== PRODUCTS ===== -->
    <section class="bg-maroon py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Product Count -->
        <p class="text-dark-red/40 text-sm mb-8">
          Menampilkan <span class="text-cream font-bold">{{ products.length }}</span> produk
        </p>

        <!-- Product Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </section>

    <!-- ===== CUSTOM ORDER CTA ===== -->
    <section class="bg-maroon py-16">
      <div class="max-w-3xl mx-auto px-4">
        <div class="bg-dark-red rounded-3xl py-16 px-8 text-center space-y-6">
          <h2 class="text-2xl md:text-3xl font-serif font-bold italic text-maroon">Tidak menemukan yang kamu cari?</h2>
          <p class="text-maroon/50 text-sm max-w-md mx-auto leading-relaxed">
            Pesan buket custom sesuai keinginanmu! Konsultasikan desain, jenis bunga, dan budgetmu langsung via WhatsApp.
          </p>
          <a
            :href="`https://wa.me/${whatsappNumber}`"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 bg-cream text-white px-8 py-4 rounded-full font-bold text-sm hover:opacity-90 transition-opacity shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            Pesan Buket Custom
          </a>
        </div>
      </div>
    </section>

  </div>
</template>