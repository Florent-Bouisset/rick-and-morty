<template>
  <div>
    <div class="searchHeader">
      <button :disabled="!info.prev" @click="goPrevPage()">
        previous page
      </button>
      <button :disabled="!info.next" @click="goNextPage()">next page</button>
      <div>{{ info.count }} results found</div>
      <input v-model="searchInput" />
      <button @click="searchWithName()">Search</button>
    </div>
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
      info: (state) => (state as StoreState).info,
    }),
  },
  methods: {
    searchWithName() {
      const searchInput = this.searchInput.toLowerCase();
      this.$store.dispatch("fetchCharacters", searchInput);
    },
    goPrevPage() {
      this.$store.dispatch("fetchWithPagination", this.info.prev);
    },

    goNextPage() {
      this.$store.dispatch("fetchWithPagination", this.info.next);
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

.searchHeader {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

input {
  margin: 0 10px 0 10px;
}
</style>
