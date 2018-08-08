<template>
    <div class="overlay">
        <slot></slot>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  user-select: none;
}
</style>
