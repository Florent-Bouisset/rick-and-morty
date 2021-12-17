<template>
  <div>
    <input v-model="searchInput" />
    <button @click="searchWithName()">Search</button>
    <div class="galery">
      <character-card
        v-for="(character, index) in characters"
        :key="index"
        :image="character.image"
        :name="character.name"
      ></character-card>
    </div>
  </div>
</template>

<script lang="ts">
import CharacterCard from "@/components/CharacterCard.vue";
import Vue from "vue";
import { mapState } from "vuex";
import { StoreState } from "@/types";

export default Vue.extend({
  components: { CharacterCard },
  name: "",
  data() {
    return {
      searchInput: "",
    };
  },
  props: {},
  computed: {
    ...mapState({
      characters: (state) => (state as StoreState).characters,
    }),
  },
  methods: {
    searchWithName() {
      const searchInput = this.searchInput.toLowerCase();
      this.$store.dispatch("fetchCharacters", searchInput);
    },
  },
  created() {
    this.$store.dispatch("fetchCharacters");
  },
});
</script>

<style scoped>
.galery {
  display: flex;
  flex-wrap: wrap;
}
</style>
