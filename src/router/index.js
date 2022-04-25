import Vue from 'vue'
import Router from 'vue-router'
import VueJwtDecode from "vue-jwt-decode";
import cookie from "../helper/cookie"

Vue.use(Router)
export const router = new Router({
    mode: 'history',
    routes: [{
            path: "/",
            name: "Home",
            meta: {
                layout: 'default',
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
            path: "/bat-dong-san/:id",
            name: "MotelDetail",
            component: () =>
                import ("../views/MotelDetailView.vue"),

        },
        {
            path: "/tim-kiem",
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
            path: "/auth",
            name: "Auth",
            component: () =>
                import ("../views/AuthView.vue"),
        },
        {
            path: "/purchase",
            component: () =>
                import ("../views/PurchaseView.vue"),
        },
        {
            path: "/bai-dang-yeu-thich/:id",
            name: "FavouritePost",
            component: () =>
                import ("../views/FavouritePostView.vue"),
        },
        {
            path: "/admin/manage",
            name: "Admin",
            meta: {
                layout: 'error',
            },
            component: () =>
                import ("../views/AdminView.vue"),

        },
        {
            path: "/draft",
            name: "Draft",
            component: () =>
                import ("../components/chat/VueChat.vue"),
        },
        {
            path: "/thay-doi-mat-khau",
            name: "ResetPassword",
            component: () =>
                import ("../components/password/ResetPassword.vue"),
        },
        {
            path: "*",
            name: "Remain",
            meta: {
                layout: 'error',
            },
            component: () =>
                import ("../views/PageNotFoundView.vue"),
        },
    ],
})
router.beforeEach((to, from, next) => {
    const publicPages = ['Contact', 'Home', 'Auth', 'Admin', 'MotelSearch', 'ResetPassword', 'MotelDetail'];
    const authRequired = !publicPages.includes(to.name);
    const loggedIn = cookie.getCookie('accessToken');
    if (to.path === "/ho-so") {
        const LIMIT = 5
        const { id } = VueJwtDecode.decode(loggedIn);
        to.query.id = id;
        to.query.limit = LIMIT;
        next();
    }
    if (to.query.type === 'draft-post') {
        to.query.status = 'draft'
    }
    if (authRequired && !loggedIn) {
        next('/auth');
    } else {
        next();
    }
})