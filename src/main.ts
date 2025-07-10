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

import { TonConnectUIPlugin } from '@townsquarelabs/ui-vue'


const app = createApp(App)
app.use(VueAxios, axios)
app.use(TonConnectUIPlugin,{ manifestUrl: "https://github.com/nikiforidi/picovpn-app/blob/3eded595fc8820db3f74df52048592a2c7edafb0/tonconnect-manifest.json" }).mount('#app')

registerPlugins(app)

app.mount('#app')
