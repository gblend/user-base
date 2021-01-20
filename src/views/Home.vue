<template>
  <!-- Left Side Container Begin-->
  <div class="w-1/2 my-auto h-full md:pl-6 hidden md:block">
    <div
      class="flex h-full w-3/4 my-auto mx-auto justify-center items-center flex-col gap-4 text-cst_white-100"
    >
      <div class="mt-4 w-full">
        <h3 class="text-4xl font-extralight">
          <span class="opacity-80 tracking-tighter">Hello,</span>
          <transition name="animate_name" appear>
            <span class="text-2xl font-bold tracking-tighter ml-1"
              >Emerald</span
            >
          </transition>
        </h3>
        <p class="opacity-60 tracking-normal text-xs font-light mt-3">
          Welcome to your dashboard, kindly sort through the user base
        </p>
      </div>
      <!--      Search Input-->
      <div class="mt-4 flex items-center w-full">
        <form @submit.prevent class="flex">
          <button
            type="submit"
            class="bg-cst_primary-200 md:p-3 p-1 border border-cst_primary-200 rounded-l-2xl hover:bg-cst_primary-100 focus:outline-none transition ease-out duration-500 hover:opacity-70"
          >
            <i class="fas fa-search text-cst_white-100 p-1"></i>
          </button>
          <label for="search-user">
            <input
              type="text"
              name="search-user"
              id="search-user"
              v-model="searchKeyword"
              placeholder="Find a user"
              class="bg-cst_primary-200 text-sm hover:bg-cst_primary-100 rounded-r-2xl pl-1 md:pr-20 border border-cst_primary-200 placeholder-cst_white-100 focus:outline-none focus:bg-cst_primary-100 transition ease-out duration-500 w-full h-9 md:h-14"
            />
          </label>
        </form>
      </div>
      <div class="mt-8 w-full">
        <div class="md:w-3/4">
          <h4 class="opacity-70 tracking-tight">Show Users</h4>
          <div class="grid grid-cols-3 mt-4">
            <div class="flex flex-col w-3/4">
              <transition name="all_users" appear>
                <router-link
                  :to="{ name: 'AllUsers' }"
                  tag="li"
                  exact-active-class="transform scale-125"
                  class="bg-cst_pink rounded-lg md:rounded-2xl md:h-16 h-10 flex justify-center items-center hover:bg-cst_primary-300 transition ease-in duration-500 hover:shadow-md hover:opacity-70 md:mt-1 shadow-xl"
                >
                  <a><i class="fas fa-users md:text-3xl"></i></a>
                </router-link>
              </transition>
              <span
                class="text-xs tracking-tight font-light ml-1 md:ml-3 mt-1 md:mt-3.5 opacity-70"
                >All Users</span
              >
            </div>
            <div class="flex flex-col w-3/4">
              <transition name="male_users" appear>
                <router-link
                  :to="{ name: 'MaleUsers' }"
                  exact-active-class="transform scale-125"
                  tag="li"
                  class="md:m-1 bg-cst_teal-300 rounded-lg md:rounded-2xl h-10 md:h-16 flex justify-center items-center hover:bg-cst_primary-300 transition ease-in duration-500 hover:shadow-md hover:opacity-70 shadow-xl"
                >
                  <a><i class="fas fa-male md:text-3xl"></i></a>
                </router-link>
              </transition>
              <span
                class="text-xs tracking-tight font-light mt-2.5 opacity-70 ml-2"
                >Male Users</span
              >
            </div>

            <div class="flex flex-col w-3/4 md:-ml-3">
              <transition name="female_users" appear>
                <router-link
                  :to="{ name: 'FemaleUsers' }"
                  exact-active-class="transform scale-125"
                  tag="li"
                  class="md:m-1 bg-cst_indigo rounded-lg md:rounded-2xl h-10 md:h-16 flex justify-center items-center hover:bg-cst_primary-300 transition ease-in duration-500 hover:shadow-md hover:opacity-70 shadow-xl"
                >
                  <a><i class="fas fa-female md:text-3xl"></i></a>
                </router-link>
              </transition>
              <span
                class="text-xs tracking-tight font-light mt-2.5 opacity-70 ml-2"
                >Female Users</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Left Side Container End-->
  <!-- Right Side Container Begin -->
  <div
    class="w-full md:w-1/2 h-full bg-cst_white-400 border border-cst_primary-400 rounded-2xl shadow-2xl"
  >
    <div class="lg:w-11/12 px-1 mx-auto py-4">
      <!-- Content Begin  -->
      <div class="mx-auto justify-center items-center pt-2">
        <!--        Hamburger Toggle for Mobile-->
        <div
          @click="toggleSideMenu()"
          class="md:hidden text-cst_primary-100 cursor-pointer flex justify-end items-end p-2 noSelect"
        >
          <i class="fas fa-bars text-3xl"></i>
        </div>
        <!--        Mobile Menu Begin-->
        <div
          class="bg-gray-100 border-gray-400 border-b-2 py-2 hidden"
          id="left-side-bar"
        >
          <div class="w-full">
            <h3 class="text-4xl font-extralight">
              <span class="opacity-80 tracking-tighter">Hello,</span>
              <transition name="animate_name" appear>
                <span class="text-2xl font-bold tracking-tighter ml-1"
                  >Emerald</span
                >
              </transition>
            </h3>
            <p class="opacity-60 tracking-normal text-xs font-light mt-3">
              Welcome to your dashboard, kindly sort through the user base
            </p>
          </div>
          <div class="mt-5 w-full">
            <div class="md:w-3/4">
              <h4 class="opacity-70 tracking-tight">Show Users</h4>
              <div
                class="grid grid-cols-3 mt-4 flex justify-center items-center"
              >
                <div class="flex flex-col w-3/6 mx-auto -mt-5">
                  <transition name="all_users" appear>
                    <router-link
                      :to="{ name: 'AllUsers' }"
                      tag="li"
                      exact-active-class="transform scale-125"
                      class="bg-cst_pink rounded-lg md:rounded-2xl md:h-16 h-10 flex justify-center items-center hover:bg-cst_primary-300 transition ease-in duration-500 hover:shadow-md hover:opacity-70 md:mt-1 shadow-xl"
                    >
                      <a
                        ><i
                          class="fas fa-users md:text-3xl text-cst_white-100"
                        ></i
                      ></a>
                    </router-link>
                  </transition>
                  <span
                    class="text-xs tracking-tight font-light ml-1 md:ml-3 mt-1 md:mt-3.5 opacity-70"
                    >All Users</span
                  >
                </div>
                <div class="flex flex-col w-3/6 mx-auto">
                  <transition name="male_users" appear>
                    <router-link
                      :to="{ name: 'MaleUsers' }"
                      exact-active-class="transform scale-125"
                      tag="li"
                      class="md:m-1 bg-cst_teal-300 rounded-lg md:rounded-2xl h-10 md:h-16 flex justify-center items-center hover:bg-cst_primary-300 transition ease-in duration-500 hover:shadow-md hover:opacity-70 shadow-xl"
                    >
                      <a
                        ><i
                          class="fas fa-male md:text-3xl text-cst_white-100"
                        ></i
                      ></a>
                    </router-link>
                  </transition>
                  <span
                    class="text-xs tracking-tight font-light mt-2.5 opacity-70 ml-2"
                    >Male Users</span
                  >
                </div>

                <div class="flex flex-col w-3/6 md:-ml-3 mx-auto">
                  <transition name="female_users" appear>
                    <router-link
                      :to="{ name: 'FemaleUsers' }"
                      exact-active-class="transform scale-125"
                      tag="li"
                      class="md:m-1 bg-cst_indigo rounded-lg md:rounded-2xl h-10 md:h-16 flex justify-center items-center hover:bg-cst_primary-300 transition ease-in duration-500 hover:shadow-md hover:opacity-70 shadow-xl"
                    >
                      <a
                        ><i
                          class="fas fa-female md:text-3xl text-cst_white-100"
                        ></i
                      ></a>
                    </router-link>
                  </transition>
                  <span
                    class="text-xs tracking-tight font-light mt-2.5 opacity-70 ml-2"
                    >Female Users</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--        Mobile Menu End-->
        <notification />
        <transition name="slide_view" mode="out-in" appear>
          <div>
            <h3 class="font-bold leading-8 text-2xl tracking-tighter mt-8">
              {{ categoryName }}
            </h3>
            <!-- Filters Begin  -->
            <div class="mt-1">
              <small
                class="font-light text-opacity-80 tracking-tight text-cst_primary-400"
                >Filter by</small
              >
              <div class="flex justify-between items-center mt-1">
                <div class="items-center w-5/12">
                  <form @submit.prevent class="flex">
                    <button
                      type="submit"
                      class="bg-cst_primary-50 p-1.5 rounded-l-full hover:bg-cst_primary-100 focus:outline-none transition ease-out duration-500 hover:opacity-60"
                    >
                      <i
                        class="fas fa-search text-cst_gray-400 hover:opacity-40 text-sm p-1"
                      >
                      </i>
                    </button>
                    <label for="search-list"></label
                    ><input
                      v-model.trim="term"
                      type="text"
                      name="search-list"
                      id="search-list"
                      placeholder="Find in list"
                      class="tracking-tight bg-cst_primary-50 hover:opacity-60 text-sm hover:bg-cst_primary-100 rounded-r-full p-1.5 focus:outline-none focus:bg-cst_primary-100 transition ease-out duration-500 w-full placeholder-cst_black placeholder-opacity-50"
                    />
                  </form>
                </div>
                <div class="items-center pl-12">
                  <label for="select-country"></label
                  ><select
                    @change="fetchCountryUsers"
                    name="select-country"
                    id="select-country"
                    v-model="countryId"
                    class="bg-cst_primary-50 hover:opacity-60 text-sm hover:bg-cst_primary-100 rounded-full py-2 px-5 focus:outline-none focus:bg-cst_primary-100 transition ease-out duration-500 w-full opacity-60 appearance-none caret_down"
                    :disabled="isDisabledCountryOption"
                  >
                    <option
                      :value="country.id"
                      v-for="country in countries"
                      :key="country.id"
                    >
                      {{ country.name }}
                    </option>
                  </select>
                </div>
                <div class="flex items-center pl-2">
                  <div
                    class="relative inline-block w-10 align-middle select-none transition duration-500 ease-in transform hover:scale-105"
                  >
                    <input
                      type="checkbox"
                      name="toggleCountry"
                      id="toggleCountry"
                      class="toggle-checkbox absolute block w-4 h-4 rounded-full bg-cst_white-100 border-4 border-cst_white-100 ml-3.5 appearance-none cursor-pointer focus:outline-none"
                      v-model="toggleOffCountry"
                      @click="disableCountryOption"
                    />
                    <label
                      for="toggleCountry"
                      class="toggle-label block overflow-hidden h-4 w-8 rounded-full bg-cst_teal-300 cursor-pointer"
                    ></label>
                  </div>
                  <span
                    class="text-cst_black opacity-60 text-sm tracking-tighter"
                    >Show Country</span
                  >
                </div>
              </div>
            </div>
          </div>
        </transition>
        <!-- Filters End  -->
        <!-- Dynamic Content Begin  -->
        <router-view :allUsers="allUsers" />
        <!-- Dynamic Content End  -->
        <!-- Footer Section Begin  -->
        <transition name="slide_view" mode="out-in" appear>
          <div class="py-8 flex justify-between items-center w-full">
            <div>
              <button
                id="toggleDownloadingIcon"
                @click="downloadUserList"
                :disabled="footerButtonsDisabled"
                type="button"
                :class="{ 'opacity-40': footerButtonsOpacity }"
                class="focus:outline-none flex text-cst_white-400 rounded-full bg-cst_indigo px-4 py-2 hover:bg-cst_primary-300 transition ease-in duration-500 hover:shadow-md hover:opacity-70 transform hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ionicon fill-current"
                  fill="none"
                  height="24"
                  width="24"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M472.7 189.5c-13.26-8.43-29.83-14.56-48.08-17.93A16 16 0 01412 159.28c-7.86-34.51-24.6-64.13-49.15-86.58C334.15 46.45 296.21 32 256 32c-35.35 0-68 11.08-94.37 32a150.13 150.13 0 00-41.95 52.83A16.05 16.05 0 01108 125.8c-27.13 4.9-50.53 14.68-68.41 28.7C13.7 174.83 0 203.56 0 237.6 0 305 55.93 352 136 352h104V224.45c0-8.61 6.62-16 15.23-16.43A16 16 0 01272 224v128h124c72.64 0 116-34.24 116-91.6 0-30.05-13.59-54.57-39.3-70.9zM240 425.42l-36.7-36.64a16 16 0 00-22.6 22.65l64 63.89a16 16 0 0022.6 0l64-63.89a16 16 0 00-22.6-22.65L272 425.42V352h-32z"
                  />
                </svg>
                &nbsp; Download Results
              </button>
            </div>
            <div class="float-right">
              <button
                :disabled="footerButtonsDisabled || paginatePreviousDisabled"
                :class="[
                  footerButtonsOpacity ? 'opacity-40' : '',
                  paginatePreviousActive
                    ? activePaginateClass
                    : inActivePaginateClass,
                ]"
                @click="getPreviousUsers"
                class="rounded-lg py-0.5 px-3 hover:bg-cst_primary-300 transition ease-in duration-500 hover:shadow-md hover:opacity-70 focus:outline-none"
              >
                <i
                  class="fas fa-angle-left"
                  :class="[
                    paginatePreviousActive
                      ? 'text-cst_white-300'
                      : 'text-cst_black',
                  ]"
                ></i>
              </button>

              <button
                :disabled="footerButtonsDisabled"
                :class="[
                  footerButtonsOpacity ? 'opacity-40' : '',
                  paginateNextActive
                    ? activePaginateClass
                    : inActivePaginateClass,
                ]"
                @click="getNextUsers"
                class="rounded-lg py-0.5 px-3 hover:bg-cst_primary-300 transition ease-in duration-500 hover:shadow-md hover:opacity-70 focus:outline-none ml-0.5"
              >
                <i
                  class="fas fa-angle-right"
                  :class="[
                    paginateNextActive
                      ? 'text-cst_white-300'
                      : 'text-cst_black',
                  ]"
                ></i>
              </button>
            </div>
          </div>
        </transition>
        <!-- Footer Section End  -->
      </div>
    </div>
  </div>
  <!-- Right Side Container End -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import store from "../store";
import Notification from "../components/Notification";
export default {
  name: "Home",
  data() {
    return {
      toggleOffCountry: false,
      isDisabledCountryOption: 0,
      paginatePreviousDisabled: 0,
      paginateNextActive: true,
      paginatePreviousActive: false,
      activePaginateClass:
        "bg-cst_primary-400 py-0.5 px-3 border border-cst_gray-200",
      inActivePaginateClass: "bg-cst_gray-300",
      footerButtonsDisabled: 0,
      footerButtonsOpacity: false,
      term: "",
      searchKeyword: "",
      countryId: "de",
    };
  },
  components: {
    Notification,
  },
  computed: {
    ...mapGetters([
      "categoryName",
      "allUsers",
      "nextPage",
      "previousPage",
      "countries",
    ]),
  },
  methods: {
    ...mapActions([
      "getAllUsers",
      "filterUsers",
      "getFemaleUsers",
      "getMaleUsers",
      "getCountryUsers",
      "downloadUserList",
    ]),
    getNextUsers() {
      // If there are users record and nextPage count is 1, increment page count
      if (this.allUsers.length > 0 && parseInt(this.nextPage) === 1) {
        store.commit("UPDATE_NEXT_PAGE", 1);
      }
      this.paginatePreviousActive = false;
      this.paginatePreviousDisabled = 0;
      this.paginateNextActive = true;
      if (this.$route.name === "FemaleUsers") {
        this.getFemaleUsers(this.nextPage);
      } else if (this.$route.name === "MaleUsers") {
        this.getMaleUsers(this.nextPage);
      } else if (this.$route.name === "Country") {
        this.getCountryUsers(this.nextPage, this.countryId);
      } else {
        this.getAllUsers(this.nextPage);
      }
      store.commit("UPDATE_NEXT_PAGE", 1);
      store.commit("UPDATE_PREVIOUS_PAGE", 1);
    },
    fetchCountryUsers() {
      store.commit("SET_COUNTRY_ID", this.countryId);
      this.getCountryUsers();
      this.$router.replace({ name: "Country" });
    },
    getPreviousUsers() {
      if (this.previousPage < 1) return;
      this.paginatePreviousActive = true;
      this.paginateNextActive = false;
      if (this.$route.name === "FemaleUsers") {
        this.getFemaleUsers(this.previousPage, "previous");
      } else if (this.$route.name === "MaleUsers") {
        this.getMaleUsers(this.previousPage, "previous");
      } else if (this.$route.name === "Country") {
        this.getCountryUsers(this.previousPage, this.countryId);
      } else {
        this.getAllUsers(this.previousPage, "previous");
      }
      if (parseInt(this.nextPage) < 2) return;
      store.commit("UPDATE_NEXT_PAGE", -1);
      store.commit("UPDATE_PREVIOUS_PAGE", -1);
      if (parseInt(this.previousPage) === 0) {
        this.paginatePreviousDisabled = 1;
      } else {
        this.paginatePreviousDisabled = 0;
      }
    },
    findUser() {
      if (this.term.length < 1) return;
      store.commit("UPDATE_SEARCH_TERM", this.term);
      this.filterUsers(this.term);
      if (this.$route.name !== "SearchResults") {
        this.$router.replace({ name: "SearchResults" });
      }
    },
    disableCountryOption() {
      this.isDisabledCountryOption = !this.isDisabledCountryOption;
    },
    toggleSideMenu() {
      //Handle mobile menu toggle
      const side_menu = document.querySelector("#left-side-bar");
      if (side_menu.classList.contains("hidden")) {
        side_menu.classList.remove("hidden");
      } else {
        side_menu.classList.add("hidden");
      }
    },
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      if (to.name === "User" || to.name === "SearchResults") {
        this.footerButtonsDisabled = 1;
        this.footerButtonsOpacity = true;
      } else {
        this.footerButtonsDisabled = 0;
        this.footerButtonsOpacity = false;
      }
      if (to.name === "AllUsers") {
        this.getAllUsers();
      }
    },

    term() {
      this.findUser();
    },
    searchKeyword() {
      if (this.searchKeyword.length < 1) return;
      store.commit("UPDATE_SEARCH_TERM", this.searchKeyword);
      this.filterUsers(this.searchKeyword);
      if (this.$route.name !== "SearchResults") {
        this.$router.replace({ name: "SearchResults" });
      }
    },
  },
  activated() {
    if (parseInt(this.previousPage) === 0) {
      this.paginatePreviousDisabled = 1;
    }
  },
};
// service worker registration
import "../../public/sw-config";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw-config.js")
    .then(function () {})
    .catch(function (err) {
      console.log("This happened: ", err);
    });
}
</script>
<style scoped>
/* ----- Username Transition ------*/
.animate_name-enter-active {
  animation: slide-in 6s ease-out forwards;
}

.animate_name-leave-active {
  animation: slide-out 6s ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(5px);
    opacity: 0.5;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(25px);
    opacity: 0;
  }
}

/*  ------- Left SideBar Navigation Links Transition------*/
.all_users-enter-active {
  animation: slide-in 5s ease-out both;
}

.all_users-leave-active {
  animation: slide-out 5s ease-out forwards;
}

.male_users-enter-active {
  animation: slide-in 3s ease-out forwards;
}

.male_users-leave-active {
  animation: slide-out 3s ease-out both;
}

.female_users-enter-active {
  animation: slide-in 4s ease-out both;
}

.female_users-leave-active {
  animation: slide-out 4s ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translate3d(13px);
    opacity: 0;
  }
  to {
    transform: translateX(-18px);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(-13px);
    opacity: 1;
    transform-style: preserve-3d;
  }
  to {
    transform: translateY(18px);
    opacity: 0;
  }
}

/*Right-Side Footer and Header Transition*/
.slide_view-enter-active {
  animation: slide-in 5s ease-in-out forwards;
}

.slide_view-leave-active {
  animation: slide-out 5s ease-in-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}

.noSelect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
</style>
