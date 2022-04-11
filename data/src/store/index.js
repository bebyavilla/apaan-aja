import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listPokemon: [],
  },
  mutations: {
    setListPokemon(state, payload) {
      state.listPokemon = payload;
    },
  },
  actions: {
    fetchPokemon(store) {
      axios.get('https://pokeapi.co/api/v2/pokemon').then((response) => {
          store.commit("setListPokemon", response.data.results);
      });
  },
  },

  modules: {},
});
