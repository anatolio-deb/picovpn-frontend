// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    id: null,
    username: null,
    photo_url: null,
    is_bot: false,
    first_name: null,
    last_name: null,
    language_code: null,
    is_premium: false,
  }),
})
