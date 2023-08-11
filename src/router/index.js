import { createWebHistory, createRouter} from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/user/index.vue"
import UserCreate from "../views/user/Create.vue"
import Api from "../views/Api.vue"
import Produk from "../views/Produk.vue"
import SingleProduk from "../views/SingleProduk.vue"
import Category from "../views/Category.vue";
import FilterPageCategory from "../views/FilterPageCategory.vue"
import Login from "../views/Login.vue"
import store from "../store";


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/users",
        name: "users",
        component: User,
    },
    {
        path: "/users/create",
        name: "UserCreate",
        component: UserCreate,
        meta: { requiresLogin: false},
    },
    {
        path: "/api",
        name: "api",
        component: Api,
    },
    {
        path: "/produk",
        name: "produk",
        component: Produk,
    },
    {
        path: "/produk/:id",
        name: "SingleProduk",
        component: SingleProduk,
    },  
    {
        path: "/categories",
        name: "catgories",
        component: Category,
    },
    {
        path: "/category/:category",
        name: "FilterCategory",
        component: FilterPageCategory,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
        meta: { requiresGuest: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresGuest && store.getters["auth/isAuthenticated"]) {
        next("/");
    } else {
        next();
    }
});


router.beforeEach((to, from, next) => {
    if (to.meta.requiresLogin && store.getters["auth/isAuthenticated"]) {
        next("/login");
    } else {
        next();
    }
});

export default router;  