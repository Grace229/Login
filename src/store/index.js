import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null
  },
  getters: {
    getUser: state => state.user
  },
  mutations: {
    setUser: (state, user) => (state.user = user)
  },
  actions: {
    setUser: ({ commit }, user) => commit("setUser", user)
  },
  modules: {}
});
