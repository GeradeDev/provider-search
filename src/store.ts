import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

import providerQueries from '../src/integrations/api'
import { MedihelpOptions } from '../src/model/BenefitOptions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isIntializing: true,
    lat:-30.559482,
    lng:22.937505999999985,
    showLeft: false,
    isLoading: false,
    providers: [],
    showBenefitOptions: false,
    filterProviderType: "",
    filterProviderName: "",
    nonNetworkOnly: false,
    Benefits: []
  },
  getters: {
    getIntilizingStatus: state => {
      return state.isIntializing;
    },
    getLeftPanelStatus: state => {
      return state.showLeft;
    },
    getLoadingStatus: state => {
      return state.isLoading;
    },
    getProviders: state => {
      return state.providers;
    },
    getOptionsStatus: state => {
      return state.showBenefitOptions;
    },
    getMedihelpOptions: state => {
      return state.Benefits;
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
    },
    stopAppInitialization (state) {
      state.isIntializing = false;
    },
    toggleOptionsStatus: state => {
      if(state.showBenefitOptions)
        state.showBenefitOptions = false;
      else
        state.showBenefitOptions = true;
    },
    setOptions(state, payload) {
      state.Benefits = payload.options;
    }
  },
  actions: {
    getBenefitOptions({commit, state}) {
      let options = new MedihelpOptions().getAllOptions();

      console.log(options);

      commit("setOptions", { options: options});
    },
    getProvidersForLocation ({commit, state}) {
      commit("toggleLoadingStatus");
      
      const query = providerQueries.Search(state.lat, state.lng).query;
      
      axios.get(query)
      .then(function (response) {

          commit("setProviderSeachResult", {results: response.data });

      })
      .catch(function (error) {
          // handle error
          console.log(error);
      })
      .then(function () {
        commit("toggleLoadingStatus");
      });
    },
    stopInit({commit}) {
      setTimeout(function () {
        commit("stopAppInitialization");
      }, 3000);
    },
    showHideOptionMenu ({commit, state}){
      commit("toggleOptionsStatus");
    }
  },
});
