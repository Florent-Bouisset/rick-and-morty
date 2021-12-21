<template>
  <div>
    <div class="searchHeader">
      <input type="text" v-model="searchInput" placeholder="Cowboy Morty" />
      <button @click="search()">
        <span style="margin-right: 8px"> Search </span>
        <custom-icon iconName="search" />
      </button>
      <div>{{ info.count }} results found</div>

      <button :disabled="!info.prev" @click="goPrevPage()">
        <custom-icon iconName="left-chevron" />
        previous page
      </button>

      <button :disabled="!info.next" @click="goNextPage()">
        next page
        <custom-icon iconName="right-chevron" />
      </button>

      <input type="radio" v-model="statusInput" value="alive" />
      <label>Alive</label>

      <input type="radio" v-model="statusInput" value="dead" />
      <label for="one">Dead</label>

      <input type="radio" v-model="statusInput" value="unknown" />
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
    <div v-if="!characters.length">
      No characters found for that search, verify your input!
    </div>
  </div>
</template>

<script lang="ts">
import CharacterCard from "@/components/CharacterCard.vue";
import Vue from "vue";
import { mapState } from "vuex";
import { CharacterFilterParams, StoreState } from "@/types";
import CustomIcon from "@/components/CustomIcon.vue";

export default Vue.extend({
  components: { CharacterCard, CustomIcon },
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

input[type="radio"] {
  margin: 0 10px;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
