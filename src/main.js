import { createApp } from 'vue'
import VueCryptojs from 'vue-cryptojs'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(VueCryptojs)
  .mount('#app')