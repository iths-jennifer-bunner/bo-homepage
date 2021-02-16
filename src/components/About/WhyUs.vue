<template>
  <div
    class="fit row wrap justify-evenly items-center content-center  col-md-6 col-lg-6 col-sm-12 col-xs-12 template-hight"
  >
    <div
      class="col-6  col-md-6 col-lg-6 col-sm-12 col-xs-12 max-width-horizontal"
    >
      <div class="text-h2 text-weight-medium q-pb-xl">
        {{ $t("whyUs.headline") }}
      </div>
      <p>
        {{ $t("whyUs.boCapital") }}
      </p>
      <p class="q-pb-xl">
        {{ $t("whyUs.based") }}
      </p>

      <q-btn
            no-caps
            elevated
            rounded
            color="accent"
            label="Join now"
            size="lg"
            class="q-mb-md"
            type="a" href="/aboutus#contact-form"
          />


    </div>

    <q-img
      src="~assets/images/stockholmbirds.jpg"
      alt="Stockholm from sky"
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
	color: $primary
.text-h2
	color: $primary

.max-width-horizontal
  max-width: 555px
</style>
