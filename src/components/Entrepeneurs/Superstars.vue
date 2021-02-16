<template>
  <div
    class="fit row wrap justify-evenly items-center content-center template-height  "
  >
    <div
      class=" col-md-6 col-lg-6 col-sm-12 col-xs-12 max-width-vertical q-pb-sm"
    >
      <div class="text-h2 text-weight-medium q-pb-xl">
        {{ $t("superstars.headline") }}
      </div>
      <p class="q-pb-xl">
        {{ $t("superstars.text") }}
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
    <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12 no-wrap row">
      <q-img
        src="~assets/images/smallboats.jpg"
        alt="lightbulb"
        class="q-mr-xs"
        :style="
          screenWidth > $q.screen.sizes.sm
            ? 'height: 500px; width: 234px;'
            : 'max-height:500px; max-width: 90px;'
        "
      />
      <q-img
        src="~assets/images/eiffel.jpg"
        alt="eiffel tower"
        class="q-mr-xs"
        :style="
          screenWidth > $q.screen.sizes.sm
            ? 'height: 500px; width: 234px;'
            : 'max-height:500px; max-width: 90px;'
        "
      />
      <q-img
        src="~assets/images/rocket.jpg"
        alt="rocket"
        :style="
          screenWidth > $q.screen.sizes.sm
            ? 'height: 500px; width: 234px;'
            : 'max-height:500px; max-width: 90px;'
        "
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

.text-h2, p
	color: $primary
::v-deep .max-width-vertical
  max-width: 555px
</style>
