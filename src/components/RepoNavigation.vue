<template>
  <nav class="nav">
    <router-link
      :class="{ 'navbar--active': tab.active }"
      to="/"
      v-for="(tab, index) in tabs"
      :key="index"
    >
      <component :is="tab.component" />
      {{ tab.name }}
      <span v-if="tab.badge" :title="profile.public_repos" class="nav__counter">
        {{ profile.public_repos }}
      </span>
    </router-link>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import OverviewIcon from "@/components/icons/OverviewIcon.vue";
import RepositoriesIcon from "@/components/icons/RepositoriesIcon.vue";
import ProjectsIcon from "./icons/ProjectsIcon.vue";
import PackagesIcon from "./icons/PackagesIcon.vue";

export default {
  data() {
    return {
      tabs: [
        {
          name: "Overview",
          component: "OverviewIcon",
          badge: false,
          active: false
        },
        {
          name: "Repositories",
          component: "RepositoriesIcon",
          badge: true,
          active: true
        },
        {
          name: "Projects",
          component: "ProjectsIcon",
          badge: false,
          active: false
        },
        {
          name: "Packages",
          component: "PackagesIcon",
          badge: false,
          active: false
        }
      ]
    };
  },
  components: {
    OverviewIcon,
    RepositoriesIcon,
    ProjectsIcon,
    PackagesIcon
  },
  computed: {
    ...mapGetters(["profile"])
  }
};
</script>

<style scoped>
.nav {
  display: flex;
}
.nav a {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  font-size: 14px;
  line-height: 30px;
  color: var(--text-dark);
  text-align: center;
  white-space: nowrap;
  background-color: initial;
  text-decoration: none;
  border: 0;
  border-bottom: 2px solid transparent;
  transition: border-bottom-color 0.36s ease-in;
  cursor: pointer;
}
.nav a:hover:not(.navbar--active) {
  color: #24292e;
  text-decoration: none;
  border-bottom-color: #d1d5da;
  outline: 1px dotted transparent;
  outline-offset: -1px;
  transition-timing-function: ease-out;
  transition-duration: 0.12s;
}
.nav a.navbar--active {
  font-weight: 600;
  border-bottom-color: #f9826c;
}
.nav a span.nav__counter {
  margin-left: 4px;
  display: inline-block;
  min-width: 20px;
  padding: 0 6px;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: var(--text-dark);
  text-align: center;
  background-color: #d1d5da80;
  border: 1px solid transparent;
  border-radius: 2em;
}
</style>
