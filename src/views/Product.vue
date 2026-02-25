<script setup>
import { ref } from 'vue'

const products = ref([
  {
    id: 1,
    name: 'Buket Ulang Tahun',
    price: 150000,
    image: '/img/buket1.jpeg',
  },
  {
    id: 2,
    name: 'Buket Pernikahan',
    price: 250000,
    image: '/img/buket2.jpeg',
  },
])
</script>

<template>
  <div class="animate-fade">
    <h1 class="text-3xl font-bold mb-8">Produk Kami</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="product in products" :key="product.id" class="bg-white rounded-lg shadow-md overflow-hidden">
        <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover">
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">{{ product.name }}</h2>
          <p class="text-gray-600 mb-4">Rp {{ product.price.toLocaleString() }}</p>
          <button class="bg-dark-red text-white px-4 py-2 rounded hover:bg-dark-red/90 transition">Lihat Detail</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>