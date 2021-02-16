<template>
  <!-- <q-layout view="lHh Lpr lff"> -->
  <q-layout view="hhH lpr fff">
    <q-header elevated class="linegrad ">
      <q-toolbar
        class=" fit row wrap justify-evenly items-center content-center col-md-6 col-lg-6 col-sm-12 col-xs-12 q-pr-lg"
      >
        <q-toolbar-title>
          <!-- <div>
            <q-btn
              to="/"
              round
              unelevated
              size="xl"
              class="text-italic text-weight-bold logo"
              >Bo</q-btn
            >
          </div> -->
        </q-toolbar-title>
        <div
          class=" fit row wrap justify-between items-center content-center  col-md-6 col-lg-6 col-sm-12 col-xs-12 "
        >
          <div>
            <q-btn
              to="/"
              round
              unelevated
              size="xl"
              class="text-italic text-weight-bold logo"
              >Bo</q-btn
            >
          </div>
          <div class=""><NavMenu /></div>
        </div>
      </q-toolbar>

      <!-- <LanguageSwitcher /> -->
    </q-header>

    <q-footer elevated class="linegrad">
      <q-toolbar>
        <q-toolbar-title class="row wrap justify-between "
          ><q-btn
            to="/"
            no-caps
            unelevated
            size="xl"
            class="text-italic text-weight-bold"
            >BoCapital</q-btn
          >
          <div class="q-pr-sm">
            <LanguageSwitcher /></div
        ></q-toolbar-title>
      </q-toolbar>
      <div><Footer /></div>
    </q-footer>

    <!-- <q-page-container class="q-pa-xl"> -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import EssentialLink from "components/EssentialLink.vue";
import Footer from "components/Footer/Footer.vue";
import NavMenu from "components/Navbar/NavMenu.vue";
import LanguageSwitcher from "components/Navbar/LanguageSwitcher.vue";

export default {
  name: "MainLayout",
  // components: { EssentialLink },
  components: { Footer, NavMenu, LanguageSwitcher },
  data() {
    return {};
  }
};
</script>

//
<style lang="sass" scoped>
.linegrad
  background-image:  linear-gradient(to right, #08BDCE , #02023E 80%)
.my-meny-link
  color: #FF6D70
  background: #02023E
// .logo
//   padding: 0 0 0 50px
</style>
