<template>
  <div :class="[sysStore.cartOpen ? 'translate-x-full ease-in' : 'translate-x-0 ease-out hidden','fixed right-0 top-0 max-w-xs w-2/5 full h-full px-6 py-4 transition duration-300 transform overflow-y-auto bg-white border-l-2 border-gray-300']">
    <div class="flex items-center justify-between">
      <h3 class="text-2xl font-medium text-gray-700">
        <span i-carbon-shopping-cart class="align-middle inline-block text-grey-300" /> Keranjang
      </h3>
      <a href="#" class="text-gray-600 focus:outline-none" @click="toggleCart">
        <div i-carbon-close class="h-6 w-6" />
      </a>
    </div>
    <hr class="my-3 text-grey-300" />
    <CartItemEmpty />
    <hr class="my-3 text-grey-300" />
    <div class="text-right">
      <span class="text-gray-600 text-xl">Total: 1,000,000</span>
    </div>
    <div class="mt-8">
      <form class="flex text-[2.23rem] items-center justify-center">
        <input class="form-input w-48 border-dark-50" type="text" placeholder="Kode promo">
        <button class="ml-3 flex items-center px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
          <span>Apply</span>
        </button>
      </form>
    </div>
    <a href="#" class="flex items-center justify-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
      <span>Checkout</span>
      <span i-carbon-arrow-right />
    </a>
  </div>
</template>

<script setup>
import { useSysStore } from '~/stores/sys'
const sysStore = useSysStore()

const toggleCart = () => {
  sysStore.toggleCartOpen()
}
</script>
