<template>
  <div class="">
    <!-- <create-league v-if="mode === 'create'" :users="users" :players="players" /> -->
    <open-league :users="users" :players="players" />
  </div>
</template>

<script>
// import CreateLeague from "../views/league/CreateLeague";
import OpenLeague from "../views/league/OpenLeague";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "LeagueController",
  components: { OpenLeague },
  props: ["mode"],
  data: () => ({}),
  computed: {
    ...mapState({
      players: (state) => state.league.players,
    }),
    ...mapGetters({
      users: "league/getUsers",
      lastLeague: "league/getLastLeague",
      lastMeeting: "league/getLastMeeting",
    }),
  },
  created() {
    this.getUsers();
  },
  methods: {
    ...mapActions({
      getUsers: "league/getUsers",
    }),
  },
};
</script>

<style scoped lang="scss"></style>
