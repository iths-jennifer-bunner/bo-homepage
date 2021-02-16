<template>
  <div
    class="text-center col-md-6 col-lg-6 col-sm-12 col-xs-12 template-height"
  >
    <q-intersection once transition="scale" class="example-item "
      ><div class="text-h2 text-weight-medium q-pb-xl">
        {{ $t("valuePropositions.headline") }}
      </div>
      <div
        class="fit row wrap q-gutter-md justify-evenly items-stretch content-center text-center col-sm-12 col-md-6 col-lg-6 col-xs-12 "
      >
        <q-card square class=" my-card no-box-shadow">
          <q-img
            src="~assets/images/pitch.png"
            :style="
              screenWidth > $q.screen.sizes.sm
                ? 'height: 200px; width: 300px;'
                : 'max-height:200px; max-width: 250px;'
            "
          />
          <q-card-section>
            <div class="text-h6 text-weight-bold  accent">
              {{ $t("valuePropositions.pitch") }}
            </div>
          </q-card-section>
          <q-card-section class="text-body1 primary q-pt-none q-px-sm"
            ><p>
              {{ $t("valuePropositions.pitchText") }}
            </p></q-card-section
          >
        </q-card>
        <q-card square class="my-card no-box-shadow">
          <q-img
            src="~assets/images/conferencecall.png"
            :style="
              screenWidth > $q.screen.sizes.sm
                ? 'height: 200px; width: 300px;'
                : 'max-height:200px; max-width: 250px;'
            "
          />
          <q-card-section>
            <div class="text-h6 text-weight-bold accent">
              {{ $t("valuePropositions.invest") }}
            </div>
          </q-card-section>
          <q-card-section class="text-body1 primary q-pt-none q-px-sm"
            ><p>
              {{ $t("valuePropositions.investText") }}
            </p></q-card-section
          >
        </q-card>
        <q-card square class="my-card no-box-shadow ">
          <q-img
            src="~assets/images/stockprice1.png"
            contain
            :style="
              screenWidth > $q.screen.sizes.sm
                ? 'height: 200px; width: 300px;'
                : 'max-height:200px; max-width: 250px;'
            "
          />
          <q-card-section>
            <div class="text-h6  text-weight-bold accent">
              {{ $t("valuePropositions.engage") }}
            </div>
          </q-card-section>
          <q-card-section class="text-body1 primary q-pt-none q-px-sm"
            ><p>
              {{ $t("valuePropositions.engageText") }}
            </p></q-card-section
          >
        </q-card>

        <q-card square class="my-card elevated-border no-box-shadow">
          <q-img
            src="~assets/images/agreement1.png"
            contain
            :style="
              screenWidth > $q.screen.sizes.sm
                ? 'height: 200px; width: 300px;'
                : 'max-height:200px; max-width: 250px;'
            "
          />
          <q-card-section>
            <div class="text-h6 text-weight-bold accent">
              {{ $t("valuePropositions.structure") }}
            </div>
          </q-card-section>
          <q-card-section class="text-body1 primary q-pt-none q-px-sm"
            ><p>
              {{ $t("valuePropositions.structureText") }}
            </p></q-card-section
          >
        </q-card>
      </div>
    </q-intersection>
  </div>
</template>

<script>
export default {
  data() {
    return {
      screenWidth: this.$q.screen.width
    };
  },
  watch: {
    "$q.screen.width"(val) {
      this.screenWidth = val;
    }
  }
};
</script>

<style lang="sass" scoped>
p, .text-h2
	color: $primary
.primary
	color: $primary
.accent
  color: $accent
.my-card
  max-width: 300px
  max-height: 500px
.template-height
</style>
