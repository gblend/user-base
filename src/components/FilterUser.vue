<template>
  <!--   Results  -->
  <div class="self-center pl-3 sm:pl-6 lg:pl-0.5">
    <div class="flex flex-row my-8 ml-1">
      <button type="button" @click="toLastScreen" class="focus:outline-none">
        <i class="fas fa-arrow-left text-cst_teal-200"></i>
      </button>
      <h3 class="ml-4 opacity-40">RESULTS</h3>
    </div>
    <div
      class="flex w-full py-2 lg:py-0 -ml-5"
      v-for="(userData, index) in filterUser"
      :key="index"
    >
      <div class="pr-0.5 lg:pr-5 ml-1 lg:ml-2">
        <div
          class="border-4 lg:border-6 border-cst_teal-200 rounded-full max-h-20 w-20 lg:max-h-40 lg:w-40"
        >
          <img
            class="block mx-auto sm:mx-0 sm:flex-shrink-0 w-full h-full rounded-full"
            :src="`${userData?.picture.medium}`"
            alt="User Avatar"
          />
        </div>
      </div>
      <div class="w-full flex flex-col sm:text-left mt-2.5">
        <div class="space-y-2">
          <p class="text-xl text-cst_primary-400 font-semibold tracking-wider">
            {{ userData?.name["title"] }}. {{ userData?.name["first"] }}
            {{ userData?.name["last"] }}
            <span class="font-light opacity-60 ml-4">{{
              userData.dob.age
            }}</span>
          </p>
          <p
            class="text-cst_primary-400 text-opacity-60 tracking-wide font-light text-sm lg:text-base"
          >
            {{ userData.location?.street?.number }}
            {{ userData.location?.street?.name }},
            {{ userData.location?.city }},
            {{ userData.location?.state }}
          </p>
        </div>
        <div
          class="text-cst_primary-400 text-opacity-40 tracking-tighter text-sm space-y-1 mt-2.5"
        >
          <div class="flex justify-between items-center">
            <div
              class="space-x-0.5 flex justify-between items-center text-sm lg:text-base rounded-full bg-cst_primary-50 py-1 pl-1 pr-2.5 tracking-tighter font-light"
            >
              <i class="fas fa-envelope text-cst_gray-400 lg:text-base p-2">
              </i>
              <p>{{ userData.email }}</p>
            </div>
          </div>
          <div
            class="flex w-full space-x-1 lg:space-x-4 justify-between items-center"
          >
            <span
              class="space-x-0.5 lg:space-x-1 flex justify-between items-center rounded-full py-2 px-2.5 bg-cst_beige my-2.5 tracking-tight text-sm font-semibold"
            >
              <p>JOINED: {{ formatJoinedDate(userData.registered.date) }}</p>
            </span>
          </div>
          <span class="flex space-x-0.5 lg:space-x-1 text-cst_gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-phone-call fill-current"
            >
              <path
                d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              ></path>
            </svg>
            <span class="text-cst_black opacity-30">{{ userData.phone }}</span>
          </span>
          <div
            class="flex w-full space-x-1 lg:space-x-4 justify-between items-center"
          >
            <span
              class="space-x-1 lg:space-x-1 flex justify-between items-center mt-2"
            >
              <i class="fas fa-mobile-alt text-cst_gray-400 lg:text-sm"> </i>
              <span class="text-cst_black opacity-30 lg:tracking-tighter">
                {{ userData.cell }}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Results End  -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import store from "../store/index";
import moment from "moment";

export default {
  name: "FilterUser",
  methods: {
    ...mapActions["setCategoryName"],
    toLastScreen() {
      return this.$router.go(-1);
    },
    formatJoinedDate(date) {
      return moment(date).format("YYYY-MM-DD");
    },
  },
  computed: {
    ...mapGetters(["SET_CATEGORY_NAME", "filterUser"]),
  },
  mounted() {
    store.commit("SET_CATEGORY_NAME", "User List");
  },
  created() {
    const id = this.$route.params.userIndex;
    store.commit("SET_FILTER_USER", id);
  },
};
</script>
