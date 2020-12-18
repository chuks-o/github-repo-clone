<template>
  <div class="repository__footer mt-2">
    <span class="mr-3">
      <span
        v-show="repository.language"
        class="repository--langcolor mr-2"
        :style="langColor(repository.language)"
      >
      </span>
      <span>{{ repository.language }}</span>
    </span>

    <a
      v-if="repository.stargazers_count > 0"
      class="muted-link mr-3"
      href="/chuks-o/revenueMgt/stargazers"
    >
      <repo-star-gazers-icon />
      {{ repository.stargazers_count }}
    </a>

    <a
      v-if="repository.forks > 0"
      class="muted-link mr-3"
      href="/chuks-o/revenueMgt/network/members"
    >
      <repo-fork-icon />
      {{ repository.forks_count }}
    </a>

    <span> Updated on {{ repository.updated_at | readableDate }} </span>
  </div>
</template>

<script>
import RepoForkIcon from "../icons/RepoForkIcon.vue";
import RepoStarGazersIcon from "../icons/RepoStarGazersIcon.vue";

export default {
  name: "UserRepoFooter",
  props: {
    repository: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    RepoForkIcon,
    RepoStarGazersIcon
  },
  data() {
    return {
      languageColors: {
        CSS: "#563d7c",
        PHP: "#4F5D95",
        JavaScript: "#f1e05a",
        HTML: "#e34c26",
        Vue: "#2c3e50"
      }
    };
  },
  filters: {
    readableDate(value) {
      let formatted = new Date(value);
      let options = {
        year: "numeric",
        month: "short",
        day: "numeric"
      };
      return formatted.toLocaleDateString("en-US", options);
    }
  },

  methods: {
    langColor(language) {
      return {
        background: this.languageColors[language]
      };
    }
  }
};
</script>

<style scoped>
.repository__footer {
  color: var(--text-secondary);
  font-size: var(--ft-12);
  font-weight: 500;
}
.repository__footer a {
  color: var(--text-secondary);
  text-decoration: none;
}
.repository--langcolor {
  position: relative;
  top: 1px;
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 1px solid #1b1f231a;
  border-radius: 50%;
}
</style>
