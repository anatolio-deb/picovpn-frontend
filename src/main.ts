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
app.use(TonConnectUIPlugin,{ manifestUrl: "https://raw.githubusercontent.com/nikiforidi/picovpn-app/3eded595fc8820db3f74df52048592a2c7edafb0/tonconnect-manifest.json" })

registerPlugins(app)

app.mount('#app')
