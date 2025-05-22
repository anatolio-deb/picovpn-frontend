/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import VueAxios from 'vue-axios'
import axios from 'axios'

// Composables
import { createApp } from 'vue'

// Styles
import 'unfonts.css'


const app = createApp(App)
app.use(VueAxios, axios)

registerPlugins(app)

app.mount('#app')
