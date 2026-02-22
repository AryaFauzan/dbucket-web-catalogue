<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToCatalog = () => {
  router.push('/catalog')
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const goToAbout = () => {
  router.push('/about')
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="animate-fade">
    <section class="relative py-20 lg:py-32 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        <div class="flex-1 space-y-8 text-center md:text-left">
          <div class="inline-block px-4 py-2 bg-rich-red/10 text-rich-red rounded-full text-[10px] font-black tracking-[0.2em] uppercase shadow-sm border border-rich-red/20">
            Premium Artisanal Florist
          </div>
          <h1 class="text-5xl md:text-7xl font-serif font-bold leading-tight text-dark-red">
            Sempurnakan Momen dengan <span class="italic text-rich-red underline decoration-maroon/20">Buket</span> Terbaik
          </h1>
          <p class="text-lg text-dark-red/70 max-w-lg leading-relaxed font-light italic mx-auto md:mx-0">
            "Sentuhan klasik dalam setiap rangkaian bunga segar pilihan untuk merayakan kebahagiaan Anda."
          </p>
          <div class="flex flex-wrap gap-4 justify-center md:justify-start">
            <button @click="goToCatalog" class="bg-rich-red text-cream px-10 py-5 rounded-2xl font-bold shadow-xl shadow-rich-red/30 hover:bg-dark-red transition-all flex items-center gap-2 group">
              Lihat Koleksi
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
            <button @click="goToAbout" class="bg-white/50 text-dark-red px-10 py-5 rounded-2xl font-bold border border-maroon/20 hover:bg-cream transition-all shadow-sm">
              Cerita Kami
            </button>
          </div>
        </div>
        <div class="flex-1 relative">
          <div class="absolute -bottom-10 -right-10 w-64 h-64 bg-rich-red/20 rounded-full blur-3xl opacity-40 -z-10"></div>
          <img src="https://images.unsplash.com/photo-1561181286-d39736932e1a?auto=format&fit=crop&q=80&w=800" class="rounded-[3rem] shadow-2xl w-full object-cover aspect-[4/5] border-[12px] border-white shadow-rich-red/5" alt="Koleksi Unggulan">
          <div class="absolute -top-6 -left-6 bg-rich-red text-cream p-6 rounded-full font-serif font-bold animate-bounce shadow-xl border-4 border-cream">
            New
          </div>
        </div>
      </div>
    </section>

    <section class="bg-maroon text-cream py-12 border-y border-rich-red/50">
      <div class="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div class="border-r border-cream/10 last:border-0">
          <p class="text-3xl font-serif font-bold text-cream">2,500+</p>
          <p class="text-[10px] uppercase font-black text-cream/50 tracking-widest">Buket Terjual</p>
        </div>
        <div class="border-r border-cream/10 last:border-0">
          <p class="text-3xl font-serif font-bold text-cream">4.9/5</p>
          <p class="text-[10px] uppercase font-black text-cream/50 tracking-widest">Rating Pelanggan</p>
        </div>
        <div class="border-r border-cream/10 last:border-0">
          <p class="text-3xl font-serif font-bold text-cream">15+</p>
          <p class="text-[10px] uppercase font-black text-cream/50 tracking-widest">Florist Ahli</p>
        </div>
        <div class="last:border-0">
          <p class="text-3xl font-serif font-bold text-cream">100%</p>
          <p class="text-[10px] uppercase font-black text-cream/50 tracking-widest">Garansi Segar</p>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 py-24">
      <div class="text-center mb-16 space-y-2">
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-dark-red tracking-tight">Elegansi dalam Setiap Kelopak</h2>
        <div class="w-16 h-1 bg-rich-red mx-auto"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white rounded-[2.5rem] p-10 flex flex-col items-center text-center space-y-4 shadow-sm border border-maroon/10 hover:border-rich-red/50 transition-all hover:scale-105">
          <div class="w-14 h-14 bg-cream rounded-2xl flex items-center justify-center text-rich-red shadow-md border border-rich-red/10">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
          </div>
          <h3 class="text-xl font-serif font-bold text-dark-red">Kualitas Premium</h3>
          <p class="text-dark-red/60 text-sm leading-relaxed">Hanya menggunakan bunga segar pilihan dengan kualitas terbaik untuk ketahanan yang lama.</p>
        </div>
        <div class="bg-rich-red/10 rounded-[2.5rem] p-10 flex flex-col items-center text-center space-y-4 shadow-sm border border-rich-red/20 hover:scale-105 transition-transform hover:border-rich-red/50">
          <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-dark-red shadow-sm border border-maroon/10">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/><path d="M18 9H13V4L18 9Z"/><path d="m10 10 5 5"/><path d="m15 10-5 5"/></svg>
          </div>
          <h3 class="text-xl font-serif font-bold text-dark-red">Desain Personal</h3>
          <p class="text-dark-red/60 text-sm leading-relaxed">Setiap rangkaian dirancang khusus untuk mewakili karakter dan perasaan pemesan.</p>
        </div>
        <div class="bg-white rounded-[2.5rem] p-10 flex flex-col items-center text-center space-y-4 shadow-sm border border-maroon/10 hover:scale-105 transition-transform hover:border-rich-red/50">
          <div class="w-14 h-14 bg-cream rounded-2xl flex items-center justify-center text-rich-red shadow-md border border-rich-red/10">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9"/><path d="m14 15 3 3 5-5"/></svg>
          </div>
          <h3 class="text-xl font-serif font-bold text-dark-red">Pengiriman Aman</h3>
          <p class="text-dark-red/60 text-sm leading-relaxed">Kurir khusus yang berpengalaman memastikan buket sampai dalam kondisi sempurna.</p>
        </div>
      </div>
    </section>

    <section class="bg-dark-red py-24 text-cream border-y border-rich-red/50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-serif font-bold mb-4 tracking-wider uppercase">Cara Memesan</h2>
          <p class="text-cream/60">Langkah mudah untuk mendapatkan keindahan di depan pintu Anda.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
          <div class="space-y-4">
            <div class="w-16 h-16 bg-cream text-rich-red rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">1</div>
            <h4 class="font-bold">Pilih Buket</h4>
            <p class="text-cream/70 text-sm font-light">Cari desain favoritmu di katalog eksklusif kami.</p>
          </div>
          <div class="space-y-4">
            <div class="w-16 h-16 bg-rich-red/50 text-cream rounded-full flex items-center justify-center text-2xl font-bold mx-auto border border-rich-red">2</div>
            <h4 class="font-bold">Sesuaikan</h4>
            <p class="text-cream/70 text-sm font-light">Tambahkan catatan khusus atau detail bunga.</p>
          </div>
          <div class="space-y-4">
            <div class="w-16 h-16 bg-maroon text-cream rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-md">3</div>
            <h4 class="font-bold">Pembayaran</h4>
            <p class="text-cream/70 text-sm font-light">Konfirmasi instan melalui layanan WhatsApp kami.</p>
          </div>
          <div class="space-y-4">
            <div class="w-16 h-16 bg-cream text-dark-red rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-xl">4</div>
            <h4 class="font-bold">Pengiriman</h4>
            <p class="text-cream/70 text-sm font-light">Duduk manis, keindahan segera hadir di lokasi!</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-cream/50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div class="max-w-xl">
            <div class="inline-block mb-4 px-3 py-1 bg-rich-red text-cream rounded-lg text-xs font-bold tracking-widest uppercase shadow-sm">The Journal</div>
            <h2 class="text-4xl md:text-6xl font-serif font-bold text-dark-red leading-tight mb-6 tracking-tight">Journal Keindahan BloomBliss</h2>
            <p class="text-dark-red/60 italic leading-relaxed font-light">Eksplorasi estetika merangkai bunga dan cerita di balik setiap kelopak mawar kami.</p>
          </div>
          <button @click="goToCatalog" class="text-rich-red font-bold flex items-center gap-2 hover:gap-4 transition-all group pb-2 border-b-2 border-rich-red/20">
            Eksplorasi Katalog
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 group-hover:translate-x-2 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-[2.5rem] mb-8 shadow-sm border border-rich-red/10">
              <img src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=600" class="w-full aspect-[3/4] object-cover transition-transform duration-1000 group-hover:scale-110" alt="Journal Photo">
              <div class="absolute inset-0 bg-gradient-to-t from-dark-red/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                <span class="text-cream font-bold text-sm tracking-widest uppercase border-b border-cream">Baca Detail</span>
              </div>
            </div>
            <div class="space-y-3">
              <span class="text-[10px] font-black text-rich-red uppercase tracking-[0.2em]">Inspirasi • 2026</span>
              <h3 class="text-2xl font-serif font-bold text-dark-red group-hover:text-rich-red transition-colors">Harmoni Merah & Krem yang Klasik</h3>
              <p class="text-dark-red/60 text-sm leading-relaxed font-light">Mempelajari filosofi warna dalam rangkaian bunga untuk momen romantis yang mendalam.</p>
            </div>
          </div>
          
          <div class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-[2.5rem] mb-8 shadow-sm border border-rich-red/10">
              <img src="https://images.unsplash.com/photo-1561181286-d39736932e1a?auto=format&fit=crop&q=80&w=600" class="w-full aspect-[3/4] object-cover transition-transform duration-1000 group-hover:scale-110" alt="Journal Photo">
              <div class="absolute inset-0 bg-gradient-to-t from-dark-red/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                <span class="text-cream font-bold text-sm tracking-widest uppercase border-b border-cream">Baca Detail</span>
              </div>
            </div>
            <div class="space-y-3">
              <span class="text-[10px] font-black text-rich-red uppercase tracking-[0.2em]">Tips • 2026</span>
              <h3 class="text-2xl font-serif font-bold text-dark-red group-hover:text-rich-red transition-colors">Menjaga Buket Tetap Segar 7 Hari</h3>
              <p class="text-dark-red/60 text-sm leading-relaxed font-light">Panduan praktis merawat bunga potong dari maestro florist BloomBliss.</p>
            </div>
          </div>

          <div class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-[2.5rem] mb-8 shadow-sm border border-rich-red/10">
              <img src="https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&q=80&w=600" class="w-full aspect-[3/4] object-cover transition-transform duration-1000 group-hover:scale-110" alt="Journal Photo">
              <div class="absolute inset-0 bg-gradient-to-t from-dark-red/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                <span class="text-cream font-bold text-sm tracking-widest uppercase border-b border-cream">Baca Detail</span>
              </div>
            </div>
            <div class="space-y-3">
              <span class="text-[10px] font-black text-rich-red uppercase tracking-[0.2em]">Cerita • 2026</span>
              <h3 class="text-2xl font-serif font-bold text-dark-red group-hover:text-rich-red transition-colors">Filosofi Merangkai dari Hati</h3>
              <p class="text-dark-red/60 text-sm leading-relaxed font-light">Mengenal lebih dekat tim maestro yang merangkai setiap pesanan dengan penuh dedikasi.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>