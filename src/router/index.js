import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [{
            path: "/",
            name: "home",
            meta: {
                layout: 'default'
            },
            component: () =>
                import ("../views/HomeView.vue"),
        },
        {
            path: "/lien-he",
            name: "Contact",
            component: () =>
                import ("../views/AboutView.vue"),
        },
        {
            path: "/phong-tro/:motelName",
            name: "MotelDetail",
            component: () =>
                import ("../views/MotelDetailView.vue"),
        },
        {
            path: "/bai-dang",
            name: "MotelSearch",
            component: () =>
                import ("../views/SearchMotelView.vue"),
        },
        {
            path: "/ho-so",
            name: "Profile",
            component: () =>
                import ("../views/Seller/ProfileView.vue"),
        },
        {
            path: "/dang-tin",
            name: "CreatePost",
            component: () =>
                import ("../views/Seller/CreatePostView.vue"),
        },
        {
            path: "/draft",
            name: "Draft",
            component: () =>
                import ("../views/DraftView.vue"),
        },
        {
            path: "*",
            name: "Remain",
            meta: {
                layout: 'error'
            },
            component: () =>
                import ("../views/PageNotFoundView.vue"),
        },
    ],
})