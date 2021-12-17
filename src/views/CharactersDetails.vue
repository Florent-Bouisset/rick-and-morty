<template>
  <div class="card">
    <div v-if="!character">No character matching for this id</div>
    <div v-else>
      <img :src="character.image" />
      <div>Name: {{ character.name }}</div>
      <div>Gender: {{ character.gender }}</div>
      <div>Status: {{ character.id }}</div>
      <div>Species: {{ character.species }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { StoreState } from "@/types";
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  computed: {
    ...mapState({
      character: (state) => (state as StoreState).currentCharacter,
    }),
  },
  created() {
    this.$store.dispatch("changeCurrentCharacter", this.$route.params.id);
  },
});
</script>
