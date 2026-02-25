<script setup>
import { ref } from 'vue'

const contactInfo = ref({
  phone: '+62 812-3456-7890',
  email: 'contact@dbucket.com',
  address: 'Jl. Bunga Raya No. 123, Surabaya',
})
</script>

<template>
  <div class="animate-fade">
    <h1 class="text-3xl font-bold mb-8">Kontak Kami</h1>
    <div class="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
      <p class="mb-4"><strong>Telepon:</strong> {{ contactInfo.phone }}</p>
      <p class="mb-4"><strong>Email:</strong> {{ contactInfo.email }}</p>
      <p><strong>Alamat:</strong> {{ contactInfo.address }}</p>
    </div>
  </div>
</template>

<style scoped></style>