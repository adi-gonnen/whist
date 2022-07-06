<template>
  <div class="column">
    <div>
      <p class="title">הוסף שחקנים</p>
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
    <div class="selected-list row border-grey q-mb-md">
      <q-chip
        v-for="(player, idx) in playersList"
        :key="idx"
        color="white"
        class="chip-border q-px-md"
      >
        <template v-slot:default>
          <div class="row items-center">
            <span class="chip-border-label">{{ player?.label }}</span>
            <q-icon
              name="clear"
              class="clear-icon cursor-pointer"
              @click="$emit('delete', idx)"
            />
          </div>
        </template>
      </q-chip>
    </div>

    <!-- total line -->
    <div class="self-end q-mb-lg">
      <p>{{ totalText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddPlayers",
  components: {},
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
    onDelete(val) {},
  },
};
</script>

<style scoped lang="scss">
.main-btns {
  width: 300px;
}
.selected-list {
  min-height: 42px;
  align-items: center;
  border: 1px solid #b7b4a5;
  border-radius: 6px;
  padding: 8px;
}
.clear-icon {
  margin-right: 8px;
  padding-right: 4px;
  border-right: 1px solid #b7b4a5;
}
</style>
