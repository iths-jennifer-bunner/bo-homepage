<template>
  <div
    class="column wrap justify-evenly items-center content-center col-md-6 col-lg-6 col-sm-12 col-xs-12 "
  >
    <q-img
      src="~assets/images/manontop.jpg"
      alt="A man holding out arms"
      :style="
        screenWidth > $q.screen.sizes.sm
          ? 'height: 330px; width: 500px;'
          : 'max-height:330px; max-width:500px;'
      "
    />
    <div
      class="col-6 col-md-6 col-lg-6 col-sm-12 col-xs-12 text-left max-width-vertical q-pt-xl"
    >
      <div class="text-h2 text-weight-medium q-pb-xl">
        {{ $t("support.headline") }}
      </div>
      <p>
        {{ $t("support.support") }}
      </p>
      <p>
        {{ $t("support.connect") }}
      </p>
      <p>
        {{ $t("support.team") }}
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

::v-deep .max-width-vertical
  max-width: 500px
</style>
