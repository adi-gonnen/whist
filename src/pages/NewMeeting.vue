<template>
  <q-page class="column items-center q-py-xl">
    <league-controller />
  </q-page>
</template>

<script>
import LeagueController from "components/controllers/LeagueController";

export default {
  name: "NewMeetingPage",
  components: { LeagueController },
  computed: {},
  methods: {},
};
</script>
