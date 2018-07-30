<template>
    <div class="property-action" :class="{'visible':visible}">
        <slot></slot> 
        <div class="property-action-background"></div>
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
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  margin-left: 10px;
  height: 24px;
  width: 24px;

  pointer-events: none;
  opacity: 0;
}

.property-action-background {
  position: absolute;
  background-color: rgba(169, 169, 169, 0.04);
  border-radius: 39px;
  padding: 15px;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: opacity 0.05s;
}

.property-action-background:hover {
  opacity: 1;
}

.property-action.visible {
  pointer-events: all;
  opacity: 1;
}
</style>
