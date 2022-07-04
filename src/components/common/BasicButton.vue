<template>
  <q-btn
    :label="elem.label"
    :type="elem.type"
    :icon="elem.icon"
    :size="elem.size || '16px'"
    :icon-right="elem.iconRight"
    :color="elem.color || 'black'"
    :text-color="elem.textColor"
    :no-caps="elem.noCaps || true"
    :no-wrap="elem.noWrap || false"
    :flat="elem.flat"
    :outline="elem.outline"
    :glossy="elem.glossy"
    :unelevated="elem.unelevated"
    :round="elem.round"
    :stack="elem.stack"
    :ripple="elem.ripple"
    :dense="elem.dense"
    :disable="elem.disable"
    :loading="elem.loading"
    :padding="elem.padding"
    :align="elem.align"
    :class="elem.class"
    class="basic-button"
    @click="$emit('onClick')"
    @mouseenter="$emit('onMouseEnter')"
    @mouseleave="$emit('onMouseLeave')"
  >
    <slot v-if="content" />
  </q-btn>
</template>

<script>
export default {
  props: ["elem", "content"],
  emits: ["onClick", "onMouseEnter", "onMouseLeave"],
};
</script>

<style scoped lang="scss">
.basic-button::v-deep() {
  .q-focus-helper {
    background: transparent !important;
  }
  & .q-icon {
    font-weight: unset;
  }
}
</style>
