<template>
  <div class="md:flex md:flex-row md:justify-between text-center">
    <div class="flex flex-row justify-center">
      <div class="bg-gradient-to-r from-green-200 to-yellow-500 w-10 h-10 rounded-lg"></div>
      <h1 class="text-3xl text-grey-600 ml-2">
        ShalihaStore
      </h1>
    </div>
    <div class="mt-2 items-center">
      <a href="#" class="text-grey-600 hover:text-purple-400 p-4">Home</a>
      <a href="#" class="text-grey-600 hover:text-purple-400 p-4">Shop</a>
      <a href="#" class="text-grey-600 hover:text-purple-400 p-4">Blog</a>
      <a href="#" class="text-grey-600 hover:text-purple-400 p-4">Contact</a>
      <a href="#" class="bg-purple-600 text-gray-50 hover:bg-purple-700 p-3 px-3 sm:px-5 rounded-full" @click="toggleCart">
        <span i-carbon-shopping-cart class="align-middle h-5 w-6 inline-block text-grey-300" />
        Cart (0)
      </a>
    </div>
  </div>
</template>

<script setup>
import { useSysStore } from '~/stores/sys'
const sysStore = useSysStore()

const toggleCart = () => {
  sysStore.toggleCartOpen()
}
</script>
