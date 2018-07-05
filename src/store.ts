import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lat:-30.559482,
    lng:22.937505999999985,
    showLeft: false,
    isLoading: false,
    providers: []
  },
  getters: {
    getLeftPanelStatus: state => {
      return state.showLeft;
    },
    getLoadingStatus: state => {
      return state.isLoading;
    },
    getProviders: state => {
      return state.providers;
    }
  },
  mutations: {
    updatelocation (state, payload){
      state.lat = payload.latitude;
      state.lng = payload.longitude;
    },
    toggleLeftPanelStatus (state) {
      if(state.showLeft)
        state.showLeft = false;
      else
        state.showLeft = true;
    },
    toggleLoadingStatus (state) {
      if(state.isLoading)
        state.isLoading = false;
      else
        state.isLoading = true;
    },
    setProviderSeachResult (state, payload) {
      state.providers = payload.results;
    }
  },
  actions: {
    getProvidersForLocation ({commit}) {
      commit("toggleLoadingStatus");

      setTimeout(function () { 
        let searchResults = ["Number 1", "Number 2", "Number 3", "Number 4"];

        commit("setProviderSeachResult", {results: searchResults });

        commit("toggleLoadingStatus");
      }, 4000)

    }
  },
});
