import { createWebHistory, createRouter} from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue"
import Api from "../views/Api.vue"

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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    User,
    Api
});

export default router;