import Vue from 'vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import App from './App'

Vue.use(iView)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

let chromeBookmarks = '/home/max/.config/google-chrome/Default/Bookmarks'
const fs = require('fs')
let musicFile

fs.readFile(chromeBookmarks, 'utf8', function (err, data) {
  if (err) throw err
  bookmarks = JSON.parse(data)
  console.log(bookmarks.roots.bookmark_bar.children[0].children)
})

/* eslint-disable no-new */
new Vue({
  components: { App },
  template: '<App/>'
}).$mount('#app')
