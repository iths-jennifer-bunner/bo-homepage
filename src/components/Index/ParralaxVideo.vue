<template>
  <div>
    <q-parallax :height="500" :speed="0.24" class="q-pt-none q-mt-none">
      <template v-slot:media>
        <video
          width="720"
          height="440"
          poster="https://cdn.quasar.dev/img/polina.jpg"
          autoplay
          loop
          muted
        >
          <source src="bigcitynights.mp4" type="video/mp4" />
        </video>
      </template>
      <header>
        <div class="text-center justify-evenly items-center">
          <q-btn
            to="/"
            round
            unelevated
            color="primary"
            size="xl"
            class="text-italic text-weight-bold"
            >Bo</q-btn
          >
          <h1
            class="text-bold text-italic q-pa-xl col-md-6 col-lg-6 col-sm-12 col-xs-12 "
          >
            Access global Investor network to raise capital
          </h1>
          <q-btn
            no-caps
            unelevated
            rounded
            color="accent"
            label="Raise now"
            size="lg"
            type="a" href="/aboutus#contact-form"
          />
          <div class="q-mt-xs">
            <q-icon
              name="expand_more"
              style="font-size: 4em; color: white;"
            ></q-icon>
          </div>
        </div>
      </header>
    </q-parallax>
  </div>
</template>
