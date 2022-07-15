<template>
  <div class="column">
    <q-btn-toggle
      v-model="leagueNew"
      :options="toggleOptions"
      class="toggle-league-btn q-mx-sm q-mb-md"
      @update:model-value="$emit('update', 'isLeagueNew', $event)"
    />
    <q-date
      :model-value="localDate"
      minimal
      flat
      dir="ltr"
      @update:model-value="onUpdate"
    />
  </div>
</template>

<script>
export default {
  name: "SelectDate",
  components: {},
  props: ["date", "league"],
  emits: ["update"],
  data: () => ({
    localDate: "",
    leagueNew: false,
  }),
  computed: {
    toggleOptions() {
      return [
        { value: false, label: "ליגה אחרונה" },
        { value: true, label: "ליגה חדשה" },
      ];
    },
  },
  mounted() {
    this.localDate = this.date;
    this.leagueNew = this.league;
  },
  methods: {
    onUpdate(val) {
      const date = val.replace(/\//g, "");
      this.$emit("update", "date", date);
    },
  },
};
</script>

<style scoped lang="scss">
.toggle-league-btn {
  &::v-deep() {
    .q-btn {
      width: 50%;
      height: 45px;
    }
  }
}
.date-container .q-date {
  width: 100%;
}
</style>
