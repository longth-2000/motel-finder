import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import UserModule from './components/user/user.module'
const modules = {
    user: UserModule,
}

const store = new Vuex.Store({
    modules
})

export default store