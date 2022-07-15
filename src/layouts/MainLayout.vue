<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <div class="btn-container"></div>
        <q-toolbar-title class="row justify-center items-center q-mb-none">
          <p class="toolbar-title">מועדון הוויסט</p>
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
export default {
  name: "MainLayout",
  components: {},
  data: () => ({}),
  computed: {
    isDesktop() {
      return this.$q.screen.gt.sm;
    },
  },
  methods: {},
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
