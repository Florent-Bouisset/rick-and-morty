<template>
  <Modal v-if="showModal" @close="showModal = false">
    <template slot="header">
      <div v-if="!character">No character matching for this id</div>
      <h2 v-else>{{ character.name }}</h2>
    </template>
    <template slot="body">
      <div>
        <div v-if="!character">No character matching for this id</div>
        <div v-else>
          <img :src="character.image" />
          <div>Gender: {{ character.gender }}</div>
          <div>Status: {{ character.status }}</div>
          <div>Species: {{ character.species }}</div>
          <div class="infoWithIcon">
            <img :src="require('@/assets/icons/map-marker.png')" /> Earth
          </div>
        </div>
      </div>
    </template>

    <template slot="footer">
      <button class="modal-default-button" @click="close()">OK</button>
    </template>
  </Modal>
</template>

<script lang="ts">
import { StoreState } from "@/types";
import Vue from "vue";
import { mapState } from "vuex";
import Modal from "@/components/Modal.vue";

export default Vue.extend({
  components: { Modal },
  data() {
    return {
      showModal: true,
    };
  },
  computed: {
    ...mapState({
      character: (state) => (state as StoreState).currentCharacter,
    }),
  },
  methods: {
    close() {
      this.showModal = false;
      this.$router.push({ name: "Characters" });
    },
  },
  created() {
    this.$store.dispatch("changeCurrentCharacter", this.$route.params.id);
  },
});
</script>

<style scoped>
.infoWithIcon {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
