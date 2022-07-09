<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <basic-button :elem="btnElem" @onClick="onBack" />
        <q-toolbar-title class="row justify-center items-center q-mb-none">
          <p>{{ title }}</p>
        </q-toolbar-title>
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
    title() {
      return "";
    },
    btnElem() {
      return {
        label: "חזרה",
        flat: true,
        icon: "chevron_right",
        class: "toolbar-title",
        // size: "24px",
      };
    },
    isDesktop() {
      return this.$q.screen.gt.sm;
    },
  },
  methods: {
    onBack() {
      window.history.back();
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
.main-img {
  height: 78px;
}

@media (min-width: 600px) {
  .btn-container {
    width: 300px;
  }
}
</style>
