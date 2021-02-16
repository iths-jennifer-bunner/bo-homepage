<template>
  <div>
    <Terms />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import Terms from "../components/Footer/Terms.vue";

export default {
  name: "PageIndex",
  components: {
    Terms
  }
};
</script>

<style lang="sass" scoped>
.margin
  padding: 0 80px 0 80px
</style>
