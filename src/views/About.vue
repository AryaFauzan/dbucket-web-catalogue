<script setup>
import whatsappNumber from '../data/whatsappNumber.js'
</script>

<template>
  <div class="animate-fade">

    <!-- ===== HEADER ===== -->
    <section class="bg-cream py-20 text-center">
      <div class="max-w-3xl mx-auto px-4 space-y-5">
        <div class="inline-flex items-center gap-2 text-dark-red/50 text-xs font-black tracking-[0.2em] uppercase">
          <span>✦</span> Cerita Kami
        </div>
        <h1 class="text-4xl md:text-6xl font-serif font-bold italic text-dark-red">Tentang DBucket</h1>
        <p class="text-dark-red/50 text-base max-w-lg mx-auto leading-relaxed">
          Toko buket bunga premium yang lahir dari kecintaan terhadap keindahan dan makna di balik setiap bunga.
        </p>
      </div>
    </section>

    <!-- ===== ABOUT SECTION ===== -->
    <section class="bg-dark-red py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row items-center gap-16">

          <!-- Image with badge -->
          <div class="relative flex-shrink-0">
            <!-- Decorative circle -->
            <div class="hidden lg:block absolute -top-8 -left-12 w-20 h-20 rounded-full border-2 border-maroon/20"></div>

            <div class="w-[300px] h-[400px] md:w-[380px] md:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&q=80&w=600"
                alt="DBucket Florist"
                class="w-full h-full object-cover"
              >
            </div>

            <!-- Badge -->
            <div class="absolute -bottom-5 right-0 lg:-right-6 bg-cream text-white px-6 py-3 rounded-2xl shadow-lg flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              <div>
                <p class="font-bold text-sm">Sejak 2018</p>
                <p class="text-white/70 text-xs">6 tahun melayani</p>
              </div>
            </div>
          </div>

          <!-- Text Content -->
          <div class="flex-1 space-y-8">
            <div class="inline-flex items-center gap-2 text-maroon/50 text-xs font-black tracking-[0.2em] uppercase">
              <span>✦</span> Tentang Kami
            </div>
            <h2 class="text-3xl md:text-5xl font-serif font-bold text-maroon leading-tight">
              Merangkai Keindahan,<br>
              <span class="italic text-cream">Menyampaikan Perasaan</span>
            </h2>
            <div class="space-y-4 text-maroon/50 leading-relaxed text-sm">
              <p>
                DBucket lahir dari kecintaan kami terhadap keindahan bunga. Sejak 2018, kami telah merangkai ribuan buket untuk momen-momen istimewa — ulang tahun, pernyataan cinta, wisuda, hingga pernikahan sakral.
              </p>
              <p>
                Kami percaya setiap bunga memiliki cerita, dan setiap buket yang kami ciptakan adalah ungkapan perasaan tulus dari hati pengirimnya.
              </p>
            </div>

            <!-- Feature Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-cream/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-cream" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5a4.5 4.5 0 1 0-4.5 4.5M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
                <div>
                  <h4 class="font-serif font-bold text-maroon italic text-sm">Bunga Segar Setiap Hari</h4>
                  <p class="text-maroon/40 text-xs mt-1">Dipilih langsung dari petani lokal terbaik setiap pagi.</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-cream/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-cream" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                </div>
                <div>
                  <h4 class="font-serif font-bold text-maroon italic text-sm">Pengiriman Same Day</h4>
                  <p class="text-maroon/40 text-xs mt-1">Layanan antar cepat ke seluruh area kota, hari yang sama.</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-cream/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-cream" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>
                </div>
                <div>
                  <h4 class="font-serif font-bold text-maroon italic text-sm">Desain Custom</h4>
                  <p class="text-maroon/40 text-xs mt-1">Wujudkan buket impianmu bersama florist profesional kami.</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-cream/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-cream" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                </div>
                <div>
                  <h4 class="font-serif font-bold text-maroon italic text-sm">Dikerjakan dengan Cinta</h4>
                  <p class="text-maroon/40 text-xs mt-1">Setiap buket dirangkai tangan dengan penuh perhatian.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== MILESTONE SECTION ===== -->
    <section class="bg-maroon py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 space-y-4">
          <div class="inline-flex items-center gap-2 text-dark-red/40 text-xs font-black tracking-[0.2em] uppercase">
            <span>✦</span> Perjalanan Kami
          </div>
          <h2 class="text-3xl md:text-5xl font-serif font-bold italic text-dark-red">Milestone DBucket</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- 2018 -->
          <div class="bg-dark-red rounded-2xl p-8 space-y-4 border border-white/5">
            <p class="text-3xl font-serif font-bold text-cream">2018</p>
            <h4 class="font-bold text-maroon">DBucket Berdiri</h4>
            <p class="text-maroon/40 text-sm leading-relaxed">Memulai perjalanan dari toko kecil di pojok kota dengan 3 florist berdedikasi.</p>
          </div>

          <!-- 2020 -->
          <div class="bg-cream rounded-2xl p-8 space-y-4">
            <p class="text-3xl font-serif font-bold text-dark-red">2020</p>
            <h4 class="font-bold text-white">Buka Online</h4>
            <p class="text-white/60 text-sm leading-relaxed">Melayani pemesanan via WhatsApp dan memperluas jangkauan pengiriman.</p>
          </div>

          <!-- 2022 -->
          <div class="bg-dark-red rounded-2xl p-8 space-y-4 border border-white/5">
            <p class="text-3xl font-serif font-bold text-cream">2022</p>
            <h4 class="font-bold text-maroon">1.000 Pelanggan</h4>
            <p class="text-maroon/40 text-sm leading-relaxed">Mencapai milestone 1.000 pelanggan setia di seluruh kota.</p>
          </div>

          <!-- 2024 -->
          <div class="bg-cream rounded-2xl p-8 space-y-4">
            <p class="text-3xl font-serif font-bold text-dark-red">2024</p>
            <h4 class="font-bold text-white">2.000+ Pelanggan</h4>
            <p class="text-white/60 text-sm leading-relaxed">Terus berkembang dengan lebih dari 500 desain buket dan layanan dekorasi acara.</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>