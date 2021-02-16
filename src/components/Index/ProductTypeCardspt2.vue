<template>
  <div class=" col-md-6 col-lg-6 col-sm-12 col-xs-12 ">
    <q-intersection once transition="scale" class="example-item ">
      <div
        class="text-left column wrap justify-around items-start content-center my-card col-md-6 col-lg-6 col-sm-12 col-xs-12 q-pb-xl"
      >
        <div class="text-weight-bold text-h4 primary q-pt-xl q-pb-lg">
          {{ $t("indexCards.entrepHeadline") }}
        </div>
        <p class=" primary text-h6 q-pb-lg">
          {{ $t("indexCards.entrepText") }}
        </p>
        <div class="q-pb-xl">
          <q-btn
            to="/entrepeneurs"
            rounded
            no-caps
            elevated
            size="md"
            color="accent"
            label="Learn more"
          />
        </div>
        <q-img
          src="~assets/images/nasaitaly.jpg"
          :style="
            screenWidth > $q.screen.sizes.sm
              ? 'height: 300px; width: 440px;'
              : 'max-height: 440px; max-width: 440px;'
          "
        />
      </div>

      <div
        class="text-left column wrap justify-around items-start content-center my-card col-md-6 col-lg-6 col-sm-12 col-xs-12 q-pt-lg"
      >
        <div class="text-left text-weight-bold text-h4 primary q-pb-lg">
          {{ $t("indexCards.instHeadline") }}
        </div>
        <p class=" primary text-h6  q-pb-lg">
          {{ $t("indexCards.instText") }}
        </p>
        <div class="q-pb-xl">
          <q-btn
            to="/institutionalinvestors"
            rounded
            no-caps
            elevated
            size="md"
            color="accent"
            label="Learn more"
          />
        </div>
        <q-img
          src="~assets/images/manwalking.jpg"
          :style="
            screenWidth > $q.screen.sizes.sm
              ? 'height:300px; width: 440px;'
              : 'max-height: 440px; max-width: 440px;'
          "
        />
      </div>
    </q-intersection>
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
.my-card
  max-width: 440px
  max-height: 700px
.primary
	color: $primary
</style>
