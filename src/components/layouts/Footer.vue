<script setup>
import whatsappNumber from '../../data/whatsappNumber'
</script>

<template>
  <footer class="bg-dark-red pt-20 pb-10">
    <!-- Main Footer Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
        <!-- Brand Column -->
        <div class="space-y-6">
          <router-link to="/" class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="text-cream w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5a4.5 4.5 0 1 0-4.5 4.5M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15"/><circle cx="12" cy="12" r="3"/></svg>
            <span class="text-2xl font-serif font-bold text-maroon">DBucket</span>
          </router-link>
          <p class="text-maroon/40 text-sm leading-relaxed">
            Toko buket bunga terpercaya sejak 2018. Kami merangkai setiap buket dengan cinta untuk momen berhargamu.
          </p>
          <!-- Social Icons -->
          <div class="flex gap-3">
            <a href="#" class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-maroon/60 hover:bg-cream hover:text-white transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-maroon/60 hover:bg-cream hover:text-white transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-maroon/60 hover:bg-cream hover:text-white transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>
            </a>
          </div>
        </div>

        <!-- Navigasi -->
        <div>
          <h4 class="font-serif font-bold text-lg text-maroon mb-6 italic">Navigasi</h4>
          <ul class="space-y-4">
            <li><router-link to="/" class="text-maroon/50 hover:text-cream text-sm transition-colors">Beranda</router-link></li>
            <li><router-link to="/catalog" class="text-maroon/50 hover:text-cream text-sm transition-colors">Produk</router-link></li>
            <li><router-link to="/about" class="text-maroon/50 hover:text-cream text-sm transition-colors">Tentang</router-link></li>
            <li><router-link to="/contact" class="text-maroon/50 hover:text-cream text-sm transition-colors">Kontak</router-link></li>
          </ul>
        </div>

        <!-- Produk -->
        <div>
          <h4 class="font-serif font-bold text-lg text-maroon mb-6 italic">Produk</h4>
          <ul class="space-y-4">
            <li><a :href="`https://wa.me/${whatsappNumber}`" target="_blank" rel="noopener noreferrer" class="text-maroon/50 hover:text-cream text-sm transition-colors">Buket Kustom</a></li>
          </ul>
        </div>

        <!-- Layanan -->
        <div>
          <h4 class="font-serif font-bold text-lg text-maroon mb-6 italic">Layanan</h4>
          <ul class="space-y-4">
            <li><span class="text-maroon/50 text-sm cursor-pointer hover:text-cream transition-colors">Pengiriman Same Day</span></li>
            <li><span class="text-maroon/50 text-sm cursor-pointer hover:text-cream transition-colors">Dekorasi Acara</span></li>
            <li><span class="text-maroon/50 text-sm cursor-pointer hover:text-cream transition-colors">Paket Wedding</span></li>
            <li><span class="text-maroon/50 text-sm cursor-pointer hover:text-cream transition-colors">Langganan Bunga</span></li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-white/10 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p class="text-maroon/30 text-sm">© 2026 DBucket. Dibuat dengan <span class="text-cream">❤️</span> untuk kamu.</p>
          <div class="flex gap-6 text-maroon/30 text-sm">
            <span class="hover:text-maroon cursor-pointer transition-colors">Kebijakan Privasi</span>
            <span class="hover:text-maroon cursor-pointer transition-colors">Syarat & Ketentuan</span>
            <span class="hover:text-maroon cursor-pointer transition-colors">FAQ</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>