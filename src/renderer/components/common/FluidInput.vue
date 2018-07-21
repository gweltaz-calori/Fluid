<template>
    <div class="input-container"  @click="click" > 
        <input ref="input" class="input"  @keyup.enter="exitInput($event)" :value="value" @blur="validateValue($event)" :placeholder="placeholder" type="text">
    </div>
</template>

<script>
export default {
  props: {
    value: {},
    placeholder: {}
  },
  methods: {
    click(e) {
      this.$refs.input.setSelectionRange(0, this.$refs.input.value.length);
    },
    exitInput(event) {
      event.target.blur();
      this.validateValue(event);
    },
    validateValue(event) {
      this.$emit("input", this.$refs.input.value);
    }
  }
};
</script>

<style scoped>
.input-container {
  background: rgba(169, 169, 169, 0.07);
  border-radius: 17.5097px;
  padding: 10px 14px;
  transition: color 0.3s;
}

.input {
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Exo;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 13.1323px;
  text-align: center;
  width: 100%;

  color: rgba(255, 255, 255, 1);
}
</style>
