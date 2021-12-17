<template>
  <div class="card">
    <img :src="image" />
    <div>{{ name }}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "",
  data() {
    return {};
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  computed: {},
  methods: {},
});
</script>

<style scoped>
.card {
  padding: 10px;
}
</style>
