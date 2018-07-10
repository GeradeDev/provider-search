<template>
  <div class="results-filter col-sm-12">
    <div class="col-sm-12 pl-0 filter-options-section">
        <div class="col-sm-6 pl-0 float-left">
            <label for="checkbox1">
                Network providers only?
            </label><br />
            <select id="ddlTypes" class="selectpicker">
                <option>Provider type</option>
                <option>Mustard</option>
                <option>Ketchup</option>
                <option>Relish</option>
            </select>
        </div>
        <div class="col-sm-6 pl-0 float-left">
            <label for="checkbox1">
                Name of provider
            </label><br />
            <input type="text" placeholder="Name of provider" />    
        </div>
    </div>
    
    <div class="col-sm-12 clear-fix filter-options-section">
         <div class="checkbox checkbox-medihelp">
            <label for="checkbox1">
                Network providers only?
            </label>
            <br />
            <input id="checkbox1" type="checkbox">
        </div>
    </div>

    <div class="col-sm-12 pl-0 clear-fix filter-options-section">
         <button v-on:click="refineSearch" class="btn btn-primary btn-refine">Refine search</button>
    </div>

  </div>
</template>

<script lang="ts">

import { mapGetters, mapActions } from 'vuex';
import Vue from 'vue';

export default Vue.extend({
  name: 'filter-results',
  components: {
  },
  computed: {
    ...mapGetters({
       "benefitoptions": "getBenefitOptions"
    })
  },
  methods: {
    ...mapActions({
       "refineSearch": "getProvidersForLocation"
    })
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

    .results-filter{
        padding: 15px;
        margin-bottom: 20px;
        border-bottom: 1px solid #ccc;
        background-color: #f3f3f3;
    }

    .filter-options-section{
        display: inline-block;
        margin-bottom: 20px;
    }

    .btn-refine{
        border-radius: 0;
    }

    .search-total{
        font-size: 12px;
        font-style:italic;
        float: right
    }

</style>