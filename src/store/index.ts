import Vue from "vue";
import Vuex, { ActionContext } from "vuex";
import { Character, StoreState } from "@/types";
import axios from "axios";

Vue.use(Vuex);

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

const mutations = {
  setCharacters(state: StoreState, characters: Character[]) {
    Vue.set(state, "characters", characters); // keep reactivity
  },
};

const actions = {
  async fetchCharacters(
    context: ActionContext<StoreState, StoreState>,
    name?: string
  ): Promise<void> {
    const url = new URL("https://rickandmortyapi.com/api/character/");
    if (name) {
      url.searchParams.append("name", name);
    }
    const response = await axios.get(url.toString());
    const characters = response.data.results;
    context.commit("setCharacters", characters);
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {},
});
