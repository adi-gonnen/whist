<template>
  <q-page class="column items-center q-py-xl">
    <league-controller mode="open" />
  </q-page>
</template>

<script>
import LeagueController from "components/controllers/LeagueController";

export default {
  name: "OpenMeetingPage",
  components: { LeagueController },
  computed: {},
  methods: {},
};
</script>
