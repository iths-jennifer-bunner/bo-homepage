<template>
  <q-page>
    <div>
      <!-- <ParralaxVideo /> -->
      <HeaderVideo />
    </div>
    <div class=" q-pa-xl ">
      <JoinNow />
    </div>

    <div class=" q-pa-xl q-mb-xl background-primary ">
      <WhoWeAre />
    </div>

    <div class="row  section">
      <div class="background-secondary container align q-mb-xs">
        <ValueProp />
      </div>

      <div
        class="q-pl-xl wrap row justify-evenly content-center item-stretch mobile"
      >
        <div class="q-px-lg wrap column">
          <ProductTypeCards />
        </div>
        <div class="q-px-lg wrap column ">
          <ProductTypeCardspt2 />
        </div>
      </div>
    </div>

    <div
      class="row justify-center  q-pa-xl col-md-12 col-lg-12 col-sm-12 col-xs-12"
    >
      <TrustedPartner />
    </div>
    <div
      class="row justify-center text-center q-px-xl q-pb-xl col-md-6 col-lg-6 col-sm-12 col-xs-12 bottom"
    >
      <TechInfrastructure />
    </div>
  </q-page>
</template>

<script lang="ts">
import Vue from "vue";

import HeaderVideo from "../components/Index/HeaderVideo.vue";
import JoinNow from "../components/Index/JoinNow.vue";
import WhoWeAre from "../components/Index/WhoWeAre.vue";
import ValueProp from "../components/Index/ValueProp.vue";
import ProductTypeCards from "../components/Index/ProductTypeCards.vue";
import ProductTypeCardspt2 from "../components/Index/ProductTypeCardspt2.vue";
import TrustedPartner from "../components/Index/TrustedPartner.vue";
import TechInfrastructure from "../components/Index/TechInfrastructure.vue";
import ParralaxVideo from "../components/Index/ParralaxVideo.vue";

export default {
  name: "PageIndex",
  components: {
    HeaderVideo,
    JoinNow,
    WhoWeAre,
    ValueProp,
    ProductTypeCards,
    ProductTypeCardspt2,
    TrustedPartner,
    TechInfrastructure
    // ParralaxVideo
  }
};
</script>

<style lang="sass" scoped>
// .section
//   display: flex
//   align-items: center
// .align
//   align-self: start
.background-primary
  background-color: $primary
.background-secondary
  background-color: $secondary
// .container
//   height: 1000px
//   max-width: 458px
.text-h1
  color: $accent1
.template-height
  margin: 70px 0 70px 0

@media screen and (max-width: 767px)
  .bottom
    padding: none

  .q-pl-xl
    padding-left: none !important
  .mobile
    padding: 0px 0px 0px 0px !important
</style>
