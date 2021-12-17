import Vue from "vue";
import Vuex, { ActionContext } from "vuex";
import {
  Character,
  CharacterFilterParams,
  ResultInfo,
  StoreState,
} from "@/types";
import axios from "axios";

Vue.use(Vuex);

const state: StoreState = {
  characters: [],
  info: {
    count: 0,
    pages: 0,
    prev: null,
    next: null,
  },
};

const mutations = {
  setCharacters(state: StoreState, characters: Character[]) {
    Vue.set(state, "characters", characters); // keep reactivity
  },
  setInfo(state: StoreState, info: ResultInfo) {
    Vue.set(state, "info", info);
  },
};

function buildURL(params: CharacterFilterParams): string {
  const url = new URL("https://rickandmortyapi.com/api/character/");
  if (params.name) {
    url.searchParams.append("name", params.name);
  }
  if (params.status) {
    url.searchParams.append("status", params.status);
  }
  return url.toString();
}

async function makeRequest(
  url: string
): Promise<{ charactersResult: Character[]; resultInfo: ResultInfo }> {
  let charactersResult: Character[];
  let resultInfo: ResultInfo;
  try {
    const response = await axios.get(url);
    charactersResult = response.data.results;
    resultInfo = response.data.info;
  } catch (error) {
    // handle the case of no matching characters
    charactersResult = [];
    resultInfo = {
      count: 0,
      pages: 0,
      prev: null,
      next: null,
    };
  }
  return { charactersResult, resultInfo };
}

const actions = {
  async fetchWithPagination(
    context: ActionContext<StoreState, StoreState>,
    urlWithPagination: string
  ): Promise<void> {
    const { resultInfo, charactersResult } = await makeRequest(
      urlWithPagination
    );
    context.commit("setCharacters", charactersResult);
    context.commit("setInfo", resultInfo);
  },

  async fetchCharacters(
    context: ActionContext<StoreState, StoreState>,
    filterParams: CharacterFilterParams
  ): Promise<void> {
    const url = buildURL(filterParams);
    const { resultInfo, charactersResult } = await makeRequest(url);
    context.commit("setCharacters", charactersResult);
    context.commit("setInfo", resultInfo);
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {},
});
