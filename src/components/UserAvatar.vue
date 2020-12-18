<template>
  <a itemprop="image" class="avatar__user" :href="profile.avatar_url">
    <img
      alt="Avatar"
      width="280px"
      height="280px"
      class="avatar__user avatar--border"
      :src="profile.avatar_url"
    />
  </a>
</template>

<script>
export default {
  computed: {
    profile() {
      return this.$store.getters.profile;
    }
  }
};
</script>

<style>
.avatar__user {
  border-radius: 50%;
  width: 118px;
  height: auto;
}
.avatar--border {
  border: 1px solid #e1e4e8;
}
@media (min-width: 769px) {
  .avatar__user {
    border-radius: 50%;
    width: 280px;
    height: auto;
  }
}
</style>
