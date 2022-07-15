<template>
  <router-view class="app" />
</template>

<script>
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";

export default defineComponent({
  name: "App",
  components: {},
  data: () => ({}),
  computed: {
    ...mapState({
      data: (state) => state.league.data,
    }),
  },
  created() {
    this.getData();
  },
  methods: {
    ...mapActions({
      getData: "league/getData",
    }),
  },
});
</script>
<style scoped>
.app {
  direction: rtl;
  background-color: #f1ecd9;
}
</style>
