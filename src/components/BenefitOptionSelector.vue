<template>
  <div class="benoptions">
    <div class="option-avatar">
        <img src="https://www.medihelp.co.za/App_Themes/Branding/Images/product-icons/icn-dp1.png" />
    </div>
    <div class="option-details">
        <div>Dimension Prime 3</div>
    </div>
    <div class="options-selector-menu">
        <div class="fa fa-ellipsis-v" v-on:click="toggleOptionMenu"></div>
    </div>
    <ul class="dropdown benefit-options" v-if="showOptionsMenu">
        <li v-for="(bo, index) in MedihelpOptions" :key="index" value="">{{bo.Name}}</li>
    </ul>

  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';

export default Vue.extend({
  name: 'option-selector',
  components: {
  },
  created () {
      this.$store.dispatch("getBenefitOptions");
  },
  computed: {
    ...mapGetters({
       "showOptionsMenu": "getOptionsStatus",
       "MedihelpOptions":"getMedihelpOptions"
    })
  },
  methods: {
      ...mapActions({
       "toggleOptionMenu": "showHideOptionMenu"
    })
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .benoptions {
        min-width: 15%;
        background: white;
        padding: 9px;
        position: relative;
        z-index: 1;
        float: left;
        top: 30px;
        left: 30px;
        display: flex;
        box-shadow: 0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)!important;
    }

    .benoptions .option-avatar{
        display: inline-flex;
    }

    .benoptions .option-avatar img {
        width:50px;
        height:50px;
        margin-right: 10px;
    }

    .option-details{
        height:50px;
        font-size: 16px;
        font-weight: 500;
        align-items: center;
        display: inline-flex;
    }

    .options-selector-menu{
        width: 50px;
        height: 50px;
        text-align: center;
        margin-left: 20px;
        border-radius: 50%;
        cursor: pointer;
    }

    .options-selector-menu:hover{
        background: #ccc;
    }


    .fa-ellipsis-v{
        font-size: 24px;
        padding-top: 12px;
    }

    .benefit-options{
        position: absolute;
        top: 110%;
        left: 0;
        right: 0;
        padding-left: 0px;
        list-style: none;
        background: #fff;
        font-weight: normal;
        pointer-events: none;
        transition: all 0.3s ease-out;
    }

    .benefit-options li:hover{
        background: #ccc;
        color: #fff;
    }

    .benefit-options.active{
        opacity: 0;
    }

    .benefit-options li {
        padding: 12px;
        border-bottom: 1px solid #ccc;
    }

    .benefit-options:before {
        border-width: 0 8px 8px 8px;
        border-style: solid;
        border-color: rgba(0,0,0,0.1) transparent;    
    }

</style>