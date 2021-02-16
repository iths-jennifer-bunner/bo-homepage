<template>
  <div
    class="fit column wrap justify-evelnly items-center content-center text-left col-md-6 col-lg-6 col-sm-12 col-xs-12 "
  >
    <div
      class="col-md-6 col-lg-6 col-sm-12 col-xs-12 max-width-vertical q-pb-xl"
    >
      <div class="text-h2 text-weight-medium q-pb-xl">
        {{ $t("selfDriving.headline") }}
      </div>
      <p>
        {{ $t("selfDriving.save") }}
      </p>
      <p>{{ $t("selfDriving.clear") }}</p>
      <p class="margin">
        {{ $t("selfDriving.simple") }}
      </p>
    </div>

    <q-img
      src="~assets/images/whiteboarf.jpg"
      alt="girl pointing on whiteboard"
      :style="
        screenWidth > $q.screen.sizes.sm
          ? 'height: 330px; width: 500px;'
          : 'max-height:330px; max-width: 500px;'
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
// .margin
//   margin-bottom: 49.8px

::v-deep .max-width-vertical
  max-width: 500px
</style>
