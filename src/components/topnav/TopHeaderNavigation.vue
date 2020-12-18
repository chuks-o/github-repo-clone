<template>
  <nav class="header__nav" aria-label="Navbar">
    <ul class="">
      <li class="header__list header__list--white">
        <div>
          <span>Why GitHub?</span>
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
        </div>
      </li>
      <li class="header__list header__list--white">
        <div>
          <span>Team</span>
        </div>
      </li>
      <li class="header__list header__list--white">
        <div>
          <span>Enterprise</span>
        </div>
      </li>
      <li class="header__list header__list--white">
        <div>
          <span>Explore</span>
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
        </div>
      </li>

      <li class="header__list header__list--white">
        <div>
          <span>Marketplace</span>
        </div>
      </li>
      <li class="header__list header__list--white">
        <div>
          <span>Pricing</span>
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
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav.header__nav {
  margin: 0;
  padding: 0;
  font-weight: 500;
}
ul {
  display: flex;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  list-style-type: none;
}
ul li.header__list {
  display: inline-block;
  padding: 0;
  margin: 0;
  margin-right: 16px;
  font-size: var(--ft-16);
}
ul li.header__list:hover {
  color: var(--text-white);
  opacity: 0.75;
  cursor: default;
}

ul li.header__list--white {
  color: var(--text-white);
}
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
