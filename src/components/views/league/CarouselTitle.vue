<template>
  <div class="column items-start q-mb-lg">
    <p v-if="date" class="date-display">{{ dateDisplay }}</p>
    <p class="carousel-title self-center text-22">{{ title }}</p>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "CarouselTitle",
  props: ["date", "title"],
  computed: {
    dateDisplay() {
      return moment(this.date).format("DD/MM/YYYY");
    },
  },
};
</script>

<style>
.date-display {
  padding: 8px;
  border: 1px solid black;
}
</style>
