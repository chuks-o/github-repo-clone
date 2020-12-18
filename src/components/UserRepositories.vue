<template>
  <div>
    <user-repository :repositories="repositories" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserRepository from "./UserRepository.vue";
import EventBus from "../EventBus.js";

export default {
  components: {
    UserRepository
  },
  computed: {
    ...mapGetters(["repositories"])
  },
  mounted() {
    // listen on search input
    EventBus.$on("on-search", ({ value }) => {
      this.$store.commit("SET_SEARCH_REPOSITORIES", value);
    });
  }
};
</script>

<style></style>
