<template>
    <div class="property-action" :class="{'visible':visible}">
        <slot></slot> 
    </div>
</template>

<script>
export default {
  props: {
    visible: {
      default: true
    }
  }
};
</script>

<style scoped>
.property-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 10px;
  height: 24px;
  width: 24px;

  pointer-events: none;
  opacity: 0;
}

.property-action.visible {
  pointer-events: all;
  opacity: 1;
}
</style>
