<template>
  <div class="galery">
    <character-card></character-card>
    <character-card></character-card>
    <character-card></character-card>
    <character-card></character-card>
  </div>
</template>

<script lang="ts">
import CharacterCard from "@/components/CharacterCard.vue";
import Vue from "vue";

export default Vue.extend({
  components: { CharacterCard },
  name: "",
  data() {
    return {};
  },
  props: {},
  computed: {},
  methods: {},
});
</script>

<style scoped>
.galery {
  display: flex;
  flex-wrap: wrap;
}
</style>
