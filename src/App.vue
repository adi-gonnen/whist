<template>
  <router-view class="app" />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
<style scoped>
.app {
  direction: rtl;
  background-color: #f1ecd9;
}
</style>
