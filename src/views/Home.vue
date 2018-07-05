<template>
  <div class="home">
    <LeftSide v-if="showLeftPanel"></LeftSide>
    <ProviderSearchMap name="provider-search"></ProviderSearchMap>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import ProviderSearchMap from '@/components/ProviderMap.vue';
import LeftSide from '@/components/ProviderResults.vue';

export default Vue.extend({
  name: 'home',
  components: {
    ProviderSearchMap,
    LeftSide,
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
