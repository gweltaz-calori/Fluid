<template>
    <div class="checkbox" @click="changeValue">
      <fluid-icon-box-check v-if="value"></fluid-icon-box-check>
    </div>
</template>

<script>
export default {
  props: {
    value: {}
  },

  methods: {
    changeValue() {
      this.$emit("input", !this.value);
    }
  }
};
</script>

<style scoped>
.checkbox {
  width: 14.81px;
  height: 14.81px;
  background: #222222;
  border-radius: 2.48634px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
