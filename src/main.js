import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Paginate from 'vuejs-paginate'
import VueMeta from 'vue-meta'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import tooltip from '@/directives/tooltip.directive'
import dateFilter from '@/filters/date.filter'
import currency from '@/filters/currency.filter'
import localizeFilter from '@/filters/localize.filter'
import messagePlugin from '@/utils/message.plugin'
import titlePlugin from '@/utils/title.plugin'
import Loader from '@/components/app/Loader'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(messagePlugin)
Vue.use(titlePlugin)
Vue.use(Vuelidate)
Vue.use(VueMeta, {refreshOnceOnNavigation: true})
Vue.directive('tooltip',tooltip)
Vue.filter('date',dateFilter)
Vue.filter('currency',currency)
Vue.filter('localize',localizeFilter)
Vue.component('Loader',Loader)
Vue.component('Paginate', Paginate)

firebase.initializeApp(
  {
    apiKey: "Своё значение",
    authDomain: "Своё значение",
    databaseURL: "Своё значение",
    projectId: "Своё значение",
    storageBucket: "Своё значение",
    messagingSenderId: "Своё значение",
    appId: "Своё значение",
    measurementId: "Своё значение"
  }
)

let app

firebase.auth().onAuthStateChanged(()=>{
  if(!app){
  app = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}
})





