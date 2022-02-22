import Vue from 'vue'
import App from './App.vue'
import router from './router'
import createStore from './store/index'
import Antd from 'ant-design-vue';
import Vuelidate from 'vuelidate'
import 'ant-design-vue/dist/antd.css';
Vue.use(Vuelidate)
Vue.use(Antd);
Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App),
    router,
    createStore,
    template: '<App/>',
    components: { App }
})