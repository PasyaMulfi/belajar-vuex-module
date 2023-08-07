import { createStore } from "vuex";
import donatur from "./modules/donatur";
import client from "./modules/client";
import transaksi from "./modules/transaksi";

const store = createStore({
    state: {
        isLoading: false,
    },
    modules: {
        donatur,
        client,
        transaksi,
    },
});

export default store;