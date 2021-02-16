<template>
  <q-page class="q-pt-xs">
    <div class="q-pa-xl ">
      <EntrepeneursHeading />
    </div>
    <div class="background-primary q-pa-xl ">
      <Connect />
    </div>
    <div class="q-pa-xl ">
      <Support />
    </div>
    <div
      class="fit row wrap justify-center items-center content-center q-pb-lg"
    >
      <div
        class="background-secondary col-md-6 col-lg-6 col-sm-12 col-xs-12 q-pa-xl "
      >
        <TechPlatform />
      </div>
      <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12 q-pa-xl">
        <Gain />
      </div>
    </div>
    <div class="row justify-center q-pt-lg q-pb-lg  q-pa-xl">
      <Superstars />
    </div>
  </q-page>
</template>

<script lang="ts">
import Vue from "vue";

import EntrepeneursHeading from "../components/Entrepeneurs/EntrepeneursHeading.vue";
import Connect from "../components/Entrepeneurs/Connect.vue";
import Support from "../components/Entrepeneurs/Support.vue";
import TechPlatform from "../components/Entrepeneurs/TechPlatform.vue";
import Gain from "../components/Entrepeneurs/Gain.vue";
import Superstars from "../components/Entrepeneurs/Superstars.vue";

export default {
  name: "PageIndex",
  components: {
    EntrepeneursHeading,
    Connect,
    Support,
    TechPlatform,
    Gain,
    Superstars
  }
};
</script>

<style lang="sass" scoped>
.background-primary
  background-color: $primary
.background-secondary
  background-color: $secondary
// .container
//   height: 1000px
</style>
