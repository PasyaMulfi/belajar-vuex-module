import { createStore } from "vuex";
import donatur from "./modules/donatur";
import client from "./modules/client";
import transaksi from "./modules/transaksi";
import users from "./modules/user";
import api from "./modules/api"

const store = createStore({
    state: {
        isLoading: false,
    },
    modules: {
        donatur,
        client,
        transaksi,
        users,
        api
    },
});

export default store;