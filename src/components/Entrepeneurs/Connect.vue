<template>
  <div
    class="fit row wrap justify-evenly items-center content-center col-md-6 col-lg-6 col-sm-12 col-xs-12 template-height"
  >
    <div
      class="col-6 col-md-6 col-lg-6 col-sm-12 col-xs-12 max-width-horizontal"
    >
      <div class="text-h2 text-weight-bold q-pb-xl">
        {{ $t("access.headline") }}
      </div>
      <p>
        {{ $t("access.support") }}
      </p>
      <p>
        {{ $t("access.gain") }}
      </p>
      <p>
        {{ $t("access.help") }}
      </p>
    </div>

    <q-img
      src="~assets/images/climbingmountain.jpg"
      alt="people climbing mountain"
      :style="
        screenWidth > $q.screen.sizes.sm
          ? 'height: 520px; width: 555px;'
          : 'max-height:520px; max-width: 555px;'
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
p
	color: $accent1
.text-h2
	color: $accent

::v-deep .max-width-horizontal
  max-width: 555px
</style>
