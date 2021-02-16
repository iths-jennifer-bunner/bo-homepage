<template>
  <div
    class="fit row wrap justify-evenly items-center content-center template-height"
  >
    <q-img
      src="~assets/images/womenentrep.jpg"
      alt="women entrepeneurs"
      :style="
        screenWidth > $q.screen.sizes.sm
          ? 'height: 520px; width: 555px;'
          : 'max-height:520px; max-width: 555px;'
      "
    />

    <div
      class=" col-6 col-md-6 col-lg-6 col-sm-12 col-xs-12 max-width-horizontal"
    >
      <div class="text-h2 text-weight-medium q-pb-md">
        {{ $t("preIpo.headline") }}
      </div>
      <p>
        {{ $t("preIpo.support") }}
      </p>
      <p>
        {{ $t("preIpo.set") }}
      </p>
      <p>
        {{ $t("preIpo.reveal") }}
      </p>
      <p>
        {{ $t("preIpo.give") }}
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
img
	height: 520px
	width: 555px
::v-deep .max-width-horizontal
  max-width: 555px
</style>
