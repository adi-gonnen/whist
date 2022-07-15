<template>
  <div class="add-players column">
    <div>
      <q-select
        :model-value="selected"
        :options="usersList"
        emit-value
        map-options
        outlined
        dense
        use-input
        fill-input
        autocomplete="label"
        behavior="menu"
        class="q-mb-md"
        popup-content-class="details-popup"
        @filter="onLoad"
        @update:model-value="onSelect"
        @input-value="onFilter"
      />
    </div>

    <!-- players list -->
    <players-list
      :users="users"
      :players="players"
      :clear="true"
      @select="onSelect"
      @delete="$emit('delete', $event)"
    />

    <!-- total line -->
    <div class="self-end">
      <p>{{ totalText }}</p>
    </div>
  </div>
</template>

<script>
import PlayersList from "./PlayersList";

export default {
  name: "AddPlayers",
  components: { PlayersList },
  props: ["users", "players"],
  emits: ["select", "delete"],
  data: () => ({
    filter: "",
    selected: null,
  }),
  computed: {
    usersList() {
      const keys = Object.keys(this.users);
      return keys
        .map((i, idx) => {
          return {
            label: this.users[i].name,
            value: i,
          };
        })
        .filter((j) => j.label.startsWith(this.filter));
    },
    playersList() {
      return this.players.map((i) => {
        const user = this.users[i];
        return { value: i, label: user.name };
      });
    },
    totalText() {
      const total = this.players.length;
      return `סה"כ שחקנים: ${total}`;
    },
  },
  methods: {
    onLoad(val, update) {
      if (this.usersList.length) {
        // already loaded
        update();
        return;
      } else {
        // load players
        // this.playersList = this.setPlayersList();
        update();
      }
    },
    onSelect(val) {
      const isExist = this.players.some((i) => i === val);
      if (!isExist) {
        this.$emit("select", val);
      }
    },
    onFilter(val) {
      this.filter = val;
    },
  },
};
</script>

<style scoped lang="scss">
.add-players {
  width: 100%;
}
.main-btns {
  width: 300px;
}
</style>
