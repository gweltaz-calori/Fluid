<template>
    <div class="property-action">
        <slot></slot> 
    </div>
</template>

<script>
export default {};
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
}
</style>
