<template>
  <div class="">
    <main-league :players="players" />
  </div>
</template>

<script>
import MainLeague from "../views/league/MainLeague";
import { mapState, mapActions } from "vuex";

export default {
  name: "LeagueController",
  components: { MainLeague },
  data: () => ({}),
  computed: {
    ...mapState({
      players: (state) => state.league.players,
    }),
  },
  created() {
    this.getPlayers();
  },
  methods: {
    ...mapActions({
      getPlayers: "league/getPlayers",
    }),
  },
};
</script>

<style scoped lang="scss"></style>
