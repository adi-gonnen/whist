<template>
  <div class="column">
    <div>
      <p class="title">הוסף שחקנים</p>
      <q-select
        v-model="player"
        :options="playersList"
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
  </div>
</template>

<script>
export default {
  name: "AddPlayers",
  components: {},
  props: ["players"],
  emits: [],
  data: () => ({
    date: "",
    filter: "",
    player: null,
    //playersList: [],
  }),
  computed: {
    playersList() {
      const keys = Object.keys(this.players);
      return keys
        .map((i, idx) => {
          return {
            label: this.players[i].name,
            value: i,
          };
        })
        .filter((j) => j.label.startsWith(this.filter));
    },
  },
  methods: {
    onLoad(val, update) {
      if (this.playersList.length) {
        // already loaded
        update();
        return;
      } else {
        // load players
        this.playersList = this.setPlayersList();
        update();
      }
    },
    onSelect(val) {
      this.player = val;
    },
    onFilter(val) {
      this.filter = val;
    },
    setPlayersList() {
      const keys = Object.keys(this.players);
      return keys.map((i, idx) => {
        return {
          label: this.players[i].name,
          value: i,
        };
      });
    },
  },
};
</script>

<style scoped lang="scss">
.main-btns {
  width: 300px;
}
</style>
