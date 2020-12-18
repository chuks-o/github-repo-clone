<template>
  <div>
    <div
      v-for="(repository, index) in repositories"
      :key="index"
      class="repository"
    >
      <div
        class=""
        style="display:flex; width: 100%; align-items:center; justify-content: space-between;"
      >
        <div>
          <div class="repository__nameblock">
            <h3 class="wb-break-all">
              <a
                :href="repository.html_url"
                class="repository--link"
                itemprop="name codeRepository"
              >
                {{ repository.name }}
              </a>
            </h3>
          </div>

          <div>
            <p class="repository__description" itemprop="description">
              {{ repository.description }}
            </p>
          </div>

          <div>
            <user-repository-footer :repository="repository" />
          </div>
        </div>
        <div>
          <repository-graph />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RepositoryGraph from "./icons/RepositoryGraph.vue";
import UserRepositoryFooter from "./repository-card/UserRepositoryFooter.vue";

export default {
  name: "UserRepository",
  components: { UserRepositoryFooter, RepositoryGraph },
  props: {
    repositories: {
      type: Array
    }
  }
};
</script>

<style scoped>
.repository {
  display: flex;
  padding-top: 24px;
  padding-bottom: 24px;
  width: 100%;
  border-bottom: 1px solid #e1e4e8;
}
.repository__nameblock {
  display: inline-block;
  margin-bottom: 0px;
}

.repository--link {
  color: var(--text-link);
  text-decoration: none;
}
.repository--link:hover {
  text-decoration: underline;
}
.repository__description {
  color: var(--text-secondary);
  margin-bottom: 15px;
  margin-top: 10px;
  font-size: var(--ft-14);
  font-weight: 500;
}
</style>
