import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [{
            path: "/",
            name: "home",
            meta: {
                layout: 'defaults'
            },
            component: () =>
                import ("../views/HomeView.vue"),
        },
        {
            path: "/about",
            name: "about",
            component: () =>
                import ("../views/AboutView.vue"),
        },
        {
            path: "/film",
            name: "film",
            component: () =>
                import ("../views/Buyer/FilmView.vue"),
        },
        {
            path: "/film/:id",
            name: "anime",
            component: () =>
                import ("../views/Buyer/FilmDetail.vue"),
        },
    ],
})