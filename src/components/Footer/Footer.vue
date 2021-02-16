<template>
  <div
    class="fit row wrap justify-between items-start content-start q-px-lg q-pb-md col-md-6 col-lg-6 col-sm-12 col-xs-12"
  >
    <div class="col wrap justify-center items-start content-center ">
      <p class="q-mb-none">
        {{ $t("footer.we") }}
      </p>
      <p class="q-mb-none">
        {{ $t("footer.just") }}
      </p>

      <div class="fit row wrap justify-start items-start content-center">
        <q-item
          name="terms"
          to="/terms"
          label="Terms"
          style="color: #FF6D70; font-size: 14px; font-weight: bold;"
          no-caps
          clickable
          class="q-pa-none q-mr-xl"
        >
          <q-item-section>{{ $t("footer.terms") }}</q-item-section>
        </q-item>
        <q-item
          name="privacy"
          to="/privacy"
          label="Privacy"
          style="color: #FF6D70; font-size: 14px; font-weight: bold; "
          no-caps
          clickable
          class="q-pa-none"
        >
          <q-item-section>{{ $t("footer.privacy") }}</q-item-section>
        </q-item>
      </div>
      <p class="text-caption q-my-none">
        © 2020 BoCapital AB
      </p>
    </div>
     <div class="mc_embed_signup">
      <form @submit.prevent="sendMail">
        <div
          id="mc_embed_signup_scroll"
          class="row wrap justify-center content-center items-center q-gutter-y-md"
        >
          <label for="mce-EMAIL"></label>
          <p style="color:#FF6D70;" class="text-weight-bold q-pr-md q-mb-none">
            Get in touch
          </p>
          <q-field
            rounded
            outlined
            dense
            label-color="primary"
            bg-color="white"
            label="Email"
            class="q-pr-md "
            v-model="userEmail"
          >
            <template v-slot:control="{ value, emitValue }">
              <input
                type="email"
                :value="value"
                name="to_email"
                rounded
                outlined
                dense
                label="Email"
                bg-color="white"
                label-color="primary"
                class="q-field__input email"
                :id="'mce-EMAIL'"
                @change="e => emitValue(e.target.value)"
              />
            </template>
          </q-field>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true">
            <input
              type="text"
              name="b_d469d064e4d81b998c73ef56d_cd3cc1f33c"
              tabindex="-1"
              value=""
            />
          </div>
          <div class="clear">
             <q-btn
              type="submit"
              unelevated
              rounded
              class="button"
              color="accent"
              label="Sign up"
              no-caps
              padding="8px 10px 8px 10px"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import LanguageSwitcher from "components/Navbar/LanguageSwitcher.vue";
import emailjs from 'emailjs-com';
export default {
  components: {},
  data() {
    return {
      userEmail: '',
      isSent: false
    };
  },
  methods: {
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
p
  font-size: 14px
.text-caption
  font-size: 10px
.q-field__native, .q-placeholder
  padding-top: 0px
  padding-bottom: 0px
.mc_embed_signup
  clear: left
  font-family: 'Poppins', sans-serif !important


      /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
       We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
