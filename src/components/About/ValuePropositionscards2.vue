<template>
  <div class=" col-md-6 col-lg-6 col-sm-12 col-xs-12 ">
    <q-intersection once transition="scale" class="example-item ">
      <div
        class="text-left column wrap justify-around items-start content-center my-card col-md-6 col-lg-6 col-sm-12 col-xs-12 q-pb-xl"
      >
        <div class="text-weight-bold text-h4 primary q-py-xl">
          {{ $t("aboutCards.tech") }}
        </div>
        <p class=" primary text-h6 q-pb-xl">
          {{ $t("aboutCards.techText") }}
        </p>
        <q-img
          src="~assets/images/map.jpg"
          :style="
            screenWidth > $q.screen.sizes.sm
              ? 'height: 300px; width: 440px;'
              : 'max-height: 440px; max-width: 440px;'
          "
        />
      </div>

      <div
        class="text-left column wrap justify-around items-start content-center my-card col-md-6 col-lg-6 col-sm-12 col-xs-12 q-pt-xl"
      >
        <div class="text-left text-weight-bold text-h4 primary q-pb-xl">
          {{ $t("aboutCards.climate") }}
        </div>
        <p class=" primary text-h6 q-pb-xl ">
          {{ $t("aboutCards.climateText") }}
        </p>
        <q-img
          src="~assets/images/windmill.jpg"
          :style="
            screenWidth > $q.screen.sizes.sm
              ? 'height:300px; width: 440px;'
              : 'max-height: 440px; max-width: 440px;'
          "
        />
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
.my-card
  max-width: 440px
  max-height: 700px
.primary
	color: $primary
</style>
