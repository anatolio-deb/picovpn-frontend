// Utilities
import { defineStore } from 'pinia'
import moment from 'moment';
import apiService, { type Daemon } from '@/api/axios';

export const useUserStore = defineStore('users', {
  state: () => ({
    userData:{
      id: "",
      username: "",
      photo_url: "",
      is_bot: false,
      first_name: "",
      last_name: "",
      language_code: "",
      is_premium: false,
    }
  }),
  getters:{
    initials: (state) => (state.userData.first_name.charAt(0) + state.userData.last_name.charAt(0)).toUpperCase(),
    fullName: (state) => `${state.userData.first_name} ${state.userData.last_name}`.trim()
  },
  actions:{
    registerUser(password1: string, password2: string){
      apiService.postUser({
        password: password1,
        password_confirmation: password2
    })
        .then((response) => {
            if (response.status === 200) {
              this.userData.id = response.data.telegramId
              this.userData.username = response.data.telegramUsername
            }
        })
        .catch((error) => {
            throw error;
        })
    },
    fetchUser(){
       apiService.getUser()
        .then((response) => {
          if (response.status === 200) {
            this.userData = response.data
          } else {
            throw new Error(response.data.message)
          }
        })
        .catch((error) => {
          throw error;
        });
    },
    passwordReset(password1: string, password2: string){
      apiService.passwordReset({
        password: password1,
        password_confirmation: password2
    })
        .then((response) => {
            if (response.status === 200) {
                this.userData = response.data
          } else {
            throw new Error(response.data.message)
          }
        })
        .catch((error) => {
            throw error
        })
    }
  }
})

export const usePlanStore = defineStore('plan', {
  state: ()=>({
    plan:{
      userId: "",
      user: {
        telegramUsername: "",
        telegramId:""
      },
      expiresAt: ""
      }
  }),
  getters:{
    daysLeft:(state)=>(moment(Date.parse(state.plan.expiresAt)).diff(Date.now(), 'days'))
  },
  actions:{
    fetchPlan(){
      apiService.getPlan()
        .then((response) => {
            if (response.status === 200) {
                this.plan = response.data
            } else {
                throw new Error(response.data.message);
            }
        })
        .catch((error) => {
            throw error;
        });
    }
  }
})

export const useDaemonStore = defineStore('daemons', {
  state:()=>({
    daemonsData: [] as Daemon[],
  }),
  actions:{
    fetchDaemons(){
     apiService.getDaemons()
        .then((response) => {
            if (response.status === 200) {
                this.daemonsData = response.data
            } else {
                throw new Error(response.data.message);
            }
        })
        .catch((error) => {
            throw error;
        });
    }
  }
})

