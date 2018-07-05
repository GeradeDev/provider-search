<template>
  <div class="home">
    <LeftSide v-if="showLeftPanel"></LeftSide>
    <ProviderSearchMap name="provider-search"></ProviderSearchMap>

    <Loading></Loading>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import ProviderSearchMap from '@/components/ProviderMap.vue';
import LeftSide from '@/components/LeftPanel.vue';
import Loading from '@/components/Loading.vue';

export default Vue.extend({
  name: 'home',
  components: {
    ProviderSearchMap,
    LeftSide,
    Loading,
  },
  computed: {
    ...mapGetters({
       LeftPanelStatus: "getLeftPanelStatus"
    }),
    showLeftPanel () {
      return this.LeftPanelStatus;
    }
  }
});
</script>
