<template>
  <svg
    x="0px"
    y="0px"
    viewBox="0 0 14 8"
    xml:space="preserve"
    fill="none"
    class="header__chevron header__chevron--absolute"
  >
    <path d="M1,1l6.2,6L13,1"></path>
  </svg>
</template>

<script>
export default {
  name: "NavChevronIcon"
};
</script>

<style>
.header__chevron {
  position: relative;
  top: -2px;
  left: 3px;
  width: 12px;
  right: 0;
  stroke: hsla(0, 0%, 100%, 0.5);
  background: transparent;
  transition: stroke 0.4s;
}
</style>
