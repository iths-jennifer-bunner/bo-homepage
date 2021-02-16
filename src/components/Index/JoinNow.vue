<template>
  <div
    class="fit row wrap justify-evenly content-center items-center   template-hight"
  >
    <div
      class=" col-md-6 col-lg-6 col-sm-12 col-xs-12 max-width-horizontal q-pb-sm"
    >
      <div class="text-weight-bold text-h3 q-pb-xl">
        {{ $t("joinNow.text") }}
      </div>
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
        src="~assets/images/archipelago1.jpg"
        alt="archipelago"
        class="q-mr-xs "
        :style="
          screenWidth > $q.screen.sizes.sm
            ? 'height: 500px; width: 234px;'
            : 'max-height:500px; max-width: 90px;'
        "
      />
      <q-img
        src="~assets/images/rauk1.jpg"
        alt="man on rauk"
        class="q-mr-xs"
        :style="
          screenWidth > $q.screen.sizes.sm
            ? 'height: 500px; width: 234px;'
            : 'max-height:500px; max-width: 90px;'
        "
      />
      <q-img
        src="~assets/images/lightbulb.jpg"
        alt="light bulb"
        :style="
          screenWidth > $q.screen.sizes.sm
            ? 'height: 500px; width: 234px;'
            : 'height:160px; max-width: 90px;'
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
.text-h3
	color: $primary
.template-hight
  margin: 70px 0 70px 0
.max-width-horizontal
  max-width: 555px
</style>
