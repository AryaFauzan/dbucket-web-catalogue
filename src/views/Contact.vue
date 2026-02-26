<script setup>
import whatsappNumber from '../data/whatsappNumber.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const goToCatalog = () => {
  router.push('/catalog')
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="animate-fade">

    <!-- ===== HEADER ===== -->
    <section class="bg-cream py-20 text-center">
      <div class="max-w-3xl mx-auto px-4 space-y-6">
        <div class="inline-flex items-center gap-2 text-dark-red/50 text-xs font-black tracking-[0.2em] uppercase">
          <span>✦</span> Hubungi Kami
        </div>
        <h1 class="text-4xl md:text-6xl font-serif font-bold italic text-dark-red">Kontak & Pemesanan</h1>
        <p class="text-dark-red/50 text-base max-w-lg mx-auto leading-relaxed">
          Pemesanan mudah dan cepat via WhatsApp — tim kami siap melayanimu setiap hari!
        </p>
        <a
          :href="`https://wa.me/${whatsappNumber}`"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-4 rounded-full font-bold text-base shadow-xl shadow-[#25D366]/30 hover:scale-105 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Chat Kami di WhatsApp
        </a>
      </div>
    </section>

    <!-- ===== ORDER TYPES ===== -->
    <section class="bg-maroon py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 space-y-4">
          <div class="inline-flex items-center gap-2 text-cream/60 text-xs font-black tracking-[0.2em] uppercase">
            <span>✦</span> Cara Memesan
          </div>
          <h2 class="text-3xl md:text-5xl font-serif font-bold italic text-dark-red">Pilih Jenis Pesananmu</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Ready Stock -->
          <div class="bg-dark-red rounded-2xl p-8 space-y-4 flex flex-col border border-white/5">
            <span class="text-3xl">🌸</span>
            <h3 class="text-lg font-serif font-bold text-maroon italic">Pesan Buket Ready Stock</h3>
            <p class="text-maroon/40 text-sm leading-relaxed flex-1">
              Pilih dari koleksi buket kami yang sudah tersedia dan langsung pesan via WhatsApp.
            </p>
            <button
              @click="goToCatalog"
              class="w-full bg-cream text-white py-3 rounded-full font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              Lihat Koleksi & Pesan
            </button>
          </div>

          <!-- Custom -->
          <div class="bg-dark-red rounded-2xl p-8 space-y-4 flex flex-col border border-white/5">
            <span class="text-3xl">✨</span>
            <h3 class="text-lg font-serif font-bold text-maroon italic">Pesan Buket Custom</h3>
            <p class="text-maroon/40 text-sm leading-relaxed flex-1">
              Buat buket sesuai keinginanmu — pilih jenis bunga, warna, ukuran, dan tambahkan pesan ucapan.
            </p>
            <a
              :href="`https://wa.me/${whatsappNumber}?text=Halo%20DBucket,%20saya%20ingin%20pesan%20buket%20custom`"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full bg-cream text-white py-3 rounded-full font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              Pesan Buket Custom
            </a>
          </div>

          <!-- Dekorasi -->
          <div class="bg-dark-red rounded-2xl p-8 space-y-4 flex flex-col border border-white/5">
            <span class="text-3xl">💍</span>
            <h3 class="text-lg font-serif font-bold text-maroon italic">Dekorasi Acara / Wedding</h3>
            <p class="text-maroon/40 text-sm leading-relaxed flex-1">
              Untuk kebutuhan dekorasi pernikahan, graduation, ulang tahun, atau event khusus lainnya.
            </p>
            <a
              :href="`https://wa.me/${whatsappNumber}?text=Halo%20DBucket,%20saya%20ingin%20konsultasi%20dekorasi`"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full bg-cream text-white py-3 rounded-full font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              Konsultasi Dekorasi
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== HOW TO ORDER STEPS ===== -->
    <section class="bg-maroon py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 space-y-4">
          <h2 class="text-3xl md:text-4xl font-serif font-bold italic text-dark-red">Cara Pemesanan</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Step 1 -->
          <div class="bg-white rounded-2xl p-8 text-center space-y-4">
            <div class="w-14 h-14 bg-cream/15 rounded-full flex items-center justify-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-cream" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <p class="text-cream text-xs font-bold tracking-widest uppercase">Step 01</p>
            <h4 class="font-serif font-bold text-dark-red">Chat WhatsApp</h4>
            <p class="text-dark-red/40 text-sm leading-relaxed">Hubungi kami via WhatsApp dan pilih jenis pesanan yang kamu inginkan.</p>
          </div>

          <!-- Step 2 -->
          <div class="bg-white rounded-2xl p-8 text-center space-y-4">
            <div class="w-14 h-14 bg-cream/15 rounded-full flex items-center justify-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-cream" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/><path d="m13 13 6 6"/></svg>
            </div>
            <p class="text-cream text-xs font-bold tracking-widest uppercase">Step 02</p>
            <h4 class="font-serif font-bold text-dark-red">Konfirmasi Detail</h4>
            <p class="text-dark-red/40 text-sm leading-relaxed">Tim kami akan membantu konfirmasi desain, tanggal, dan detail pengiriman.</p>
          </div>

          <!-- Step 3 -->
          <div class="bg-white rounded-2xl p-8 text-center space-y-4">
            <div class="w-14 h-14 bg-cream/15 rounded-full flex items-center justify-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-cream" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <p class="text-cream text-xs font-bold tracking-widest uppercase">Step 03</p>
            <h4 class="font-serif font-bold text-dark-red">Pembayaran</h4>
            <p class="text-dark-red/40 text-sm leading-relaxed">Lakukan pembayaran via transfer atau dompet digital yang tersedia.</p>
          </div>

          <!-- Step 4 -->
          <div class="bg-white rounded-2xl p-8 text-center space-y-4">
            <div class="w-14 h-14 bg-cream/15 rounded-full flex items-center justify-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-cream" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <p class="text-cream text-xs font-bold tracking-widest uppercase">Step 04</p>
            <h4 class="font-serif font-bold text-dark-red">Terima Buket</h4>
            <p class="text-dark-red/40 text-sm leading-relaxed">Buket segar dikirim tepat waktu atau siap diambil di toko kami.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CONTACT INFO + FAQ ===== -->
    <section class="bg-dark-red py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <!-- Contact Info -->
          <div class="space-y-10">
            <div class="space-y-4">
              <div class="inline-flex items-center gap-2 text-maroon/50 text-xs font-black tracking-[0.2em] uppercase">
                <span>✦</span> Info Kontak
              </div>
              <h2 class="text-3xl md:text-4xl font-serif font-bold text-maroon italic">Temukan Kami</h2>
            </div>

            <div class="space-y-6">
              <!-- Alamat -->
              <div class="flex items-start gap-5">
                <div class="w-12 h-12 bg-cream/15 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-cream" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <p class="text-cream text-xs font-bold tracking-widest uppercase mb-1">Alamat</p>
                  <p class="text-maroon text-sm">Jl. Melati No. 12, Kecamatan Bunga</p>
                  <p class="text-maroon text-sm">Kota Indah 12345</p>
                </div>
              </div>

              <!-- WhatsApp -->
              <div class="flex items-start gap-5">
                <div class="w-12 h-12 bg-cream/15 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-cream" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <p class="text-cream text-xs font-bold tracking-widest uppercase mb-1">WhatsApp</p>
                  <p class="text-maroon text-sm">+62 856-0647-5394</p>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start gap-5">
                <div class="w-12 h-12 bg-cream/15 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-cream" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <p class="text-cream text-xs font-bold tracking-widest uppercase mb-1">Email</p>
                  <p class="text-maroon text-sm">hello@dbucket.id</p>
                </div>
              </div>

              <!-- Jam Buka -->
              <div class="flex items-start gap-5">
                <div class="w-12 h-12 bg-cream/15 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-cream" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <p class="text-cream text-xs font-bold tracking-widest uppercase mb-1">Jam Buka</p>
                  <p class="text-maroon text-sm font-semibold">Senin - Sabtu: 08.00 – 20.00</p>
                  <p class="text-maroon/60 text-sm">Minggu: 09.00 – 17.00</p>
                </div>
              </div>
            </div>
          </div>

          <!-- FAQ -->
          <div class="space-y-10">
            <div class="space-y-4">
              <div class="inline-flex items-center gap-2 text-maroon/50 text-xs font-black tracking-[0.2em] uppercase">
                <span>✦</span> FAQ
              </div>
              <h2 class="text-3xl md:text-4xl font-serif font-bold text-maroon italic">Pertanyaan Umum</h2>
            </div>

            <div class="space-y-4">
              <div class="bg-white/5 rounded-2xl p-6 border border-white/5">
                <h4 class="font-serif font-bold text-maroon text-sm mb-2">Berapa lama proses pemesanan?</h4>
                <p class="text-maroon/40 text-sm leading-relaxed">Proses pemesanan sangat cepat! Cukup chat via WhatsApp, konfirmasi detail & pembayaran, dan buket siap dalam 1–2 jam untuk ready stock.</p>
              </div>

              <div class="bg-white/5 rounded-2xl p-6 border border-white/5">
                <h4 class="font-serif font-bold text-maroon text-sm mb-2">Apakah ada layanan pengiriman?</h4>
                <p class="text-maroon/40 text-sm leading-relaxed">Ya! Kami melayani pengiriman same day ke seluruh area kota. Biaya pengiriman tergantung jarak dan akan dikonfirmasi saat pemesanan.</p>
              </div>

              <div class="bg-white/5 rounded-2xl p-6 border border-white/5">
                <h4 class="font-serif font-bold text-maroon text-sm mb-2">Bisakah memesan buket custom?</h4>
                <p class="text-maroon/40 text-sm leading-relaxed">Tentu! Hubungi kami via WhatsApp dan ceritakan desain impianmu. Kami akan bantu mewujudkannya sesuai budget yang kamu miliki.</p>
              </div>

              <div class="bg-white/5 rounded-2xl p-6 border border-white/5">
                <h4 class="font-serif font-bold text-maroon text-sm mb-2">Metode pembayaran apa yang tersedia?</h4>
                <p class="text-maroon/40 text-sm leading-relaxed">Kami menerima transfer bank (BCA, BNI, BRI, Mandiri), dompet digital (GoPay, OVO, DANA, ShopeePay), dan COD untuk area tertentu.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>