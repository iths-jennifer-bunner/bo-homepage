<template>
  <div
    class="col-md-12 col-lg-12 col-sm-12 col-xs-12 q-pb-md text-center row wrap justify-center items-center q-pt-xl"
  >
    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 max-width">
      <div class="text-h2 text-weight-bold q-pb-md">
        {{ $t("trustedPartner.headline") }}
      </div>
      <p class="text-h6 ">
        {{ $t("trustedPartner.text") }}
      </p>
    </div>
    <q-img
      src="~assets/images/stockcurve4.jpg"
      alt="stockcurve"
      class="q-mt-xl"
      :style="
        screenWidth > $q.screen.sizes.sm
          ? 'height: 390px; max-width: 1260px'
          : 'max-height:390px; max-width: 1260px;'
      "
    />
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
.max-width
  max-width: 1260px
</style>
