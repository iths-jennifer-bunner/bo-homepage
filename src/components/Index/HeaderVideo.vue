<template>
  <div
    class="justify-center content-center items-center col-md-6 col-lg-6 col-sm-12 col-xs-12 "
  >
    <q-carousel
      animated
      v-model="slide"
      infinite
      :autoplay="8000"
      height="auto"
    >
      <q-carousel-slide
        :name="1"
        class="q-pa-none q-ma-none justify-center content-center items-center"
        style="overflow: hidden;"
      >
        <div class="viewport-header ">
          <div class="text-center justify-evenly items-center">
            <div
              class="text-bold text-h1 text-italic q-pa-xl col-md-6 col-lg-6 col-sm-12 col-xs-12 "
            >
              {{ $t("headerVideo.raise") }}
            </div>
            <!-- <q-btn
              no-caps
              elevated
              rounded
              color="accent"
              label="Raise now"
              size="lg"
              type="a" href="/aboutus#contact-form"
              @click="console.log('hi')"
            /> -->
            <div class="q-mt-xl">
              <q-icon
                name="expand_more"
                style="font-size: 4em; color: white;"
              ></q-icon>
            </div>
          </div>
        </div>
        <video playsinline autoplay muted loop id="bgvid">
          <source src="coldwinterdream.mp4" type="video/mp4" />
        </video>
      </q-carousel-slide>

      <q-carousel-slide
        :name="2"
        class="q-pa-none q-ma-none justify-center content-center items-center"
        style="overflow: hidden;"
      >
        <div class="viewport-header">
          <div class="text-center justify-evenly items-center ">
            <div
              class="text-bold text-h1 text-italic q-pa-xl col-md-6 col-lg-6 col-sm-12 col-xs-12"
            >
              {{ $t("headerVideo.invest") }}
            </div>
            <!-- <q-btn
              no-caps
              elevated
              rounded
              color="accent"
              label="Invest now"
              size="lg"
              type="a"
              href="/aboutus#contact-form"
              @click="console.log('hi')"
            /> -->
            <div class="q-mt-xl">
              <q-icon
                name="expand_more"
                style="font-size: 4em; color: white;"
              ></q-icon>
            </div>
          </div>
        </div>
        <video playsinline autoplay muted loop id="bgvid">
          <source src="bigcitynights.mp4" type="video/mp4" />
        </video>
      </q-carousel-slide>

      <q-carousel-slide
        :name="3"
        class="q-pa-none q-ma-none justify-center content-center items-center"
        style="overflow: hidden;"
      >
        <div class="viewport-header ">
          <div class="text-center justify-evenly items-center">
            <div
              class="text-bold text-h1 text-italic q-pa-xl col-md-6 col-lg-6 col-sm-12 col-xs-12 "
            >
              {{ $t("headerVideo.raise") }}
            </div>
            <!-- <q-btn
              no-caps
              elevated
              rounded
              color="accent"
              label="Raise now"
              size="lg"
              type="a" href="/aboutus#contact-form"
            /> -->
            <div class="q-mt-xl">
              <q-icon
                name="expand_more"
                style="font-size: 4em; color: white;"
              ></q-icon>
            </div>
          </div>
        </div>
        <video playsinline autoplay muted loop id="bgvid">
          <source src="girlbythesea.mp4_Trim.mp4" type="video/mp4" />
        </video>
      </q-carousel-slide>

      <q-carousel-slide
        :name="4"
        class="q-pa-none q-ma-none justify-center content-center items-center"
        style="overflow: hidden;"
      >
        <div class="viewport-header">
          <div class="text-center justify-evenly items-center">
            <div
              class="text-bold text-h1 text-italic q-pa-xl col-md-6 col-lg-6 col-sm-12 col-xs-12"
            >
              {{ $t("headerVideo.invest") }}
            </div>
            <!-- <q-btn
              no-caps
              elevated
              rounded
              color="accent"
              label="Invest now"
              size="lg"
              type="a" href="/aboutus#contact-form"
            /> -->
            <div class="q-mt-xl">
              <q-icon
                name="expand_more"
                style="font-size: 4em; color: white;"
              ></q-icon>
            </div>
          </div>
        </div>
        <video playsinline autoplay muted loop id="bgvid">
          <source src="stockholmbirdview.mp4" type="video/mp4" />
        </video>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 1,
      autoplay: true
    };
  }
};
</script>
<style lang="sass" scoped>
.text-h1
  color: $accent1
</style>
