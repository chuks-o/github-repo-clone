<template>
  <div class="header header--dark">
    <header class="header__body">
      <div class="header__navigation">
        <div class="header__left">
          <div class="header__logo">
            <a class="" href="https://github.com/" aria-label="Homepage">
              <github-logo />
            </a>
          </div>
          <div class="header__lists header--responsive">
            <top-header-navigation />
          </div>
        </div>
        <div class="header__right">
          <form action="" class="header--responsive">
            <label class="header__search d-flex" for="search">
              <input
                id="search"
                type="text"
                placeholder="Search"
                class="header__input"
              />
              <img
                src="https://github.githubassets.com/images/search-key-slash.svg"
                alt=""
                class="mr-2 header-search-key-slash"
              />
            </label>
          </form>

          <div>
            <top-header-buttons />
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import TopHeaderNavigation from "@/components/topnav/TopHeaderNavigation.vue";
import GithubLogo from "@/components/topnav/GithubLogo.vue";
import TopHeaderButtons from "./TopHeaderButtons.vue";

export default {
  components: {
    GithubLogo,
    TopHeaderNavigation,
    TopHeaderButtons
  }
};
</script>

<style>
.header {
  display: block;
  position: relative;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 100%;
}
.header__text {
  font-size: var(--ft-14);
  color: var(--text-white);
}
.header--dark {
  background: var(--bg-dark);
}
.header__navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__left {
  display: flex;
  align-items: center;
}
.header__right {
  display: flex;
  align-items: center;
}
.header__logo > a {
  margin-right: 23px;
}
.header__lists {
  padding: 16px 0px;
  position: relative;
}
.header__search {
  padding: 5px;
  width: 100%;
  vertical-align: middle;
  min-height: 28px;
  font-weight: 400;
  font-size: var(--ft-14);
  border-radius: 5px 5px 0 0;
  background: var(--bg-dark);
  outline: none;
  border: 0px;
  box-shadow: none;
}
.header__input {
  padding: 5px 12px;
  border: 0px;
  line-height: 20px;
  background: inherit;
  outline: none;
  border: 0px;
  box-shadow: none;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
}
.header__input:focus {
  background: var(--bg-white) !important;
  border: 0;
  outline: none;
}
.header__body {
  padding-left: 16px;
  padding-right: 16px;
}
.header__button {
  display: flex;
  position: relative;
}
.header--responsive {
  display: none;
}

@media (min-width: 544px) {
  .header__body {
    padding-left: 40px;
    padding-right: 40px;
  }
}

@media (min-width: 1012px) {
  .header__body {
    max-width: 1280px;
    margin: 0 auto;
    box-sizing: border-box;
    padding-left: 16px;
    padding-right: 16px;
  }
  .header--responsive {
    display: block;
  }

  .header-xl--none {
    display: none;
  }
  .header__nav-icon {
    background-color: initial !important;
  }
}
</style>
