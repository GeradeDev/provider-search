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

    <div class="provider-search-results col-sm-12" v-if="!showLoading">
        <div class="provider-item" v-for="(p, index) in getProviders" :key="index">
          <p>{{p.ProviderName}}</p>
          <div class="col-sm-6 float-left pl-0">
            <div class="provider-item-detail">
              <i class="fa fa-info-circle"></i> 
              <span>{{p.ProviderNumber}}</span>
            </div>      
            <div class="provider-item-detail">
              <i class="fa fa-compass"></i> 
              <span>Provider address</span>
            </div>   
          </div>
          <div class="col-sm-6 float-left pl-0">
              <div class="provider-item-detail">
              <i class="fa fa-phone"></i> 
              <span>{{p.ProviderTelNo}}</span>
            </div>   
            <div class="provider-item-detail">
              <i class="fa fa-clipboard-check"></i> 
              <span>{{p.ProviderNetwork}}</span>
            </div> 
          </div> 
        </div> 
    </div>
    
  </div>
</template>

<script lang="ts">

import { mapGetters } from 'vuex';
import Vue from 'vue';

export default Vue.extend({
  name: 'providers',
  components: {
  },
  computed: {
    ...mapGetters({
       GetWaitStatus: "getLoadingStatus",
       providers: "getProviders"
    }),
    showLoading () {
      return this.GetWaitStatus;
    },
    getProviders () {
      return this.providers;
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
    }

    .left-panel-header{
      background-color: #3F51B5;
      padding: 18px;
    }

    .provider-search-results{
      padding: 15px;
    }

    .provider-search-results .provider-item{
      padding: 15px;
      min-height: 115px;
    }

    .provider-search-results .provider-item p {
       margin: 0px;
    }

    .provider-item .provider-item-detail:first-child{
        margin-top: 10px;
    }

    .provider-item-detail{
      margin-bottom: 5px;
      color:#8c8c8c;
    }
    
    .provider-item-detail i {
      width: 15px;
    }

     .provider-item-detail span {
        margin-left: 15px;
    }


</style>