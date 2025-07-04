// Utilities
import { defineStore } from 'pinia'
import moment from 'moment';

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

export const usePlanStore = defineStore('plan', {
  state: ()=>({
    userId: "",
    user: {
      telegramUsername: "",
      telegramId:""
    },
    expiresAt: ""
  }),
  getters:{
    daysLeft:(state)=>(moment(Date.parse(state.expiresAt)).diff(Date.now()))
  }
})

