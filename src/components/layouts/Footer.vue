<script setup>
// Footer biasanya statis, jadi kita tidak perlu banyak logic di sini.
// Navigasi menggunakan router-link sama seperti di Navbar.
</script>

<template>
  <footer class="bg-dark-red py-20 border-t border-rich-red/30 text-cream">
    <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-16 text-center md:text-left">
      <div class="space-y-6">
        <router-link to="/" class="flex items-center gap-2 justify-center md:justify-start">
          <div class="w-8 h-8 bg-rich-red rounded-full flex items-center justify-center text-cream">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
          </div>
          <span class="text-2xl font-serif font-bold text-cream tracking-tight">BloomBliss</span>
        </router-link>
        <p class="text-cream/50 text-xs leading-relaxed font-light">
          Seni merangkai bunga yang berfokus pada standar estetika tertinggi dan kebahagiaan abadi untuk setiap pelanggan berharga.
        </p>
      </div>
      
      <div>
        <h4 class="font-black text-[10px] uppercase tracking-[0.2em] text-cream/30 mb-8">Navigasi</h4>
        <ul class="space-y-4 text-cream font-bold text-sm">
          <li><router-link to="/" class="hover:text-rich-red transition-colors">Beranda</router-link></li>
          <li><router-link to="/catalog" class="hover:text-rich-red transition-colors">Koleksi Buket</router-link></li>
          <li><router-link to="/about" class="hover:text-rich-red transition-colors">Visi & Maestro</router-link></li>
        </ul>
      </div>
      
      <div>
        <h4 class="font-black text-[10px] uppercase tracking-[0.2em] text-cream/30 mb-8">Layanan</h4>
        <ul class="space-y-4 text-cream/60 text-sm">
          <li class="hover:text-rich-red transition-colors cursor-pointer">Bespoke Arrangement</li>
          <li class="hover:text-rich-red transition-colors cursor-pointer">Event Decoration</li>
          <li class="hover:text-rich-red transition-colors cursor-pointer">Corporate Floral</li>
        </ul>
      </div>
      
      <div>
        <h4 class="font-black text-[10px] uppercase tracking-[0.2em] text-cream/30 mb-8 tracking-widest text-rich-red">Ikuti Kami</h4>
        <div class="flex gap-4 justify-center md:justify-start">
          <a href="#" class="w-10 h-10 bg-rich-red/20 rounded-xl flex items-center justify-center text-cream hover:bg-rich-red transition-all cursor-pointer border border-rich-red/30">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a href="#" class="w-10 h-10 bg-rich-red/20 rounded-xl flex items-center justify-center text-cream hover:bg-rich-red transition-all cursor-pointer border border-rich-red/30">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
          </a>
        </div>
      </div>
    </div>
    
    <div class="max-w-7xl mx-auto px-4 mt-20 pt-10 border-t border-rich-red/20 text-center text-[10px] font-bold uppercase tracking-widest text-cream/20">
      © 2026 BloomBliss Premium Florist. Seluruh Hak Cipta Dilindungi.
    </div>
  </footer>
</template>