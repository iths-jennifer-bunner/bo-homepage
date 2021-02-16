<template>
  <div
    class="text-white fit row wrap justify-evenly items-center content-center  col-md-6 col-lg-6 col-sm-12 col-xs-12 q-pr-xm "
  >
    <div class="q-gutter-y-md meny" style="max-width: 400px">
      <q-tabs
        v-model="tab"
        mobile-arrows
        narrow-indicator
        indicator-color="accent1"
        active-color="accent"
        shrink
        inline-label
        active-bg-color="none"
      >
        <q-item
          name="entrepeneurs"
          to="/entrepeneurs"
          label="Entrepeneurs"
          no-caps
          active-class="my-meny-link"
        >
          <q-item-section>{{ $t("entrepreneurs") }}</q-item-section>
        </q-item>

        <q-btn-dropdown
          :ripple="false"
          no-caps
          flat
          auto-close
          label="Investors"
        >
          <q-list style="background-color: #02023E;" class="text-white">
            <q-item
              to="/leadinvestors"
              @click="tab = 'leadinvestors'"
              active-class="my-meny-link"
            >
              <q-item-section to>PE &amp; VC Investors</q-item-section>
            </q-item>
            <q-item
              name="institutional"
              to="/institutionalinvestors"
              @click="tab = 'institutionalinvestors'"
              active-class="my-meny-link"
            >
              <q-item-section>Institutional Investors</q-item-section>
            </q-item>
            <q-item
              name="individual"
              to="/individualinvestors"
              @click="tab = 'individualinvestors'"
              active-class="my-meny-link"
            >
              <q-item-section>Individual Investors</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-item
          name="aboutus"
          to="/aboutus"
          label="About"
          no-caps
          active-class="my-meny-link"
          class="q-pl-none"
        >
          <q-item-section>About</q-item-section>
        </q-item>

        <q-btn
          name="login"
          rounded
          color="accent"
          unelevated
          label="Log in"
          no-caps
          active-class="my-meny-link"
          class=""
          type="a" href="/aboutus#contact-form"
        />
      </q-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: "entrepeneurs"
    };
  }
};
</script>

<style lang="sass" scoped>
.text-white
  color: white
.my-meny-link
  color: #FF6D70

.right-icon
  display: none
</style>
