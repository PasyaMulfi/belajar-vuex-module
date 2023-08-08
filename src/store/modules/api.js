import axios from "axios";

const api = {
    namespaced: true,
    state: {
        apiData: [],
    },
    getters: {
        getApi: (state) => state.apiData,
    },
    actions: {
        async fetchApi({ commit }) {
            try {
                const data = await axios.get(
                    "https://booking.kai.id/api/stations2"
                );
                commit("SET_API", data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_API(state, api) {
            state.apiData = api;
        },
    },
};

export default api;