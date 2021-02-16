<template>
  <q-page class="q-pt-xs">
    <div class="q-pa-xl">
      <WhyUs />
    </div>
    <div class="q-pa-xl background-primary">
      <TechInfrastructure />
    </div>

    <div class=" q-pa-xl ">
      <OurTeam />
    </div>

    <div class="row section">
      <div class="background-secondary  container align q-mb-xs ">
        <Trust />
      </div>

      <div
        class="q-pl-xl wrap row justify-evenly content-center item-stretch mobile"
      >
        <div class="q-px-lg wrap column">
          <ValuePropositionsCards />
        </div>
        <div class="q-px-lg wrap column">
          <ValuePropositionscards2 />
        </div>
      </div>
    </div>

    <div class="q-pa-xl" id="contact-form">
      <KeepInTouch />
    </div>
  </q-page>
</template>

<script lang="ts">
import Vue from "vue";

import WhyUs from "../components/About/WhyUs.vue";
import TechInfrastructure from "../components/About/TechInfrastructure.vue";
import Trust from "../components/About/Trust.vue";
import ProductTypeCards from "../components/About/ProductTypeCards.vue";
import ProductTypeCardspt2 from "../components/About/ProductTypeCardspt2.vue";
import OurTeam from "../components/About/OurTeam.vue";
import KeepInTouch from "../components/About/KeepInTouch.vue";
import ValuePropositionsCards from "../components/About/ValuePropositionsCards.vue";
import ValuePropositionscards2 from "../components/About/ValuePropositionscards2.vue";

export default {
  name: "PageIndex",
  components: {
    WhyUs,
    TechInfrastructure,
    Trust,
    // ProductTypeCards,
    // ProductTypeCardspt2,
    OurTeam,
    KeepInTouch,
    ValuePropositionsCards,
    ValuePropositionscards2
  }
};
</script>

<style lang="sass" scoped>
.background-primary
  background-color: $primary
.background-secondary
  background-color: $secondary
.primary
  color: $primary
@media only screen and (max-width: 767px)
  .q-pl-xl
    padding-left: none !important
  .mobile
    padding: 0px 0px 0px 0px !important
</style>
