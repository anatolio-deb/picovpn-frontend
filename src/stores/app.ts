// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    id: "",
    username: "",
    photo_url: "",
    is_bot: false,
    first_name: "",
    last_name: "",
    language_code: "",
    is_premium: false,
  }),
  getters:{
    initials: (state) => (state.first_name.charAt(0) + state.last_name.charAt(0)).toUpperCase(),
    fullName: (state) => `${state.first_name} ${state.last_name}`.trim()
  }
})

