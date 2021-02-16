<template>
  <div
    class="fit column wrap justify-center items-center content-center col-md-6 col-lg-6 col-sm-12 col-xs-12  q-pa-xl section"
  >
    <div class="text-h2 text-weight-bold q-pb-md">
      {{ $t("howWeHelp.headline") }}
    </div>
    <p class="text-h6">
      {{ $t("howWeHelp.text") }}
    </p>
  </div>
</template>

<style lang="sass" scoped>
.text-h2
	color: $accent1
.text-h6
	color: $accent1
.section
	max-width: 458px
	max-height: 1200px
</style>
