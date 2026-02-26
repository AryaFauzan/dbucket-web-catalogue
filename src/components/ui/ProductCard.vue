<script setup>
const props = defineProps({
  product: { type: Object, required: true },
})

const formatPrice = (num) => 'Rp ' + num.toLocaleString('id-ID')
</script>

<template>
  <div class="group bg-maroon rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
    <!-- Placeholder Image -->
    <div class="relative overflow-hidden aspect-4/3 bg-dark-red/10 flex items-center justify-center">
      <img :src="product.image" :alt="product.name" class="w-full h-full object-cover">
    </div>

    <!-- Content -->
    <div class="p-5 flex flex-col flex-1 space-y-3">
      <!-- Name -->
      <h3 class="text-lg font-serif font-bold text-dark-red leading-snug">{{ product.name }}</h3>

      <!-- Description -->
      <p v-if="product.description" class="text-dark-red/50 text-sm leading-relaxed flex-1">{{ product.description }}</p>
      <div v-else class="flex-1"></div>

      <!-- Price + Order -->
      <div class="flex items-center justify-between pt-3 border-t border-dark-red/10">
        <div class="flex items-baseline gap-2">
          <span class="text-lg font-serif font-bold text-cream">{{ formatPrice(product.price) }}</span>
          <span v-if="product.originalPrice" class="text-dark-red/30 text-xs line-through">{{ formatPrice(product.originalPrice) }}</span>
        </div>
        <a
          href="https://wa.me/12345"
          class="flex items-center gap-1.5 bg-dark-red text-maroon px-4 py-2 rounded-full text-xs font-bold hover:opacity-90 transition-opacity"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          Pesan
        </a>
      </div>
    </div>
  </div>
</template>
