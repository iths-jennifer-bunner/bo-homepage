<template>
  <div
    class="fit row wrap justify-evenly items-center content-center col-md-6 col-lg-6 col-sm-12 col-xs-12 template-height"
  >
    <q-img
      src="~assets/images/hktowers2.jpg"
      alt="hong kong towers"
      :style="
        screenWidth > $q.screen.sizes.sm
          ? 'height: 520px; width: 555px;'
          : 'max-height:520px; max-width: 555px;'
      "
    />

    <div
      class="col-6 col-6 col-md-6 col-lg-6 col-sm-12 col-xs-12 max-width-horizontal"
    >
      <div class="text-h2 text-weight-medium q-pb-md">
        {{ $t("institutionalInvestors.headline") }}
      </div>
      <p>
        {{ $t("institutionalInvestors.local") }}
      </p>
      <p class="q-pb-md">
        {{ $t("institutionalInvestors.gain") }}
      </p>

      <q-btn
        no-caps
        elevated
        rounded
        color="accent"
        label="Join now"
        size="lg"
        type="a" href="/aboutus#contact-form"
      />
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
p
	color: $primary
.text-h2
	color: $primary

.max-width-horizontal
  max-width: 555px
</style>
