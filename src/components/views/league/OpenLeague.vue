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
        <carousel-title :date="date" title="הזן תאריך" />
        <select-date :date="date" :league="isLeagueNew" @update="onUpdate" />
      </q-carousel-slide>

      <!--add players  -->
      <q-carousel-slide :name="2" class="column">
        <carousel-title :date="date" title="הוסף שחקנים" />
        <add-players
          :users="users"
          :players="players || []"
          @select="onSelect"
          @delete="onDelete"
        />
      </q-carousel-slide>

      <!-- action btn -->
      <q-carousel-slide :name="3" class="column no-wrap">
        <carousel-title :date="date" title="כפתורי פעולה" />
        <action-btns :users="users" :players="players || []" />
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import CarouselTitle from "./CarouselTitle";
import SelectDate from "./SelectDate";
import AddPlayers from "./AddPlayers";
import ActionBtns from "./ActionBtns";
import moment from "moment";
import { setRandomKey } from "src/services/utils";

export default {
  name: "OpenLeague",
  components: { CarouselTitle, SelectDate, AddPlayers, ActionBtns },
  props: ["users"],
  emits: ["open", "initLeague"],
  data: () => ({
    isLeagueNew: false,
    date: "",
    section: 1,
    players: [],
  }),
  computed: {
    dateDisplay() {
      return moment(this.date).format("DD/MM/YYYY");
    },
  },
  methods: {
    onUpdate(key, val) {
      this[key] = val;
      if (key === "date") {
        this.section = 2;
      }
    },
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
.open-league-carousel {
  height: 550px;
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

.main-btns {
  width: 300px;
}
</style>
