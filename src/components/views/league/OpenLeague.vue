<template>
  <div>
    <q-carousel
      v-model="section"
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      navigation
      arrows
      padding
      swipeable
      control-color="black"
      class="open-league-carousel"
    >
      <!-- select date -->
      <q-carousel-slide :name="1" class="column items-center">
        <p class="title q-pb-lg">הזן תאריך</p>
        <q-btn-toggle
          v-model="isLeagueNew"
          :options="toggleOptions"
          class="toggle-league-btn q-mx-sm q-mb-md"
        />
        <q-date
          v-model="date"
          flat
          minimal
          dir="ltr"
          @update:model-value="onSetDate"
        />
      </q-carousel-slide>

      <!--add players  -->
      <q-carousel-slide :name="2" class="column items-center">
        <p class="title q-pb-lg">הוסף שחקנים</p>
        <add-players
          :users="users"
          :players="players || []"
          @select="onSelect"
          @delete="onDelete"
        />
      </q-carousel-slide>

      <!-- action btn -->
      <q-carousel-slide :name="3" class="column no-wrap items-center">
        <p class="title q-pb-lg">כפתורי פעולה</p>
        <action-btns :users="users" :players="players || []" />
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
// import BasicButton from "../../common/BasicButton";
import AddPlayers from "./AddPlayers";
import ActionBtns from "./ActionBtns";

export default {
  name: "OpenLeague",
  components: { AddPlayers, ActionBtns },
  props: ["users"],
  emits: ["open", "initLeague"],
  data: () => ({
    isLeagueNew: false,
    date: "",
    section: 1,
    players: [],
  }),
  computed: {
    toggleOptions() {
      return [
        { value: false, label: "ליגה אחרונה" },
        { value: true, label: "ליגה חדשה" },
      ];
    },
    // btnElem() {
    //   return (key) => {
    //     const label = key === "create" ? "ליגה חדשה" : "ליגה קיימת";
    //     return {
    //       label,
    //       class: "action-btn q-ml-md q-mb-lg",
    //     };
    //   };
    // },
  },
  methods: {
    onSelect(val) {
      this.players.push(val);
    },
    onDelete(idx) {
      this.players.splice(idx, 1);
    },
    onSetDate(val) {
      this.section = 2;
    },
  },
};
</script>

<style scoped lang="scss">
.open-league-carousel {
  height: 500px;
  width: 740px;
  &::v-deep() {
    .q-carousel__arrow .q-icon {
      font-size: 35px;
    }
    .selected-list {
      min-height: 242px;
      border: 1px solid #b7b4a5;
      border-radius: 6px;
      padding: 8px;
    }
  }
}
.action-btn {
  width: 294px;
  height: 55px;
}
.date-container .q-date {
  width: 100%;
}
.main-btns {
  width: 300px;
}
</style>
