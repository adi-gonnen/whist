<template>
  <div class="action-btns column q-py-lg">
    <!-- <players-list :users="users" :players="players" class="q-mb-xl" /> -->
    <div class="row items-center q-mb-lg">
      <p class="text-20">סוג מפגש:</p>
      <q-btn-toggle
        v-model="isLeague"
        :options="toggleOptions"
        class="toggle-league-btn q-mx-sm"
      />
    </div>
    <q-toggle
      v-model="keepScore"
      label="הוסף תוצאות לטבלת ליגה"
      size="xl"
      class="text-20 q-mr-lg q-mb-lg"
    />
    <div class="row">
      <basic-button :elem="btnElem('create')" @onClick="onClick('create')" />
      <basic-button :elem="btnElem('raffle')" @onClick="$emit('raffle')" />
      <basic-button :elem="btnElem('resultsA')" @onClick="$emit('resultsA')" />
      <basic-button :elem="btnElem('resultsB')" @onClick="$emit('resultsB')" />
    </div>
  </div>
</template>

<script>
// import PlayersList from "./PlayersList";
import BasicButton from "../../common/BasicButton";

export default {
  name: "CreateLeague",
  components: { BasicButton },
  props: ["users", "players"],
  emits: [],
  data: () => ({
    isLeague: true,
    keepScore: true,
  }),
  computed: {
    toggleOptions() {
      return [
        { value: true, label: "ליגה" },
        { value: false, label: "גביע" },
      ];
    },
    btnLabels() {
      return {
        create: "עדכן טורניר",
        raffle: "הגרלה שלב א",
        resultsA: "הזנת תוצאות שלב א'",
        resultsB: "הזנת תוצאות שלב ב'",
      };
    },
    btnElem() {
      return (action) => {
        return {
          label: this.btnLabels[action],
          class: "action-btn q-ml-md q-mb-lg",
        };
      };
    },
  },
  methods: {
    onClick(action) {},
  },
};
</script>

<style scoped lang="scss">
.action-btns {
  &::v-deep() {
    .selected-list {
      min-height: unset;
    }
  }
}
.toggle-league-btn {
  &::v-deep() {
    .q-btn {
      width: 200px;
      height: 50px;
    }
  }
}
.action-btn {
  width: 294px;
  height: 55px;
}
</style>
