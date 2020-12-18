<template>
  <main class="home">
    <div
      class="home__nav home__nav--sticky home--borderbottom repo--nav-desktop"
    >
      <!-- navigation -->
      <div class="home--full-width home--xl--responsive">
        <div class="home__nav--left"></div>
        <div class="home__nav--right">
          <repo-navigation />
        </div>
      </div>
    </div>

    <div class="home__container home--xl--responsive">
      <div class="home--left">
        <user-profile />
      </div>
      <div
        class="home__nav home__nav--sticky home--borderbottom repo--nav-mobile"
      >
        <div class="home--full-width home--xl--responsive">
          <div class="home__nav--right">
            <repo-navigation />
          </div>
        </div>
      </div>
      <div class="home--right">
        <div class="">
          <signup-prompt />
        </div>

        <div class="home__search">
          <repository-search />
        </div>
        <div>
          <user-repositories />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import RepoNavigation from "@/components/RepoNavigation.vue";
import SignupPrompt from "@/components/SignupPrompt.vue";
import UserProfile from "@/components/UserProfile.vue";
import UserRepositories from "@/components/UserRepositories.vue";
import RepositorySearch from "@/components/RepositorySearch.vue";

export default {
  name: "Home",
  components: {
    RepoNavigation,
    SignupPrompt,
    UserProfile,
    UserRepositories,
    RepositorySearch
  },
  mounted() {
    this.$store.dispatch("getUserDetails");
  }
};
</script>

<style>
.home {
  width: 100%;
}
.home__nav {
  margin-top: 24px;
}
.home--full-width {
  display: flex;
  width: 100%;
}
/* navigation */
.home__nav--left {
  flex-basis: 25%;
}
.home__nav--right {
  display: block;
}
.home__nav--sticky {
  position: sticky;
  top: 0;
  z-index: 3;
  width: 100%;
  display: flex;
  background: #fff;
}
.repo--nav-mobile {
  display: block;
  overflow: auto;
}
.repo--nav-desktop {
  display: none;
}

/* body styles */
.home__container {
  display: flex;
  flex-direction: column;
  padding-right: 16px !important;
  padding-left: 16px !important;
}
.home--borderbottom {
  border-bottom: 1px solid var(--border-color);
}
.home__search {
  padding-top: 16px;
  border-bottom: 1px solid rgb(234, 236, 239);
}

@media (min-width: 768px) {
  .home__container {
    margin-top: 20px;
    display: flex;
    flex-direction: unset;
    width: 100%;
    padding-right: 24px;
    padding-left: 24px;
  }
  .home--left {
    position: relative;
    display: block;
    flex-basis: 25%;
    margin-right: 16px;
  }
  .home--right {
    position: relative;
    display: block;
    flex-grow: 1;
  }
  .repo--nav-mobile {
    display: none;
  }
  .repo--nav-desktop {
    display: block;
  }
}
@media (min-width: 1012px) {
  .home--xl--responsive {
    max-width: 1280px;
    margin: auto;
    padding-right: 48px;
    padding-left: 48px;
  }
}
</style>
