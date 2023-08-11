import axios from "axios";

const produk = {
    namespaced: true,
    state: {
        produkData: [],
    },

    getters: {
        getProduk: (state) => state.produkData,
        //   get single product
        getProdukById: (state) => (produkId) => {
            console.log("Fetching single produk by ID:", produkId);
            console.log("ProdukData:", state.produkData);
            const produk = state.produkData.find((p) => p.id == produkId);
            console.log("Produk:", produk);
            return produk;
        },
        getProdukByCategory: (state) => (produkCategory) => {
            const produk = state.produkData.filter(
          (p) => p.category == produkCategory
            );
            console.log(produkCategory)
            return produk
        },
    },
    actions: {
        async fetchProduk({ commit }) {
            try {
                const data = await axios.get("https://fakestoreapi.com/products/");
                commit("SET_PRODUK", data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },

        // get single product
        async fetchFilterProduk({ commit }, produkCategory) {
            try {
                const response = await axios.get(
                    `https://fakestoreapi.com/products/category/${produkCategory}`
                );
                commit("SET_FILTER_PRODUK", response.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_PRODUK(state, produk) {
            state.produkData = produk;
        },
        SET_SINGLE_PRODUK(state, produk) {
            state.singleProduk = produk;
        },
        SET_FILTER_PRODUK(state, produk) {
            state.filterProduk = produk;
        }
    },
};

export default produk;