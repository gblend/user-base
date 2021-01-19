<template>
  <users />
</template>

<script>
import Users from "./Users";
import { mapActions, mapGetters } from "vuex";
import store from "../store";
export default {
  name: "Country",
  components: {
    Users,
  },
  computed: {
    ...mapGetters(["categoryName", "allUsers"]),
  },

  methods: {
    ...mapActions(["SET_CATEGORY_NAME", "getCountryUsers"]),
  },

  mounted() {
    store.commit("SET_CATEGORY_NAME", "Country List");
  },
  created() {
    this.getCountryUsers();
  },
};
</script>
