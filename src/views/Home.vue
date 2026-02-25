<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToCatalog = () => {
  router.push('/catalog')
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const categories = [
  { name: 'Ulang Tahun', emoji: '🎂' },
  { name: 'Wisuda', emoji: '🎓' },
  { name: 'Pernikahan', emoji: '💍' },
  { name: 'Valentine', emoji: '💕' },
  { name: 'Hari Ibu', emoji: '🌸' },
]
</script>

<template>
  <div class="animate-fade">

    <!-- ===== HERO SECTION ===== -->
    <section class="relative bg-cream overflow-hidden min-h-[90vh] flex items-center">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <!-- Text Content -->
          <div class="flex-1 space-y-8 text-center lg:text-left z-10">
            <div class="inline-flex items-center gap-2 text-maroon/70 text-xs font-black tracking-[0.2em] uppercase">
              <span>✦</span> Toko Buket Bunga Premium
            </div>
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] text-dark-red">
              Rangkaian Bunga
              <span class="block italic text-maroon font-normal">untuk Setiap</span>
              Momen Spesialmu
            </h1>
            <p class="text-dark-red/60 max-w-lg leading-relaxed text-base lg:text-lg mx-auto lg:mx-0">
              Kami merangkai setiap buket dengan tangan dan penuh kasih sayang. Dari ulang tahun hingga pernikahan — DBucket hadir untuk memperindah momen berhargamu.
            </p>
            <div class="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button @click="goToCatalog" class="bg-dark-red text-maroon px-8 py-4 rounded-full font-bold shadow-xl shadow-dark-red/30 hover:opacity-90 transition-all flex items-center gap-2 group text-sm">
                Lihat Katalog
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
              <a href="https://wa.me/12345" class="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:opacity-90 transition-all flex items-center gap-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Pesan via WhatsApp
              </a>
            </div>
          </div>

          <!-- Circular Image -->
          <div class="flex-1 flex justify-center lg:justify-end relative">
            <!-- Decorative semi-circle behind -->
            <div class="absolute -top-10 -right-10 w-[500px] h-[500px] bg-dark-red/20 rounded-full z-0 hidden lg:block"></div>
            <div class="w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px] rounded-full overflow-hidden border-8 border-dark-red/30 shadow-2xl relative z-10">
              <img
                src=""
                class="w-full h-full object-cover grayscale contrast-125"
                alt="Rangkaian Bunga DBucket"
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== STATS RIBBON ===== -->
    <section class="relative bg-cream py-20 overflow-hidden">
      <!-- Decorative large circle -->
      <div class="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-maroon/20 rounded-full hidden lg:block"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="border-t border-white/15 pt-16"></div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">
          <div class="space-y-1">
            <p class="text-4xl md:text-5xl font-serif font-bold text-maroon">500<span class="text-3xl">+</span></p>
            <p class="text-dark-red/50 text-sm font-medium">Desain Buket</p>
          </div>
          <div class="space-y-1">
            <p class="text-4xl md:text-5xl font-serif font-bold text-maroon">2.000<span class="text-3xl">+</span></p>
            <p class="text-dark-red/50 text-sm font-medium">Pelanggan Puas</p>
          </div>
          <div class="space-y-1">
            <p class="text-4xl md:text-5xl font-serif font-bold text-maroon">5<span class="text-3xl">★</span></p>
            <p class="text-dark-red/50 text-sm font-medium">Rating</p>
          </div>
          <div class="space-y-1">
            <p class="text-3xl md:text-4xl font-serif font-bold text-maroon leading-tight">Same<br>Day</p>
            <p class="text-dark-red/50 text-sm font-medium">Pengiriman</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CATEGORY SECTION ===== -->
    <section class="bg-dark-red py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 space-y-4">
          <div class="inline-flex items-center gap-2 text-maroon/60 text-xs font-black tracking-[0.2em] uppercase">
            <span>✦</span> Untuk Setiap Momen
          </div>
          <h2 class="text-3xl md:text-5xl font-serif font-bold italic text-maroon tracking-tight">Buket untuk Semua Kesempatan</h2>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          <div
            v-for="cat in categories"
            :key="cat.name"
            class="group bg-white/5 rounded-2xl p-8 flex flex-col items-center text-center space-y-4 border border-white/10 hover:border-cream/40 hover:bg-cream/10 transition-all cursor-pointer"
          >
            <span class="text-4xl group-hover:scale-110 transition-transform">{{ cat.emoji }}</span>
            <p class="text-maroon text-sm font-semibold">{{ cat.name }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CTA SECTION ===== -->
    <section class="bg-cream py-24">
      <div class="max-w-3xl mx-auto px-4 text-center space-y-8">
        <div class="inline-flex items-center gap-2 text-dark-red/50 text-xs font-black tracking-[0.2em] uppercase">
          <span>▲</span>
        </div>
        <h2 class="text-3xl md:text-5xl font-serif font-bold italic text-dark-red">Siap Memesan Buket Impianmu?</h2>
        <p class="text-dark-red/60 text-lg max-w-xl mx-auto">Hubungi kami langsung via WhatsApp dan dapatkan konsultasi gratis!</p>
        <a href="https://wa.me/12345" class="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-[#25D366]/30 hover:shadow-2xl hover:scale-105 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Chat Kami Sekarang
        </a>
      </div>
    </section>

  </div>
</template>