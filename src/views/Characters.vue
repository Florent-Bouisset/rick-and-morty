<template>
  <div>
    <div class="searchHeader">
      <button :disabled="!info.prev" @click="goPrevPage()">
        previous page
      </button>
      <button :disabled="!info.next" @click="goNextPage()">next page</button>
      <div>{{ info.count }} results found</div>
      <input v-model="searchInput" />
      <button @click="search()">Search</button>

      <input type="radio" v-model="statusInput" value="alive" />
      <label>Alive</label>

      <input type="radio" v-model="statusInput" value="dead" />
      <label for="one">Dead</label>

      <input type="radio" v-model="statusInput" value="unkown" />
      <label for="one">Unknown</label>
    </div>
    <div class="galery">
      <character-card
        v-for="(character, index) in characters"
        :key="index"
        :image="character.image"
        :name="character.name"
        :id="character.id"
      ></character-card>
    </div>
  </div>
</template>

<script lang="ts">
import CharacterCard from "@/components/CharacterCard.vue";
import Vue from "vue";
import { mapState } from "vuex";
import { CharacterFilterParams, StoreState } from "@/types";

export default Vue.extend({
  components: { CharacterCard },
  name: "",
  data() {
    return {
      searchInput: "",
      statusInput: "",
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
    search() {
      const filter = {
        name: this.searchInput.toLowerCase(),
        status: this.statusInput,
      } as CharacterFilterParams;

      this.$store.dispatch("fetchCharacters", filter);
    },
    goPrevPage() {
      this.$store.dispatch("fetchWithPagination", this.info.prev);
    },

    goNextPage() {
      this.$store.dispatch("fetchWithPagination", this.info.next);
    },
  },
  created() {
    this.search();
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
