<template>
    <div @click="focus" class="input-container">
      <input @input="input($event)" ref="input" :value="value" :placeholder="placeholder" type="text">
      <slot></slot>  
    </div>
</template>

<script>
export default {
  props: {
    icon: {},
    placeholder: {},
    value: {}
  },
  data() {
    return {
      active: false
    };
  },
  watch: {
    active() {
      if (this.active) {
        this.focus();
      }
    }
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    input(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>

<style scoped>
.input-container {
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: normal;

  background: rgba(169, 169, 169, 0.07);
  border-radius: 30px;
  padding: 10.29px 14.49px;
}

input {
  color: rgba(255, 255, 255, 0.84);

  text-transform: uppercase;
  font-family: Exo;
  font-style: normal;
  font-weight: 900;
  font-size: 13.1323px;
  text-align: center;
  width: 131px;
}

.input-action {
  margin-left: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24.44px;
  height: 24.44px;
  border-radius: 50%;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.14);
}
</style>