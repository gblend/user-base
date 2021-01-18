<template>
  <users />
</template>
<script>
import Users from "./Users";
import { mapActions, mapGetters } from "vuex";
import store from "../store";
export default {
  name: "SearchResults",
  components: {
    Users,
  },
  computed: {
    ...mapGetters(["categoryName"]),
  },

  methods: {
    ...mapActions["SET_CATEGORY_NAME"],
  },

  mounted() {
    store.commit("SET_CATEGORY_NAME", "User");
  },
};
</script>
