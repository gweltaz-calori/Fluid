<template>
    <div class="panel">
        <slot></slot>
    </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style scoped>
.panel {
  position: absolute;
  top: 0;
  right: 0;
  background: #181818;
  display: flex;
  flex-direction: column;
  width: 305px;
  height: 100%;
  padding: 18px 0;
}
</style>
