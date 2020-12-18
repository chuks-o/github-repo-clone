<template>
  <div class="menu__dropdown close-menu" ref="menu_dropdown">
    <div class="">
      <div class="menu__dropdown-close" @click.prevent="closeMenu">
        <nav-close-icon />
      </div>
      <div class="menu__dropdown-body">
        <div
          class="border-bottom"
          style="border-bottom: 1px solid #e1e4e8;"
          v-for="(tab, parentIndex) in menu"
          :key="parentIndex"
        >
          <div class="menu__dropdown-content" @click="toggleDropdown">
            <div class="menu__dropdown-item">
              {{ tab.name }}
            </div>
            <div v-if="tab.dropdown">
              <svg
                x="0px"
                y="0px"
                viewBox="0 0 14 8"
                xml:space="preserve"
                fill="none"
                class="dropdown-icon position-absolute position-lg-relative"
              >
                <path d="M1,1l6.2,6L13,1"></path>
              </svg>
            </div>
          </div>
          <div class="menu_dropdown-list">
            <div v-if="tab.dropdown" class="dropdown">
              <ul
                v-for="(menuItem, tabIndex) in tab.menu"
                :key="tabIndex"
                class="dropdown-menu"
              >
                <li
                  :class="{
                    'pb-3 pt-3': menuItem.tabs.length,
                    'pt-2': !menuItem.tabs.length
                  }"
                >
                  <a href="#" class="dropdown--item--header">
                    {{ menuItem.header }}
                  </a>
                </li>
                <li
                  v-for="(menuList, menuListIndex) in menuItem.tabs"
                  :key="menuListIndex"
                  class="dropdown--item--namelist"
                >
                  <a href="#" class="dropdown--item--name" style="">
                    {{ menuList.name }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable  */
import NavCloseIcon from "../icons/NavCloseIcon.vue";
import navigation from "../../navigationData.js";
import EventBus from "../../EventBus";

export default {
  components: { NavCloseIcon },
  data() {
    return {
      menu: navigation,
    };
  },
  mounted() {
    EventBus.$on("open-menu", () => {
      this.$refs.menu_dropdown.classList.toggle("close-menu");
    });
  },
  methods: {
    toggleDropdown(e) {
      e.target.classList.toggle("menu--active");
      let container = e.target.parentElement.lastChild;

      if (container.style.display === "block") {
        container.style.display = "none";
      } else {
        container.style.display = "block";
      }
    },
    closeMenu() {
      this.$refs.menu_dropdown.classList.toggle("close-menu");
    },
  },
};
</script>

<style>
.menu__dropdown {
  position: fixed;
  display: block;
  top: 0;
  right: 0;
  background-color: #fff;
  max-height: 100vh;
  height: 100vh;
  width: 300px;
  z-index: 15;
  overflow-y: hidden;
  box-shadow: 0 10px 50px #1b1f2326;
}
.menu__dropdown-close {
  padding: 16px;
  display: flex;
  justify-content: flex-end;
  /* border-bottom: 1px solid #e1e4e8; */
  background-color: #fafbfc;
}
.menu__dropdown-body {
  padding: 0 16px;
  /* position: relative; */
}
.menu__dropdown-content {
  display: flex;
  justify-content: space-between;
  /* border-bottom: 1px solid #e1e4e8; */
  padding: 16px 0;
}
.menu__dropdown-item {
  font-size: 16px;
  color: #24292e;
  opacity: 0.75;
  font-weight: 500;
}
.menu_dropdown-list {
  display: none;
  overflow: hidden;
  padding: 0 20px;
}
.dropdown-icon {
  top: 24px;
  right: 0;
  width: 14px;
  stroke: #24292e;
  opacity: 0.75;
  transition: stroke 0.4s;
}
.menu--active {
  background-color: #fff;
}
div.dropdown {
  padding: 0px 0px 20px !important;
}
.menu_dropdown-list {
  padding: 0 3px;
}
.close-menu {
  visibility: hidden;
  /* display: block; */
}

@media (min-width: 1012px) {
  .menu__dropdown {
    /* visibility: hidden; */
    display: none;
  }
}
</style>
