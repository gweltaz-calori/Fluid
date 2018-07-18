<template>
    <div class="property-actions">
        <slot></slot> 
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.property-actions {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  position: absolute;
  right: 0;
  height: 100%;
  top: 0;
}
</style>
