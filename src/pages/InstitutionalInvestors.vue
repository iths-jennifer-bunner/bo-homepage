<template>
  <q-page class="q-pt-xs">
    <div class=" q-pa-xl">
      <InstCoInv />
    </div>
    <div class="background-primary  q-pa-xl ">
      <ImpactInv />
    </div>
    <div class=" q-pa-xl ">
      <Diversify />
    </div>
    <div
      class="fit row wrap justify-center items-center content-center  q-pb-lg"
    >
      <div
        class="background-secondary col-md-6 col-lg-6 col-sm-12 col-xs-12 q-pa-xl"
      >
        <InstInvestors />
      </div>
      <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12 q-pa-xl">
        <IndInvestors />
      </div>
    </div>
    <div class="row justify-center q-pt-lg q-pb-lg  q-pa-xl">
      <SuppInv />
    </div>
  </q-page>
</template>

<script lang="ts">
import Vue from "vue";

import InstCoInv from "../components/Institutional/InstCoInv.vue";
import ImpactInv from "../components/Institutional/ImpactInv.vue";
import Diversify from "../components/Institutional/Diversify.vue";
import InstInvestors from "../components/Institutional/InstInvestors.vue";
import IndInvestors from "../components/Institutional/IndInvestors.vue";
import SuppInv from "../components/Institutional/SuppInv.vue";

export default {
  name: "PageIndex",
  components: {
    InstCoInv,
    ImpactInv,
    Diversify,
    InstInvestors,
    IndInvestors,
    SuppInv
  }
};
</script>

<style lang="sass" scoped>
.background-primary
  background-color: $primary
.background-secondary
  background-color: $secondary
.container
  height: 1000px
</style>
