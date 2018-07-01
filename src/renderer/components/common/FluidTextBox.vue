<template>
    <input @input="changeValue" :placeholder="placeholder" type="text">
</template>

<script>
export default {
  props: ["placeholder", "value"],
  methods: {
    changeValue() {
      this.$emit("input", this.$event.target.value);
    }
  }
};
</script>

<style scoped>
input {
  background-color: transparent;

  font-family: Exo;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 13.4435px;

  color: #ffffff;
}
</style>
