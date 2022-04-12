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
      axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=2855be0bd75a436cb0f78dd5e74313cf').then((response) => {
          store.commit("setListNews", response.data.articles);
      });
  },
  },

  modules: {},
});
