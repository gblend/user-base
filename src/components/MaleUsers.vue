<template>
  <users />
</template>

<script>
import Users from "./Users";
import { mapActions, mapGetters } from "vuex";
import store from "../store";
export default {
  name: "MaleUsers",
  components: {
    Users,
  },
  computed: {
    ...mapGetters(["categoryName", "allUsers"]),
  },

  methods: {
    ...mapActions(["getMaleUsers"]),
  },
  mounted() {
    store.commit("SET_CATEGORY_NAME", "Male Users");
  },
  created() {
    this.getMaleUsers();
  },
};
</script>
