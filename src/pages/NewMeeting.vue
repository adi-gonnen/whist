<template>
  <q-page class="column items-center q-py-xl">
    <league-controller />
  </q-page>
</template>

<script>
import LeagueController from "components/controllers/LeagueController";

export default {
  name: "IndexPage",
  components: { LeagueController },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>
