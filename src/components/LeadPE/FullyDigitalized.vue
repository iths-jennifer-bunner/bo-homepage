<template>
  <div
    class="column wrap justify-evenly items-center content-center col-md-6 col-lg-6 col-sm-12 col-xs-12"
  >
    <q-img
      src="~assets/images/hknight.jpg"
      alt="Hong kong skyview at night"
      :style="
        screenWidth > $q.screen.sizes.sm
          ? 'height: 330px; width: 500px;'
          : 'max-height:330px; max-width:500px;'
      "
    />
    <div
      class="col-md-6 col-lg-6 col-sm-12 col-xs-12 max-width-vertical q-pt-xl"
    >
      <div class="text-h2 text-weight-medium q-pb-xl">
        {{ $t("raise.headline") }}
      </div>
      <p>
        {{ $t("raise.text") }}
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

.max-width-vertical
  max-width: 500px
</style>
