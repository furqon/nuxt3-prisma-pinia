<script setup>
import AppHero from '~~/components/AppHero.vue'
const { data } = await useAsyncData('count', () => $fetch('/api/product?top=4'))
</script>

<template>
  <div>
    <AppHero />
    <div class="flex flex-row justify-between my-20">
      <h2 class="text-3xl">
        Gamis
      </h2>
      <a href="#" class="text-xl flex flex-row">
        View All <span class="h-7 w-5 ml-1" i-carbon-arrow-right />
      </a>
    </div>
    <!-- grid -->
    <div class="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      <div v-for="p in data?.products" :key="p.id" class="shadow-lg rounded-lg">
        <a href="#">
          <img :src="p?.image" class="rounded-tl-lg rounded-tr-lg" />
        </a>
        <div class="p-5">
          <h3>{{ p?.name }}</h3>
          <div class="flex flex-row my-3">
            <div class="bg-black rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div class="bg-blue-800 rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div class="bg-white rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div class="bg-red-800 rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div class="bg-green-700 rounded-full h-5 w-5 shadow-md mr-2"></div>
          </div>

          <div class="flex flex-row my-3">
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">XL</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">XXL</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">L</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">M</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">S</a>
          </div>

          <div class="flex flex-col xl:flex-row space-x-1 items-end">
            <a class="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center" href="#">
              <span i-carbon-shopping-cart class="align-middle h-5 w-6 inline-block text-grey-300" />
            </a>
            <a class="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" href="#">
              View Details
              <span class="w-6 ml-1" i-carbon-arrow-right />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="rounded-lg shadow-lg my-20 flex flex-row">
      <div class="lg:w-3/5 w-full bg-gradient-to-r from-black to-purple-900 lg:from-black lg:via-purple-900 lg:to-transparent rounded-lg text-gray-100 p-12">
        <div class="lg:w-1/2">
          <h3 class="text-2xl font-extrabold mb-4">
            Subscribe to get our offers first
          </h3>
          <p class="mb-4 leading-relaxed">
            Want to hear from us when we have new offers? Sign up for our newsletter and we'll email you every time we have new sale offers.
          </p>
          <div>
            <input type="email" placeholder="Enter email address" class="bg-gray-600 text-gray-200 placeholder-gray-400 px-4 py-3 w-full rounded-lg focus:outline-none mb-4" />
            <button type="submit" class="bg-red-600 py-3 rounded-lg w-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div class="lg:w-2/5 w-full lg:flex lg:flex-row hidden">
        <img src="subscribe-banner.png" class="h-96" />
      </div>
    </div>

    <div class="text-center">
      <Logos mb-6 />
      <Suspense>
        <PageView />
        <template #fallback>
          <div op50 italic>
            <span animate-pulse>Loading...</span>
          </div>
        </template>
      </Suspense>
      <InputEntry />
    </div>
  </div>
</template>
