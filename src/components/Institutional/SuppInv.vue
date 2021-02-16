<template>
  <div
    class="fit row wrap justify-around items-center content-center  col-md-6 col-lg-6 col-sm-12 col-xs-12 template-height"
  >
    <div class=" col-md-6 col-lg-6 col-sm-12 col-xs-12 max-width-horizontal">
      <div class="text-h2 text-weight-medium q-pb-xl">
        {{ $t("supportEntrepeneurs.headline") }}
      </div>
      <p class="q-pb-xl">
        {{ $t("supportEntrepeneurs.text") }}
      </p>

      <q-btn
        no-caps
        elevated
        rounded
        color="accent"
        label="Join now"
        class="q-mb-md"
        size="lg"
        type="a" href="/aboutus#contact-form"
      />
    </div>

    <q-img
      src="~assets/images/meetinginsofa.jpg"
      alt="entrepeneurs"
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
