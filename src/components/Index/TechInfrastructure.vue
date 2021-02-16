<template>
  <div
    class="fit row wrap justify-center items-center content-center col-md-6 col-lg-6 col-sm-12 col-xs-12"
  >
    <div
      class="background-secondary column wrap justify-start items-start content-start  text-left q-pa-md col-md-6 col-lg-6 col-sm-12 col-xs-12 q-mb-xs"
    >
      <div>
        <div class="text-h2 text-weight-bold q-pb-lg">
          {{ $t("techInfra.headline") }}
        </div>
        <p class="text-h6 q-pb-lg ">
          {{ $t("techInfra.text") }}
        </p>
      </div>
      <div>
        <q-btn
          to="/aboutus"
          no-caps
          elevated
          rounded
          color="accent"
          label="Learn more"
          size="lg"
        />
      </div>
    </div>
    <div
      class=" wrap row justify-between items-center content-center col-md-6 col-lg-6 col-sm-12 col-xs-12 q-ml-xs"
    >
      <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
        <q-img
          src="~assets/images/bluetech.jpg"
          alt="blu light streaks"
          :style="
            screenWidth > $q.screen.sizes.sm
              ? 'height: 390px; max-width: 348px;'
              : 'max-height:390px; max-width: 344px;'
          "
          class=" q-mb-xs"
        />
      </div>
      <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
        <q-img
          src="~assets/images/bluecode.jpg"
          alt="source code"
          :style="
            screenWidth > $q.screen.sizes.sm
              ? 'height: 390px; max-width: 348px;'
              : 'max-height:390px; max-width: 344px;'
          "
          class=" q-mb-xs"
        />
      </div>
    </div>
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
.text-h2, p
	color: $accent1
.background-secondary
	background-color: $secondary
	height: 390px
	max-width: 545px
</style>
