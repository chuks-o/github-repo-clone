<template>
  <div class="prompt prompt--bg mt-4" ref="prompt">
    <div class="prompt--innerbg prompt__innerbg--padding">
      <div class="prompt--body">
        <div class="prompt__dismiss">
          <a
            class="prompt__dismiss--text"
            @click.prevent="dismissBlock"
            href="javascript:;"
            >Dismiss</a
          >
        </div>
        <h3 class="pt-2">Create your own GitHub profile</h3>
        <p class="prompt__paragraph">
          Sign up for your own profile on GitHub, the best place to host code,
          manage projects, and build software alongside 50 million developers.
        </p>

        <div class="prompt__cta">
          <form-button value="Sign up" btn-class="btn--primary ft-14" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormButton from "./form/FormButton.vue";
export default {
  components: {
    FormButton
  },
  methods: {
    dismissBlock() {
      const promptBlock = this.$refs.prompt;
      promptBlock.classList.add("prompt--block-dismiss");
    }
  }
};
</script>

<style>
.prompt {
  border-radius: 6px !important;
  display: block;
  transition: 0.5s ease-in-out;
}
.prompt--bg {
  background-image: linear-gradient(180deg, hsla(0, 0%, 100%, 0) 50%, #fff),
    linear-gradient(70deg, #eaf5ff 32%, #f6fff8);
  width: 100%;
}
.prompt--innerbg {
  background-image: url("https://github.githubassets.com/images/modules/site/site-signup-prompt.png");
  background-position: center 30%;
  background-size: 100% auto;
  border: 1px solid rgba(27, 31, 35, 0.075);
}

.prompt__innerbg--padding {
  padding: 24px;
  text-align: center !important;
  border-radius: 4px;
  width: 100%;
}
.prompt--body {
  position: relative;
}
.prompt__dismiss {
  position: absolute;
  right: 0;
  top: 0;
}
.prompt__dismiss--text {
  color: #586069;
  display: inline-block;
  padding: 0;
  font-size: inherit;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  font-weight: 500;
}
.prompt__paragraph {
  width: 66.6%;
  margin-top: 0;
  margin-bottom: 11px;
  margin-right: auto;
  margin-left: auto;
}
.prompt--block-dismiss {
  display: none;
}
</style>
