<template>
  <q-intersection once transition="scale" class="example-item">
    <div
      class="fit column wrap justify-between items-stretch content-between text-left col-4 col-sm-12 col-md-4 col-lg-4 col-xs-12 "
    >
      <q-card square class="my-card no-box-shadow justify-between">
        <q-card-section class="q-pl-none">
          <div
            class="text-weight-bold q-pt-none primary text-h4  col-md-6 col-lg-6 col-sm-12 col-xs-12"
          >
            Tech Innovation
          </div>
        </q-card-section>
        <q-card-section
          class="q-pt-none q-pl-none primary text-h6  col-md-6 col-lg-6 col-sm-12 col-xs-12"
          >Nordic tech ecosystem and entrepreneur culture cultivate innovative
          startups, driving economics growth, efficiency and transparency
        </q-card-section>
        <img src="~assets/images/map.jpg" class="q-mt-lg" />
      </q-card>

      <q-card square class="my-card no-box-shadow justify-between">
        <q-card-section class="q-pl-none ">
          <div
            class="text-h4 text-weight-bold q-pt-none primary  col-md-6 col-lg-6 col-sm-12 col-xs-12"
          >
            Climate Change
          </div>
        </q-card-section>
        <q-card-section
          class="q-pt-none q-pl-none primary text-h6  col-md-6 col-lg-6 col-sm-12 col-xs-12"
          >Entrepreneurs take climate action to protect our environment, life on
          land and below water
        </q-card-section>

        <img src="~assets/images/pinkwindmills.jpg" class="q-mt-lg" />
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
