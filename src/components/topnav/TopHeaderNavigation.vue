<template>
  <div>
    <nav class="header__nav" aria-label="Navbar">
      <ul class="header__unordered-list">
        <li
          class="header__list header__list--white"
          v-for="(tab, index) in navigationTabs"
          :key="index"
        >
          <span>{{ tab.name }}</span>

          <nav-chevron-icon v-if="tab.dropdown" />

          <div class="main-dropdown">
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
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import NavChevronIcon from "../icons/NavChevronIcon.vue";

export default {
  components: { NavChevronIcon },
  data() {
    return {
      navigationTabs: [
        // Why Github
        {
          name: "Why Github?",
          dropdown: true,
          dropdownHeader: null,
          menu: [
            {
              header: "Features",
              tabs: [
                {
                  name: "Code Review",
                  link: "/features/code-review"
                },
                {
                  name: "Project Management",
                  link: ""
                },
                {
                  name: "Integrations",
                  link: ""
                },
                {
                  name: "Actions",
                  link: ""
                },
                {
                  name: "Packages",
                  link: ""
                },
                {
                  name: "Security",
                  link: ""
                },
                {
                  name: "Team management",
                  link: ""
                },
                {
                  name: "Hosting",
                  link: ""
                }
              ]
            },
            {
              header: "Customer stories",
              tabs: []
            },
            {
              header: "Security",
              tabs: []
            }
          ]
        },
        // Team
        {
          name: "Team",
          dropdown: false,
          dropdownHeader: null,
          menu: []
        },
        // Enterprise
        {
          name: "Enterprise",
          dropdown: false,
          dropdownHeader: null,
          menu: []
        },
        // Explore
        {
          name: "Explore",
          dropdown: true,
          dropdownHeader: "Explore Github",
          menu: [
            {
              header: "Learn & contribute",
              tabs: [
                {
                  name: "Topics",
                  link: ""
                },
                {
                  name: "Collections",
                  link: ""
                },
                {
                  name: "Trending",
                  link: ""
                },
                {
                  name: "Learning Lab",
                  link: ""
                },
                {
                  name: "Open source guides",
                  link: ""
                }
              ]
            },
            {
              header: "Connect with others",
              tabs: [
                {
                  name: "Events",
                  link: ""
                },
                {
                  name: "Community forum",
                  link: ""
                },
                {
                  name: "Github Education",
                  link: ""
                },
                {
                  name: "Github stars program",
                  link: ""
                }
              ]
            }
          ]
        },
        // Marketplace
        {
          name: "Marketplace",
          dropdown: false,
          dropdownHeader: null,
          menu: []
        },
        // Pricing
        {
          name: "Pricing",
          dropdown: true,
          dropdownHeader: null,
          menu: [
            {
              header: "Plans",
              tabs: [
                {
                  name: "Compare plans",
                  link: ""
                },
                {
                  name: "Contact sales",
                  link: ""
                }
              ]
            },
            {
              header: "Nonprofit",
              tabs: []
            },
            {
              header: "Education",
              tabs: []
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
nav.header__nav {
  margin: 0;
  padding: 0;
  font-weight: 500;
}
.border-bottom {
  border-bottom: 1px solid #e1e4e8;
}
ul.header__unordered-list {
  display: flex;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  list-style-type: none;
}
ul.header__unordered-list li.header__list {
  position: relative;
  display: inline-block;
  padding: 0;
  margin: 0;
  margin-right: 16px;
  font-size: var(--ft-16);
  z-index: 10;
}
ul.header__unordered-list li.header__list:hover span {
  color: var(--text-white);
  opacity: 0.75;
  cursor: default;
}

ul.header__unordered-list li.header__list--white {
  transition: all 10s ease-out;
  color: var(--text-white);
}

/* dropdown */
div.main-dropdown {
  padding-top: 1.1em;
  background: transparent;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  left: 0;
  display: none;
  z-index: 10;
  width: 300px;
  box-shadow: 0 3px 12px var(--color-fade-black-15),
    0 0 1px rgba(27, 31, 35, 0.2);
}

ul.header__unordered-list li div.dropdown {
  background-color: var(--bg-white);
  border: 1px solid #e1e4e8;
  border-radius: 6px;
}

ul.header__unordered-list li:hover > div,
ul.header__unordered-list li:hover {
  visibility: visible;
  opacity: 1;
  display: block;
}
a.dropdown--item--name {
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;
  color: #586069;
}
a.dropdown--item--name:hover {
  color: var(--text-link);
}
</style>
