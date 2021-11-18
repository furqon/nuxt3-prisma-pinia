import { defineStore } from 'pinia'

export const useSysStore = defineStore({
  id: 'sys',
  state() {
    return {
      cartOpen: false,
    }
  },
  actions: {
    toggleCartOpen() {
      this.cartOpen = !this.cartOpen
    },
  },
})
