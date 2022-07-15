<template>
  <div class="selected-list border-grey q-mb-md">
    <q-chip
      v-for="(player, idx) in playersList"
      :key="idx"
      color="white"
      class="chip-border col-3 q-ml-md q-mr-none"
    >
      <template v-slot:default>
        <div class="row items-center justify-between col-12">
          <span class="chip-border-label">{{ player?.label }}</span>
          <q-icon
            v-if="clear"
            name="clear"
            class="clear-icon cursor-pointer"
            @click="$emit('delete', idx)"
          />
        </div>
      </template>
    </q-chip>
  </div>
</template>

<script>
export default {
  name: "PlayersList",
  components: {},
  props: ["users", "players", "clear"],
  emits: ["select", "delete"],
  data: () => ({}),
  computed: {
    playersList() {
      return this.players.map((i) => {
        const user = this.users[i];
        return { value: i, label: user.name };
      });
    },
  },
  methods: {
    onSelect(val) {
      const isExist = this.players.some((i) => i === val);
      if (!isExist) {
        this.$emit("select", val);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.chip-border {
  border-radius: 8px;
  padding: 0px 8px;
  height: 30px;
  border: 1px solid grey;
}
.clear-icon {
  margin-right: 8px;
  padding-right: 4px;
  border-right: 1px solid #b7b4a5;
}
</style>
