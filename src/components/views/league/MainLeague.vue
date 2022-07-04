<template>
  <div class="main-league column">
    <!-- select date -->
    <div class="date-container q-mb-xl">
      <p class="title">הזן תאריך</p>
      <q-date v-model="date" minimal />
    </div>

    <!--add players  -->
    <add-players :players="players" />
  </div>
</template>
<script>
import AddPlayers from "./AddPlayers";
export default {
  name: "MainLeague",
  components: { AddPlayers },
  props: ["players"],
  emits: [],
  data: () => ({
    date: "",
  }),
  computed: {},
  methods: {},
};
</script>

<style scoped lang="scss">
.main-league {
  width: 50%;
  margin: auto;
}
.date-container .q-date {
  width: 100%;
}
.main-btns {
  width: 300px;
}
</style>
