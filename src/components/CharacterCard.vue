<template>
  <router-link :to="{ name: 'CharacterDetails', params: { id } }" tag="div">
    <div class="card">
      <img :src="image" />
      <div>{{ name }}</div>
    </div>
  </router-link>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "",
  data() {
    return {};
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
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
  margin: 4px;
}
</style>
