<template>
  <div
    class="fit row wrap justify-evenly items-center content-center template-height"
  >
    <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12 no-wrap row">
      <q-img
        src="~assets/images/growth.jpg"
        alt="plant in hands"
        class="q-mr-xs"
        :style="
          screenWidth > $q.screen.sizes.sm
            ? 'height: 500px; width: 234px;'
            : 'max-height:500px; max-width: 90px;'
        "
      />
      <q-img
        src="~assets/images/trees.jpg"
        alt="tree"
        class="q-mr-xs"
        :style="
          screenWidth > $q.screen.sizes.sm
            ? 'height: 500px; width: 234px;'
            : 'max-height:500px; max-width: 90px;'
        "
      />
      <q-img
        src="~assets/images/ocean.jpg"
        alt="ocean"
        :style="
          screenWidth > $q.screen.sizes.sm
            ? 'height: 500px; width: 234px;'
            : 'max-height:500px; max-width: 90px;'
        "
      />
    </div>
    <div
      class=" col-md-6 col-lg-6 col-sm-12 col-xs-12 max-width-horizontal q-pt-sm"
    >
      <div class="text-h2 text-weight-medium q-pb-xl">
        {{ $t("individualInvestors.headline") }}
      </div>

      <p>
        {{ $t("individualInvestors.invest") }}
      </p>
      <p>
        {{ $t("individualInvestors.discover") }}
      </p>
      <p class="q-pb-xl">
        {{ $t("individualInvestors.make") }}
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
img
	height: 520px
	width: 555px
.max-width-horizontal
  max-width: 555px
</style>
