<template>
  <div
    class="col-md-12 col-lg-12 col-sm-12 col-xs-12 q-pb-md text-center row wrap justify-center items-center q-pt-xl"
  >
    <div class=" col-md-12 col-lg-12 col-sm-12 col-xs-12 template-height">
      <div class="text-h2 text-weight-medium q-pb-xl">
        {{ $t("global.headline") }}
      </div>
      <p>
        {{ $t("global.tap") }}
      </p>
      <p class="q-pb-xl">
        {{ $t("global.gain") }}
      </p>
      <q-btn
        no-caps
        elevated
        rounded
        color="accent"
        label="Join now"
        class="q-mb-md"
        size="lg"
        type="a" href="/aboutus#contact-form"
      />
    </div>

    <q-img
      src="~assets/images/hkopportunities2.jpg"
      alt="Hong kong"
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
</style>
