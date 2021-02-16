<template>
  <q-intersection once transition="scale" class="example-item">
    <div
      class="fit column wrap justify-between items-stretch content-between text-right  col-4 col-sm-12 col-md-4 col-lg-4 col-xs-12 "
    >
      <q-card square class="my-card no-box-shadow q-mb-sm">
        <img src="~assets/images/network.jpg" />
        <q-card-section class="q-pr-none">
          <div
            class="text-weight-bold text-h4 primary  col-md-6 col-lg-6 col-sm-12 col-xs-12"
          >
            Healthcare
          </div>
        </q-card-section>
        <q-card-section
          class="q-pt-none q-pr-none primary text-h6  col-md-6 col-lg-6 col-sm-12 col-xs-12 "
          >Business models contribute to better supply, higher quality and lower
          cost of healthcare
        </q-card-section>
      </q-card>

      <q-card square class="my-card no-box-shadow q-mb-sm">
        <img src="~assets/images/reef.jpg" />
        <q-card-section class="q-pr-none">
          <div
            class="text-weight-bold text-h4 primary  col-md-6 col-lg-6 col-sm-12 col-xs-12"
          >
            Energy Efficiency
          </div>
        </q-card-section>
        <q-card-section
          class="q-pt-none q-pr-none primary text-h6  col-md-6 col-lg-6 col-sm-12 col-xs-12"
          >Companies provide solutions to promote more effective use and
          production of energy, food and materials, to reduce CO2 emissions and
          to contribute to sustainable living
        </q-card-section>
      </q-card>
    </div>
  </q-intersection>
</template>

<style lang="sass" scoped>
.primary
	color: $primary
.my-card

	max-width: 440px
	height: 500px
img
	height: 300px
</style>
