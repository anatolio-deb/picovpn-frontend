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
    user_id: "",
    user: {
      telegram_username: "",
      telegram_id:""
    },
    expires_at: ""
  }),
  getters:{
    daysLeft:(state)=>(moment(Date.parse(state.expires_at)).diff(Date.now()))
  }
})

