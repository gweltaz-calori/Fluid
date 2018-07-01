<template>
    <div class="info">
        <fluid-info-name class="name"></fluid-info-name>
        <fluid-info-value class="value"></fluid-info-value>
    </div>
</template>

<script>
import FluidInfoName from "@/components/common/FluidInfoName.vue";
import FluidInfoValue from "@/components/common/FluidInfoValue.vue";

export default {
  components: {
    FluidInfoValue,
    FluidInfoName
  }
};
</script>

<style scoped>
.info {
  display: flex;
  align-items: center;
}
.name {
  margin-right: 21px;
}
.value {
  margin-left: auto;
}
</style>
