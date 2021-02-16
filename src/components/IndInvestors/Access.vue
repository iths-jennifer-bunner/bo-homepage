<template>
  <div
    class="fit row wrap justify-evenly items-center content-center col-md-6 col-lg-6 col-sm-12 col-xs-12 template-height"
  >
    <q-img
      src="~assets/images/drone.jpg"
      alt="northenlights"
      :style="
        screenWidth > $q.screen.sizes.sm
          ? 'height: 520px; width: 555px;'
          : 'max-height:520px; max-width: 555px;'
      "
    />

    <div
      class="col-6 col-md-6 col-lg-6 col-sm-12 col-xs-12 max-width-horizontal"
    >
      <div class="text-h2 text-weight-medium q-pb-xl">
        {{ $t("upside.headline") }}
      </div>
      <p>
        {{ $t("upside.text") }}
      </p>
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
	color: $accent

.max-width-horizontal
  max-width: 555px
</style>
