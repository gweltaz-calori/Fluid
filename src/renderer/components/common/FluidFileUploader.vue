<template>
    <div class="upload-button" @click="chooseFile">
        <div v-if="!value" class="upload-file-placeholder">Pick a file</div>
        <div v-else class="upload-file-name">{{fileName}}</div>
        <fluid-icon-cross  class="choose-icon"></fluid-icon-cross>
    </div>
</template>

<script>
const { dialog } = require("electron").remote;
export default {
  props: ["filters", "value"],
  methods: {
    chooseFile() {
      dialog.showOpenDialog(
        {
          properties: ["openFile"],
          filters: this.filters
        },
        filePath => this.$emit("input", filePath[0])
      );
    }
  },
  computed: {
    fileName() {
      return this.value
        .split("\\")
        .pop()
        .split("/")
        .pop();
    }
  }
};
</script>

<style scoped>
.upload-file-name,
.upload-file-placeholder {
  font-family: Exo;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 9px;
  text-align: center;
  text-transform: uppercase;

  color: #ffffff;
  opacity: 0.6;
  transition: opacity 0.3s;
}
.upload-button {
  left: 1681.53px;
  top: 132.32px;
  padding: 8.24px 14px;

  background: rgba(53, 53, 53, 0.33);
  border-radius: 15.8177px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
}
.upload-button:hover .upload-file-name,
.upload-button:hover .upload-file-placeholder,
.upload-button:hover .choose-icon {
  opacity: 1;
}

.choose-icon {
  margin-left: 6px;
  opacity: 0.6;
  transition: opacity 0.3s;
}
</style>
