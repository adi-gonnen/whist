<template>
  <div class="column">
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
        let text = "פתיחת טורניר";
        if (key === "players") {
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
      this.$router.push(`/${action}`);
    },
  },
};
</script>

<style scoped lang="scss">
.main-btns {
  width: 300px;
}
</style>
