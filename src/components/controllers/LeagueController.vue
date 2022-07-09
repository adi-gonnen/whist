<template>
  <div class="">
    <create-league v-if="mode === 'create'" :users="users" :players="players" />
    <open-league v-else :users="users" :players="players" />
  </div>
</template>

<script>
import CreateLeague from "../views/league/CreateLeague";
import OpenLeague from "../views/league/OpenLeague";
import { mapState, mapActions } from "vuex";

export default {
  name: "LeagueController",
  components: { CreateLeague, OpenLeague },
  props: ["mode"],
  data: () => ({}),
  computed: {
    ...mapState({
      users: (state) => state.league.users,
      players: (state) => state.league.players,
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
