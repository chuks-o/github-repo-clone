<template>
  <div>
    <div class="header__button">
      <form-button
        value="Sign in"
        btn-class="mr-3 btn--transparent btn--noborder header--responsive"
      />
      <form-button
        value="Sign up"
        btn-class="btn--transparent btn--transparent-border"
      />
      <button
        class="ml-3 btn header__nav-icon header-xl--none"
        @click="openMenu"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded="false"
      >
        <svg
          height="24"
          fill="#ffffff"
          class=""
          viewBox="0 0 16 16"
          version="1.1"
          width="24"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import FormButton from "@/components/form/FormButton.vue";
import EventBus from "../../EventBus";

export default {
  name: "HeaderSignupButtons",
  components: {
    FormButton
  },
  methods: {
    openMenu() {
      EventBus.$emit("open-menu");
    }
  }
};
</script>

<style>
.header__nav-icon {
  background-color: initial !important;
  padding: 0;
}
</style>
