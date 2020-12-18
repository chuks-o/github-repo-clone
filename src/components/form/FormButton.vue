<template>
  <button class="btn" :class="btnClass">
    {{ value }}
  </button>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
      default: "Button"
    },
    btnClass: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
.btn {
  position: relative;
  display: inline-block;
  padding: 5px 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  white-space: nowrap;
  vertical-align: middle;
  border-radius: 6px;
  background-color: initial;
  border: 0;
}

.btn:focus {
  outline: none;
}

.btn--primary {
  background: var(--btn-primary);
  color: var(--text-white);
  border: none;
}
.btn--primary:hover {
  background: var(--btn-primary-hover);
}
.btn--transparent {
  background: transparent;
  color: var(--text-white);
}
.btn--transparent-border {
  border: 1px solid #fff;
}

.btn--noborder {
  border: 0;
}
</style>
