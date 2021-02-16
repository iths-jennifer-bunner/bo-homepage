<template>
  <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12 ">
    <q-intersection once transition="scale" class="example-item ">
      <div
        class="text-right column wrap justify-around items-end content-center my-card col-md-6 col-lg-6 col-sm-12 col-xs-12 q-pb-xl "
      >
        <q-img
          src="~assets/images/girlinmountain.jpg"
          :style="
            screenWidth > $q.screen.sizes.sm
              ? 'height: 300px; width: 440px;'
              : 'max-height: 440px; max-width: 440px;'
          "
        />
        <div
          class="text-right text-weight-bold text-h4 primary q-pt-xl q-pb-lg"
        >
          {{ $t("indexCards.pevcHeadline") }}
        </div>
        <p class=" primary text-h6 q-pb-lg">
          {{ $t("indexCards.pevcText") }}
        </p>
        <q-btn
          to="/leadinvestors"
          rounded
          no-caps
          elevated
          size="md"
          color="accent"
          label="Learn more"
        />
      </div>

      <div
        class="text-right column wrap justify-around items-end content-center my-card col-md-6 col-lg-6 col-sm-12 col-xs-12 q-pt-lg"
      >
        <q-img
          src="~assets/images/handshake.jpg"
          :style="
            screenWidth > $q.screen.sizes.sm
              ? 'height:300px; width: 440px;'
              : 'max-height: 440px; max-width: 440px;'
          "
        />
        <div class="text-weight-bold text-h4 primary q-pt-xl q-pb-lg">
          {{ $t("indexCards.indHeadline") }}
        </div>
        <p class=" primary text-h6  q-pb-lg">
          {{ $t("indexCards.indText") }}
        </p>
        <q-btn
          to="/individualinvestors"
          rounded
          no-caps
          elevated
          size="md"
          color="accent"
          label="Learn more"
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
