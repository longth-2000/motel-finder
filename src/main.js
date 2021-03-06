import Vue from 'vue'
import App from './App.vue'
import {
    router
} from './router'
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
import VueLogged from "../src/plugins/logged"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)
import GAuth from 'vue-google-oauth2'

library.add(fas, far)

import { abilitiesPlugin } from '@casl/vue';
import defineAbilityFor from './services/permission/ability';
const ability = defineAbilityFor()
const gauthOption = {
    clientId: '944024016812-n8bp21cc45s7msj99n9v7o5k8v7aroui.apps.googleusercontent.com',
    scope: 'profile email',
    prompt: 'select_account'
}
Vue.use(GAuth, gauthOption)
Vue.use(abilitiesPlugin, ability);
Vue.use(Vuelidate)
Vue.use(Antd);
Vue.use(VueModal);
Vue.use(VueNotifycation)
Vue.use(VueValidation)
Vue.use(VueCookie)
Vue.use(VueImage)
Vue.use(VueLogged)

Vue.config.productionTip = false



Vue.component('font-awesome-icon', FontAwesomeIcon)
new Vue({
    el: '#app',
    render: h => h(App),
    store,
    router,
    template: '<App/>',
    components: { App }
})