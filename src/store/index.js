import { createStore } from "vuex";

export default createStore({
  state: {
    categoryName: "All Users",
  },
  getters: {
    categoryName: (state) => state.categoryName,
  },
  mutations: {
    SET_CATEGORY_NAME(state, payload) {
      state.categoryName = payload;
    },
  },
  actions: {},
  modules: {},
});
