<template>
    <div class="property">
        <div class="property-container">
          <slot></slot>
        </div>  
        <div class="border"></div>  
    </div>
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

.property {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.property-container {
  padding: 18px 30px;
}
</style>
