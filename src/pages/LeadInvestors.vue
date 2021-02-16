<template>
  <q-page class="q-pt-xs ">
    <div class="q-pa-xl">
      <LeadInvHeader />
    </div>
    <div class="background-primary q-pa-xl">
      <SetUpSPV />
    </div>
    <div class="q-pa-xl">
      <EndToEnd />
    </div>
    <div class="fit row wrap justify-center items-center content-center ">
      <div
        class="background-secondary q-pa-xl col-md-6 col-lg-6 col-sm-12 col-xs-12"
      >
        <FindPartners />
      </div>
      <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12 q-pa-xl">
        <FullyDigitalized />
      </div>
    </div>
    <div class="row justify-around q-pa-xl ">
      <SupportInv />
    </div>
  </q-page>
</template>

<script lang="ts">
import Vue from "vue";

import LeadInvHeader from "../components/LeadPE/LeadInvHeader.vue";
import SetUpSPV from "../components/LeadPE/SetUpSPV.vue";
import EndToEnd from "../components/LeadPE/EndToEnd.vue";
import FullyDigitalized from "../components/LeadPE/FullyDigitalized.vue";
import SupportInv from "../components/LeadPE/SupportInv.vue";
import FindPartners from "../components/LeadPE/FindPartners.vue";

export default {
  name: "PageIndex",
  components: {
    LeadInvHeader,
    SetUpSPV,
    EndToEnd,
    FullyDigitalized,
    SupportInv,
    FindPartners
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
