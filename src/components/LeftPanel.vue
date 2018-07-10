<template>
  <div class="left-panel">
    <div class="left-panel-header">
      <h4>Providers</h4>
    </div>

    <div class="wait" v-if="showLoading">
      <i class="fa fa-circle-notch fa-spin"></i>
      <br />
      <span>Pleas wait...</span>
    </div>

    <ResultsFilter v-if="!showLoading"></ResultsFilter>

    <div class="provider-search-results col-sm-12" v-if="!showLoading">
        <Results></Results>
    </div>
    
  </div>
</template>

<script lang="ts">

import { mapGetters } from 'vuex';
import Vue from 'vue';

import ResultsFilter from '@/components/Filter.vue';
import Results from '@/components/ProviderSearchResults.vue';

export default Vue.extend({
  name: 'providers',
  components: {
    Results,
    ResultsFilter
  },
  computed: {
    ...mapGetters({
       GetWaitStatus: "getLoadingStatus",
    }),
    showLoading () {
      return this.GetWaitStatus;
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .left-panel {
        height: 100%;
        width: 25%;
        background: white;
        display: block;
        z-index: 1;
        position: relative;
        overflow-y: scroll;
        overflow-x: hidden;
        float: left;
    }

    .left-panel-header{
      background: linear-gradient(60deg,#8cc63f,#8cc63f);
      box-shadow: 0 12px 20px -10px rgba(140,198,63,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(140,198,63,.2);
      padding: 18px;
    }

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background: #8cc63f;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

</style>