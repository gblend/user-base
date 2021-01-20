<template>
  <div class="my-8">
    <div
      v-if="notification"
      class="text-white px-6 py-4 border-0 rounded-2xl relative mb-4 bg-cst_yellow opacity-80"
    >
      <span class="text-xl inline-block mr-5 align-middle">
        <i class="fas fa-bell fa-spin"></i>
      </span>
      <span class="inline-block align-middle mr-8 text-sm">
        <b class="capitalize">Oops!</b> Something went wrong! Please refresh.
      </span>
      <button
        class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
        v-on:click="closeAlert()"
      >
        <span class="text-cst_beige">×</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "NotificationMsg",
  computed: {
    ...mapState(["notification"]),
    notification() {
      return this.$store.state.notification;
    },
  },
  methods: {
    closeAlert: function () {
      this.$store.commit("UPDATE_NOTIFICATION_STATUS", false);
    },
  },
};
</script>
