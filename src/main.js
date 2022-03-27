import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import Vuelidate from 'vuelidate'
import VueModal from "../src/plugins/modal"
import VueNotifycation from "../src/plugins/notifycation"
import VueValidation from "../src/plugins/validation"
import VueImage from "../src/plugins/image"
import VueCookie from "../src/plugins/cookie"


import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


Vue.use(Vuelidate)
Vue.use(Antd);
Vue.use(VueModal);
Vue.use(VueNotifycation)
Vue.use(VueValidation)
Vue.use(VueCookie)
Vue.use(VueImage)

Vue.config.productionTip = false

library.add(fas, far)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
    el: '#app',
    render: h => h(App),
    store,
    router,
    template: '<App/>',
    components: { App }
})