<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <div class="btn-container"></div>
        <q-toolbar-title class="row justify-center items-center q-mb-none">
          <basic-button :elem="btnElem" @onClick="onClick" />
        </q-toolbar-title>

        <img v-if="isDesktop" src="images/cards.jpg" class="main-img" />
      </q-toolbar>
    </q-header>

    <q-page-container class="page-container">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import BasicButton from "components/common/BasicButton";

export default {
  name: "MainLayout",
  components: { BasicButton },
  data: () => ({}),
  computed: {
    btnElem() {
      return {
        label: "מועדון הוויסט",
        flat: true,
        class: "toolbar-title",
        size: "24px",
      };
    },
    isDesktop() {
      return this.$q.screen.gt.sm;
    },
  },
  methods: {
    onClick() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped lang="scss">
.page-container {
  direction: rtl;
}
.q-toolbar {
  height: 80px;
  background-color: #fff;
  color: $primary;
}
.toolbar-title {
  font-weight: bold;
}
.main-img {
  height: 78px;
}

@media (min-width: 600px) {
  .btn-container {
    width: 300px;
  }
}
</style>
