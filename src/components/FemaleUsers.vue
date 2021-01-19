<template>
  <users />
</template>

<script>
import Users from "./Users";
import { mapActions, mapGetters } from "vuex";
import store from "../store";
export default {
  name: "FemaleUsers",
  components: {
    Users,
  },
  computed: {
    ...mapGetters(["categoryName", "allUsers"]),
  },

  methods: {
    ...mapActions(["SET_CATEGORY_NAME", "getFemaleUsers"]),
  },

  mounted() {
    store.commit("SET_CATEGORY_NAME", "Female Users");
  },
  created() {
    this.getFemaleUsers();
  },
};
</script>
