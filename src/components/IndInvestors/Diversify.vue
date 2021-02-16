<template>
  <div
    class="fit row wrap justify-evenly items-center content-center col-md-6 col-lg-6 col-sm-12 col-xs-12 template-height"
  >
    <div
      class="col-6 col-md-6 col-lg-6 col-sm-12 col-xs-12 max-width-horizontal"
    >
      <div class="text-h2 text-weight-medium q-pb-xl">
        {{ $t("acs.headline") }}
      </div>
      <p>
        {{ $t("acs.acs") }}
      </p>
      <p>
        {{ $t("acs.invest") }}
      </p>
    </div>

    <q-img
      src="~assets/images/archipelagonboats.jpg"
      alt="swedish archipelago"
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

.max-width-horizontal
  max-width: 555px
</style>
