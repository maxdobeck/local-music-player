import Vue from 'vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import App from './App'
import { getMusic } from './ChromeUbuntu.js'

Vue.use(iView)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

const songs = getMusic()
console.log(songs)

/* eslint-disable no-new */
new Vue({
  components: { App },
  template: '<App/>'
}).$mount('#app')
