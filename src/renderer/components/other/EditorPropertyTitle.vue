<template>
    <span class="property-title">
        <slot></slot>
    </span>
</template>

<script>
export default {};
</script>

<style scoped>
.border {
  height: 0.8px;
  background-color: rgba(255, 255, 255, 0.04);
  width: 100%;
}

.property-title {
  text-transform: uppercase;
  font-family: Exo;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-size: 11px;

  color: rgba(255, 255, 255, 0.84);
}
</style>
