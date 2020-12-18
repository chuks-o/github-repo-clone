<template>
  <div class="search">
    <form
      class="d-block d-md-flex"
      aria-label="Repositories"
      role="search"
      accept-charset="UTF-8"
      method="get"
    >
      <div class="mb-3 mb-md-0 mr-md-3" style="flex: auto;">
        <input
          type="text"
          id="your-repos-filter"
          value=""
          name="search"
          @input="fireSearchEvent"
          class="search__input"
          placeholder="Find a repository…"
          autocomplete="off"
          aria-label="Find a repository…"
        />
      </div>

      <!-- <div class="d-flex">
      <details
        class="details-reset details-overlay position-relative mr-2"
        id="type-options"
      >
        <summary class="btn" aria-haspopup="menu" role="button">
          <i>Type:</i>
          <span data-menu-button="">
            All
          </span>
          <span class="dropdown-caret"></span>
        </summary>

        <details-menu class="SelectMenu right-md-0" role="menu">
          <div class="SelectMenu-modal">
            <header class="SelectMenu-header">
              <span class="SelectMenu-title">Select type</span>
              <button
                class="SelectMenu-closeButton"
                type="button"
                data-toggle-for="type-options"
              >
                <svg
                  aria-label="Close menu"
                  class="octicon octicon-x"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  role="img"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                  ></path>
                </svg>
              </button>
            </header>
            <div class="SelectMenu-list">
              <label
                class="SelectMenu-item"
                role="menuitemradio"
                aria-checked="true"
                tabindex="0"
              >
                <input
                  type="radio"
                  name="type"
                  id="type_"
                  value=""
                  hidden="hidden"
                  data-autosubmit="true"
                  checked="checked"
                />
                <svg
                  class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                  ></path>
                </svg>
                <span class="text-normal" data-menu-button-text="">All</span>
              </label>
              <label
                class="SelectMenu-item"
                role="menuitemradio"
                aria-checked="false"
                tabindex="0"
              >
                <input
                  type="radio"
                  name="type"
                  id="type_source"
                  value="source"
                  hidden="hidden"
                  data-autosubmit="true"
                />
                <svg
                  class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                  ></path>
                </svg>
                <span class="text-normal" data-menu-button-text=""
                  >Sources</span
                >
              </label>
              <label
                class="SelectMenu-item"
                role="menuitemradio"
                aria-checked="false"
                tabindex="0"
              >
                <input
                  type="radio"
                  name="type"
                  id="type_fork"
                  value="fork"
                  hidden="hidden"
                  data-autosubmit="true"
                />
                <svg
                  class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                  ></path>
                </svg>
                <span class="text-normal" data-menu-button-text="">Forks</span>
              </label>
              <label
                class="SelectMenu-item"
                role="menuitemradio"
                aria-checked="false"
                tabindex="0"
              >
                <input
                  type="radio"
                  name="type"
                  id="type_archived"
                  value="archived"
                  hidden="hidden"
                  data-autosubmit="true"
                />
                <svg
                  class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                  ></path>
                </svg>
                <span class="text-normal" data-menu-button-text=""
                  >Archived</span
                >
              </label>
              <label
                class="SelectMenu-item"
                role="menuitemradio"
                aria-checked="false"
                tabindex="0"
              >
                <input
                  type="radio"
                  name="type"
                  id="type_mirror"
                  value="mirror"
                  hidden="hidden"
                  data-autosubmit="true"
                />
                <svg
                  class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                  ></path>
                </svg>
                <span class="text-normal" data-menu-button-text=""
                  >Mirrors</span
                >
              </label>
            </div>
          </div>
        </details-menu>
      </details>

      <details
        class="details-reset details-overlay position-relative flex-auto"
        id="language-options"
      >
        <summary class="btn" aria-haspopup="menu" role="button">
          <i>Language:</i>
          <span data-menu-button="">
            All
          </span>
          <span class="dropdown-caret"></span>
        </summary>

        <details-menu class="SelectMenu right-md-0" role="menu">
          <div class="SelectMenu-modal">
            <header class="SelectMenu-header">
              <span class="SelectMenu-title">Select language</span>
              <button
                class="SelectMenu-closeButton"
                type="button"
                data-toggle-for="language-options"
              >
                <svg
                  aria-label="Close menu"
                  class="octicon octicon-x"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  role="img"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                  ></path>
                </svg>
              </button>
            </header>
            <div class="SelectMenu-list">
              <label
                class="SelectMenu-item"
                role="menuitemradio"
                aria-checked="true"
                tabindex="0"
              >
                <input
                  type="radio"
                  name="language"
                  id="language_"
                  value=""
                  hidden="hidden"
                  data-autosubmit="true"
                  checked="checked"
                />
                <svg
                  class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                  ></path>
                </svg>
                <span class="text-normal" data-menu-button-text="">All</span>
              </label>
            </div>
          </div>
        </details-menu>
      </details>
    </div> -->
    </form>
  </div>
</template>

<script>
import EventBus from "../EventBus.js";

export default {
  data() {
    return {
      searchTerm: ""
    };
  },
  methods: {
    fireSearchEvent(event) {
      EventBus.$emit("on-search", { value: event.target.value });
    }
  }
};
</script>

<style scoped>
.search__input {
  width: 100%;
  padding: 5px 12px;
  font-size: 14px;
  line-height: 20px;
  color: var(--text-dark);
  vertical-align: middle;
  background-color: var(--bg-white);
  background-repeat: no-repeat;
  background-position: right 8px center;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  outline: none;
  box-shadow: inset 0 1px 0 rgba(225, 228, 232, 0.2);
}
.search__input:focus {
  border-color: #0366d6;
  outline: none;
  box-shadow: 0 0 0 3px rgba(3, 102, 214, 0.3);
}
</style>
