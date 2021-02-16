<template>
  <div
    class="fit row wrap justify-evenly items-center content-center  col-md-6 col-lg-6 col-sm-12 col-xs-12 template-hight"
  >
    <q-img
      src="~assets/images/oldtown1.jpg"
      alt="old town stockholm"
      :style="
        screenWidth > $q.screen.sizes.sm
          ? 'height: 520px; width: 555px;'
          : 'max-height:520px; max-width: 555px;'
      "
    />

    <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12 max-width-horizontal">
      <div class="text-h2 text-weight-bold q-pb-xl">
        {{ $t("whoWeAre.headline") }}
      </div>
      <p class="text-h6">
        {{ $t("whoWeAre.techAss") }}
      </p>
      <p class="text-h6">
        {{ $t("whoWeAre.endToEnd") }}
      </p>
      <p class="text-h6 q-pb-xl">
        {{ $t("whoWeAre.oneStop") }}
      </p>
      <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
        <q-btn
          to="/aboutus"
          no-caps
          elevated
          rounded
          color="accent"
          label="About us"
          size="lg"
        />
      </div>
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
	color: $accent1
.text-h2
	color: $accent
.template-hight
  margin: 70px 0 70px 0
.max-width-horizontal
  max-width: 555px
</style>
