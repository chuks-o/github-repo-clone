<template>
  <button
    class="btn-close js-details-target"
    type="button"
    aria-label="Toggle navigation"
    aria-expanded="true"
  >
    <svg
      height="24"
      class="svg-close"
      viewBox="0 0 24 24"
      version="1.1"
      width="24"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"
      ></path>
    </svg>
  </button>
</template>

<script scope>
export default {
  name: "NavClose"
};
</script>

<style>
.btn-close {
  background-color: #fafbfc;
  border: none;
}
.svg-close {
  color: #586069;
  opacity: 0.65;
}
</style>
