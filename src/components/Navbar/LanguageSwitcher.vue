<template>
  <!-- ...... -->
  <q-select
    v-model="lang"
    :options="langOptions"
    label=""
    label-color="white"
    bg-color=""
    color="accent"
    dense
    borderless
    emit-value
    map-options
    options-dense
    style="max-width: 100px"
    item-aligned
    hide-dropdown-icon
  />
  <!-- ......  -->
</template>

<script>
export default {
  data() {
    return {
      lang: this.$i18n.locale,
      langOptions: [
        { value: "en-us", label: "English" },
        { value: "swe", label: "Svenska" }
      ]
    };
  },
  watch: {
    lang(lang) {
      this.$i18n.locale = lang;
    }
  }
};
</script>
<style lang="sass" scoped>
::v-deep .q-field__native,
  color: $accent1 !important
// ::v-deep .q-field__marginal
//   color: $accent1 !important
</style>
