import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    categoryName: "All Users",
    allUsers: [],
    filteredUsers: [],
    maleUsers: [],
    femaleUsers: [],
    nextPage: 1,
    previousPage: 0,
    seed: "userBase",
    searchTerm: "",
    user: {},
    notification: false,
    countryId: "au",
    countries: [
      { id: "au", name: "Australia" },
      { id: "br", name: "Brazil" },
      { id: "ca", name: "Canada" },
      { id: "ch", name: "Switzerland" },
      { id: "de", name: "Germany" },
      { id: "dk", name: "Denmark" },
      { id: "es", name: "Spain" },
      { id: "fi", name: "Finland" },
      { id: "fr", name: "France" },
      { id: "gb", name: "United Kingdom" },
      { id: "ie", name: "Ireland" },
      { id: "ir", name: "Iran" },
      { id: "no", name: "Norway" },
      { id: "nl", name: "Netherlands" },
      { id: "nz", name: "New Zealand" },
      { id: "tr", name: "Turkey" },
      { id: "us", name: "United States" },
    ],
  },
  getters: {
    categoryName: (state) => state.categoryName,
    allUsers: (state) => state.allUsers,
    getUsersList: (state) => state.allUsers,
    filteredUsers: (state) => state.filteredUsers,
    user: (state) => state.user,
    maleUsers: (state) => state.maleUsers,
    femaleUsers: (state) => state.femaleUsers,
    nextPage: (state) => state.nextPage,
    previousPage: (state) => state.previousPage,
    countries: (state) => state.countries,
    countryId: (state) => state.countryId,
    searchTerm: (state) => state.searchTerm,
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
    SET_USER(state, userIndex) {
      state.user = state.allUsers.filter(function (entry, index) {
        return index === parseInt(userIndex);
      });
    },
    SET_FILTER_USERS(state, payload) {
      state.filteredUsers = payload;
    },
    SET_COUNTRY_ID(state, id) {
      state.countryId = id;
    },
    UPDATE_SEARCH_TERM(state, term) {
      state.searchTerm = term;
    },
    UPDATE_NOTIFICATION_STATUS(state, status) {
      state.notification = status;
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
            "&inc=id,gender,name,email,phone,cell,picture,location,dob,registered"
        )
        .then((data) => {
          commit("SET_ALL_USERS", data?.data.results);
        })
        .catch((err) => {
          if (err.response?.status === 503 || err.response?.status === 500) {
            commit("UPDATE_NOTIFICATION_STATUS", true);
          } else {
            return Promise.reject(err);
          }
        });
    },

    filterUsers({ commit, getters }, payload) {
      commit(
        "SET_FILTER_USERS",
        getters.getUsersList.filter((user) => {
          return (
            user.name["first"].toLowerCase().includes(payload.toLowerCase()) ||
            user.name["last"].toLowerCase().includes(payload.toLowerCase()) ||
            user.email.toLowerCase().includes(payload.toLowerCase()) ||
            user.location.city.toLowerCase().includes(payload.toLowerCase()) ||
            user.location.state.toLowerCase().includes(payload.toLowerCase()) ||
            user.location.country.toLowerCase().includes(payload.toLowerCase())
          );
        })
      );
    },

    getFemaleUsers({ commit }, page = 1) {
      axios
        .get(
          "?gender=female&results=3&page=" +
            page +
            "&inc=id,gender,name,email,phone,cell,picture,location,dob,registered"
        )
        .then((data) => {
          commit("SET_ALL_USERS", data?.data.results);
        })
        .catch((err) => {
          if (
            err.response?.status === 503 ||
            err.response?.status === 500 ||
            err.response?.status === 501
          ) {
            commit("UPDATE_NOTIFICATION_STATUS", true);
          }
        });
    },
    getMaleUsers({ commit }, page = 1) {
      axios
        .get(
          "?gender=male&results=3&page=" +
            page +
            "&inc=id,gender,name,email,phone,cell,picture,location,dob,registered"
        )
        .then((data) => {
          commit("SET_ALL_USERS", data?.data.results);
        })
        .catch((err) => {
          if (
            err.response?.status === 503 ||
            err.response?.status === 500 ||
            err.response?.status === 501
          ) {
            commit("UPDATE_NOTIFICATION_STATUS", true);
          }
        });
    },
    getCountryUsers({ commit, state }, page = 1) {
      axios
        .get(
          "?nat=" +
            state.countryId +
            "&results=3&page=" +
            page +
            "&inc=id,gender,name,email,phone,cell,picture,location,dob,registered"
        )
        .then((data) => {
          commit("SET_ALL_USERS", data?.data.results);
        })
        .catch((err) => {
          if (
            err.response?.status === 503 ||
            err.response?.status === 500 ||
            err.response?.status === 501
          ) {
            commit("UPDATE_NOTIFICATION_STATUS", true);
          }
        });
    },

    downloadUserList({ getters }) {
      let csvHeader =
        "First Name," +
        "Last Name," +
        "Address," +
        "Email," +
        "Phone," +
        "Mobile" +
        "\r\n";
      const usersObj = JSON.parse(JSON.stringify(getters.allUsers));

      let csvContent = usersObj.map((user) => {
        return (
          user.name["first"] +
          "," +
          user.name["last"] +
          "," +
          user.location?.street?.number +
          " " +
          user.location?.street?.name +
          " " +
          user.location?.city +
          " " +
          user.location?.state +
          "," +
          user.email +
          "," +
          user.phone +
          "," +
          user.cell
        );
      });
      let csvFile = csvHeader + csvContent.join("\n");
      let yyyy = new Date().getFullYear();
      let mm = new Date().getMonth() + 1;
      let dd = new Date().getDate();
      let date = yyyy + "-" + mm + "-" + dd;
      let fileName = "User_List_" + date + ".csv";
      let fileURL = window.URL.createObjectURL(new Blob([csvFile]));
      let fileLink = document.createElement("a");
      fileLink.href = fileURL;
      fileLink.setAttribute("download", fileName);
      document.body.appendChild(fileLink);
      fileLink.click();
    },
  },
  modules: {},
});
