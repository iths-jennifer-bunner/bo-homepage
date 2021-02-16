<template>
  <div
    class="column wrap justify-evenly items-center content-center text-left col-md-6 col-lg-6 col-sm-12 col-xs-12"
  >
    <div
      class="col-md-6 col-lg-6 col-sm-12 col-xs-12 max-width-vertical q-pb-xl"
    >
      <div class="text-h2 text-weight-medium q-pb-xl">
        {{ $t("preIPO.headline") }}
      </div>
      <p>
        {{ $t("preIPO.access") }}
      </p>
      <p class="margin">
        {{ $t("preIPO.capture") }}
      </p>
    </div>
    <q-img
      src="~assets/images/hands.jpg"
      alt="hands"
      :style="
        screenWidth > $q.screen.sizes.sm
          ? 'height: 330px; width: 500px;'
          : 'max-height:330px; max-width:500px;'
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
	color: $accent1

	color: $accent1

.max-width-vertical
  max-width: 500px
</style>
