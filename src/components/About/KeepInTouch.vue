<template>
  <div
    class="fit row wrap justify-evenly items-center content-center  col-md-6 col-lg-6 col-sm-12 col-xs-12 template-height"
  >
    <div
      class="col-6  col-md-6 col-lg-6 col-sm-12 col-xs-12 max-width-horizontal"
    >
      <div class="primary text-weight-bold text-h2 q-pb-xl">
        {{ $t("getInTouch.headline") }}
      </div>
      <p class="primary">
        {{ $t("getInTouch.stay") }}
      </p>
      <p class="primary q-pb-md">
        {{ $t("getInTouch.we") }}
      </p>
      <q-form class="contact-form" name="FORM" @submit.prevent="sendMail">
        <div class="row">
          <div class="col">
            <q-input
            rounded
            outlined
            label="First name"
            bg-color="white"
            label-color="primary"
            class="q-my-sm q-mr-sm"
            name="customer_first_name"
            v-model="userFirstName"
          />
          </div>
          <div class="col">
            <q-input
            rounded
            outlined
            label="Last name"
            bg-color="white"
            label-color="primary"
            name="customer_last_name"
            class="q-my-sm"
            v-model="userLastName"
          />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-input
          rounded
          outlined
          label="Email"
          bg-color="white"
          label-color="primary"
          class="q-my-sm q-pb-lg"
          name="to_email"
          v-model="userEmail"
        />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-btn no-caps elevated type="submit" rounded :color="!isSent ? 'accent': 'positive'" class="full-width" label="Join" size="lg" />
          </div>
        </div>
      </q-form>
      <!-- <div class="row ">
        <q-input
          rounded
          outlined
          label="First name"
          style="width: 14.5em;"
          bg-color="white"
          label-color="primary"
          class="q-my-sm q-mr-sm"
        />
        <q-input
          rounded
          outlined
          label="Last name"
          style="width: 14.5em;"
          bg-color="white"
          label-color="primary"
          class="q-my-sm"
        />
      </div>
      <q-input
        rounded
        outlined
        label="Email"
        style="max-width: 30em;"
        bg-color="white"
        label-color="primary"
        class="q-my-sm q-pb-lg"
      /> -->
    </div>
    <q-img
      src="~assets/images/undgoals.jpg"
      :style="screenWidth > $q.screen.sizes.sm ? 'height: 520px; width: 555px;': 'max-height:520px; max-width: 555px;'"
      contain
    />
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
export default {
  mounted () {
    // From testing, without a brief timeout, it won't work.
    if (this.$route.hash) {
      setTimeout(() => this.scrollTo(this.$route.hash), 100)
    }
  },
  data() {
    return {
      screenWidth: this.$q.screen.width,
      userEmail: '',
      userLastName: '',
      userFirstName: '',
      isSent: false
    };
  },
  watch: {
    "$q.screen.width"(val) {
      this.screenWidth = val;
    }
  },
  methods: {
    scrollTo: function (hashtag) {
      setTimeout(() => { location.href = 'aboutus'+hashtag }, 100)
    },
    sendMail (e) {
      emailjs.sendForm(process.env.SERVICE_KEY, process.env.TEMPLATE, e.target, process.env.USER_ID)
        .then((result) => {
            this.isSent = true;
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
  }
};
</script>

<style lang="sass" scoped>
.primary
  color: #02023E

.max-width-horizontal
  max-width: 555px
</style>
