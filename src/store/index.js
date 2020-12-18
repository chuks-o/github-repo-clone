import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

axios.defaults.baseURL = "https://api.github.com/users";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    repositories: [],
    allRepos: []
  },
  getters: {
    profile: state => state.profile,
    repositories: state => {
      return state.repositories;
    }
  },
  mutations: {
    SET_USER(state, payload) {
      state.profile = payload;
    },
    SET_REPOSITORIES(state, payload) {
      state.allRepos = state.repositories = payload;
    },
    SET_SEARCH_REPOSITORIES(state, value) {
      const search = value.toLowerCase().trim();
      if (!search) state.repositories = state.allRepos;

      state.repositories = state.repositories.filter(repo =>
        repo.name.toLowerCase().includes(search)
      );
    }
  },
  actions: {
    async getUserDetails({ commit }) {
      try {
        const [profile, repositories] = await Promise.all([
          axios.get("/chuks-o"),
          axios.get("/chuks-o/repos")
        ]);

        commit("SET_REPOSITORIES", repositories.data);
        commit("SET_USER", profile.data);
      } catch (error) {
        //
      }
    }
  },
  modules: {}
});
