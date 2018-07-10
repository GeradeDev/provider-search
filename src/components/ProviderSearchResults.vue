<template>
  <div class="results">
      <div class="provider-item" v-for="(p, index) in getProviders" :key="index">
          <p class="provider-detail-name col-sm-12">{{p.ProviderName}}</p>
          <p class="provider-detail-name col-sm-12">{{p.ProviderType}}</p>
          <div class="col-sm-6 float-left">
            <div class="provider-item-detail">
              <i class="fa fa-info-circle"></i> 
              <span>{{p.ProviderNumber}}</span>
            </div>      
            <div class="provider-item-detail">
              <span style="margin:0px !important;">{{p.ProviderNetwork == 'true' ? 'This is a network provider.' : 'This is not a network provider.'}}</span>
            </div>   
          </div>
          <div class="col-sm-6 float-left">
              <div class="provider-item-detail">
              <i class="fa fa-phone"></i> 
              <span>{{p.ProviderTelNo}}</span>
            </div>   
            <div class="provider-item-detail">
              <a href="https://www.google.com/" target="_blank">Click here to view on map</a>
            </div> 
          </div> 
          <div class="clear-fix"></div>
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
       providers: "getProviders"
    }),
    getProviders () {
      return this.providers;
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

 .provider-search-results{
      padding: 0px;
    }

    .provider-search-results .provider-item{
      min-height: 115px;
      border-bottom: 1px solid #ccc;
      margin-bottom: 25px;
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