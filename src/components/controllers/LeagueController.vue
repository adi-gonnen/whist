<template>
  <div class="">
    <create-league :users="users" :players="players" />
  </div>
</template>

<script>
import CreateLeague from "../views/league/CreateLeague";
import { mapState, mapActions } from "vuex";

export default {
  name: "LeagueController",
  components: { CreateLeague },
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
