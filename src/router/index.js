import { createWebHistory, createRouter} from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue"
import Api from "../views/Api.vue"
import Produk from "../views/Produk.vue"
import SingleProduk from "../views/SingleProduk.vue"
import Category from "../views/Category.vue";


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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    User,
    Api,
    Produk,
    SingleProduk,
    Category
});

export default router;  