import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    categoryName: "All Users",
    allUsers: [],
    maleUsers: [],
    femaleUsers: [],
    nextPage: 1,
    previousPage: 0,
    seed: "userBase",
  },
  getters: {
    categoryName: (state) => state.categoryName,
    allUsers: (state) => state.allUsers,
    maleUsers: (state) => state.maleUsers,
    femaleUsers: (state) => state.femaleUsers,
    nextPage: (state) => state.nextPage,
    previousPage: (state) => state.previousPage,
  },
  mutations: {
    SET_CATEGORY_NAME(state, payload) {
      state.categoryName = payload;
    },
    SET_ALL_USERS(state, allUsers) {
      state.allUsers = allUsers;
    },
    SET_MALE_USERS(state, maleUsers) {
      state.maleUsers = maleUsers;
    },
    SET_FEMALE_USERS(state, femaleUsers) {
      state.femaleUsers = femaleUsers;
    },
    UPDATE_NEXT_PAGE(state, next) {
      state.nextPage += next;
    },
    UPDATE_PREVIOUS_PAGE(state, previous) {
      state.previousPage += previous;
    },
  },
  actions: {
    getAllUsers({ commit, state }, page = 1) {
      axios
        .get(
          "?page=" +
            page +
            "&results=3&seed=" +
            state.seed +
            "&inc=id,gender,name,email,phone,picture,location"
        )
        .then((data) => {
          commit("SET_ALL_USERS", data?.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
});
