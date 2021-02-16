<template>
  <q-page class="q-pt-xs">
    <div class="row justify-center q-pt-lg q-pb-lg  q-pa-xl">
      <IndividualInv />
    </div>
    <div class="background-primary q-pa-xl">
      <Diversify />
    </div>
    <div class="q-pa-xl ">
      <Access />
    </div>
    <div
      class="fit row wrap justify-center items-center content-center col-md-6 col-lg-6 col-sm-12 col-xs-12 "
    >
      <div
        class="background-secondary col-md-6 col-lg-6 col-sm-12 col-xs-12 q-pa-xl"
      >
        <Build />
      </div>
      <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12 q-px-xl">
        <BeAShareHolder />
      </div>
    </div>
    <div
      class="row justify-center q-px-xl q-pb-xl col-md-6 col-lg-6 col-sm-12 col-xs-12"
    >
      <Opportunities />
    </div>
  </q-page>
</template>

<script lang="ts">
import Vue from "vue";

import IndividualInv from "../components/IndInvestors/IndividualInv.vue";
import Diversify from "../components/IndInvestors/Diversify.vue";
import Access from "../components/IndInvestors/Access.vue";
import Build from "../components/IndInvestors/Build.vue";
import BeAShareHolder from "../components/IndInvestors/BeAShareHolder.vue";
import Opportunities from "../components/IndInvestors/Opportunities.vue";

export default {
  name: "PageIndex",
  components: {
    IndividualInv,
    Diversify,
    Access,
    Build,
    BeAShareHolder,
    Opportunities
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
