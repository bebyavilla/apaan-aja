import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listNews: [],
  },
  mutations: {
    setListNews(state, payload) {
      state.listNews = payload;
    },
  },
  actions: {
    fetchNews(store) {
      axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=059235e02d4640aa95afb88f836e0f26').then((response) => {
          store.commit("setListNews", response.data.articles);
      });
  },
  },

  modules: {},
});