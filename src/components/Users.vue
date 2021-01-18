<template>
  <div class="mx-auto place-self-center mt-4 flex">
    <div
      class="w-full mx-auto rounded-xl shadow-xl sm:py-4 flex sm:space-y-0 sm:space-x-6 bg-cst_white-300"
    >
      <div class="lg:w-11/12 mx-auto place-self-center flex">
        <div class="flex w-full py-2 lg:py-0">
          <div class="pr-0.5 lg:pr-4 ml-1 lg:ml-2">
            <div
              class="border-4 lg:border-5 border-cst_teal-200 rounded-full max-h-16 w-16 lg:max-h-20 lg:w-20"
            >
              <img
                class="block mx-auto sm:mx-0 sm:flex-shrink-0 w-full h-full"
                src="../../public/img/dog-logo.png"
                alt="User Avatar"
              />
            </div>
          </div>
          <div class="w-full flex flex-col sm:text-left">
            <div class="lg:space-y-1">
              <p class="text-normal text-cst_primary-400 font-semibold">
                Shalom Chioma
              </p>
              <p
                class="text-cst_primary-400 text-opacity-60 italic tracking-tighter font-light text-sm lg:text-base"
              >
                9278 new road, kilcode, waterford
              </p>
            </div>
            <div
              class="w-full text-cst_primary-400 text-opacity-40 tracking-tighter text-sm space-y-1"
            >
              <div
                class="flex w-full space-x-1 lg:space-x-4 justify-between items-center"
              >
                <span
                  class="space-x-0.5 lg:space-x-1 flex justify-between items-center text-xs lg:text-base"
                >
                  <i
                    class="fas fa-envelope text-cst_gray-400 text-xs lg:text-base"
                  >
                  </i>
                  <p>brad.gibson@example.com</p>
                </span>

                <span
                  class="flex items-center justify-between space-x-0.5 lg:space-x-1 mt-1"
                >
                  <span class="text-cst_gray-200">
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
                  </span>
                  <p class="text-xs lg:text-sm">011-962-7516</p>
                </span>
                <router-link
                  :to="{ name: 'User' }"
                  tag="li"
                  class="rounded-lg bg-cst_teal-300 py-0.5 lg:py-1 px-1.5 lg:px-3 hover:bg-cst_primary-300 transition ease-in shadow-2xl duration-500 hover:shadow-md hover:opacity-70 focus:outline-none"
                >
                  <a
                    ><i
                      class="fas fa-arrow-right text-sm text-cst_white-100"
                    ></i
                  ></a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import store from "../store";

export default {
  name: "Users",
  computed: {
    ...mapGetters(["categoryName"]),
  },
  methods: {
    ...mapActions["SET_CATEGORY_NAME"],
  },
  mounted() {
    store.commit("SET_CATEGORY_NAME", "All Users");
  },
};
</script>
