import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

interface Character {
  name: string;
  image: string;
}

interface StoreState {
  characters: Character[];
}

const state: StoreState = {
  characters: [
    {
      name: "Toxic Rick",
      image: "https://rickandmortyapi.com/api/character/avatar/361.jpeg",
    },
    {
      name: "Rick Sanchez",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
      name: "Toxic Rick",
      image: "https://rickandmortyapi.com/api/character/avatar/361.jpeg",
    },
    {
      name: "Toxic Rick",
      image: "https://rickandmortyapi.com/api/character/avatar/361.jpeg",
    },
  ],
};

export default new Vuex.Store({
  state,
  mutations: {},
  actions: {},
  modules: {},
});
