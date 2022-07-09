<template>
  <div class="column">
    <basic-button :elem="btnElem('create')" @onClick="onClick('create')" />
    <basic-button :elem="btnElem('open')" @onClick="onClick('open')" />
    <basic-button :elem="btnElem('players')" @onClick="onClick('players')" />
    <basic-button :elem="btnElem('rules')" @onClick="onClick('rules')" />
  </div>
</template>

<script>
import BasicButton from "../../common/BasicButton";

export default {
  name: "MainSettings",
  components: { BasicButton },
  data: () => ({}),
  computed: {
    btnLabel() {
      return (key) => {
        let text = "פתיחת טורניר חדש";
        if (key === "open") {
          text = "פתיחת טורניר קיים";
        } else if (key === "players") {
          text = "ניהול שחקנים";
        } else if (key === "rules") {
          text = "תקנון";
        }
        return text;
      };
    },
    btnElem() {
      return (key) => {
        return {
          label: this.btnLabel(key),
          class: "main-btns q-my-lg q-py-lg",
        };
      };
    },
  },
  methods: {
    onClick(action) {
      this.$router.push("/open");
      // this.$router.push(`/${action}`);
    },
  },
};
</script>

<style scoped lang="scss">
.main-btns {
  width: 300px;
}
</style>
