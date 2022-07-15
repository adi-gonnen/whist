<template>
  <div>
    <p class="title q-pb-lg">הזן תאריך</p>
    <q-btn-toggle
      v-model="isLeagueNew"
      :options="toggleOptions"
      class="toggle-league-btn q-mx-sm q-mb-md"
      @update:model-value="$emit('setLeague', $event)"
    />
    <q-date
      v-model="date"
      flat
      minimal
      dir="ltr"
      @update:model-value="$emit('setDate', $event)"
    />
  </div>
</template>

<script>
export default {
  name: "SelectDate",
  components: {},
  props: [],
  emits: ["setLeague", "setDate"],
  data: () => ({
    isLeagueNew: false,
    date: "",
  }),
  computed: {
    toggleOptions() {
      return [
        { value: false, label: "ליגה אחרונה" },
        { value: true, label: "ליגה חדשה" },
      ];
    },
  },
  methods: {},
};
</script>

<style scoped lang="scss"></style>
