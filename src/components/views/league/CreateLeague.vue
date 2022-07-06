<template>
  <div class="main-league column">
    <!-- select date -->
    <div class="date-container q-mb-xl">
      <p class="title">הזן תאריך</p>
      <q-date v-model="date" minimal dir="ltr" />
    </div>

    <!--add players  -->
    <add-players
      :users="users"
      :players="players || []"
      @select="onSelect"
      @delete="onDelete"
    />

    <basic-button
      :elem="{ label: 'עדכן טורניר' }"
      class="action-btn"
      @onClick="$emit('create')"
    />
  </div>
</template>

<script>
import AddPlayers from "./AddPlayers";
import BasicButton from "../../common/BasicButton";

export default {
  name: "CreateLeague",
  components: { AddPlayers, BasicButton },
  props: ["users"],
  emits: [],
  data: () => ({
    date: "",
    players: [],
  }),
  computed: {},
  methods: {
    onSelect(val) {
      this.players.push(val);
    },
    onDelete(idx) {
      this.players.splice(idx, 1);
    },
  },
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
.action-btn {
  width: 120px;
}
</style>
