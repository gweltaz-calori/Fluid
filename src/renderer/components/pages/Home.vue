<template>
    <div class="home-content">
        <fluid-animated-logo class="logo"></fluid-animated-logo>
        <fluid-big-title class="info"></fluid-big-title>
        <fluid-button class="figma-import-button" :icon="FigmaIcon">import from figma</fluid-button>
        <fluid-button :to="{'name':'Editor'}">open existing fluid</fluid-button>
    </div>
</template>

<script>
import FigmaIcon from "@/assets/icons/figma.svg";
import FluidButton from "@/components/common/FluidButton.vue";
import FluidAnimatedLogo from "@/components/other/FluidAnimatedLogo.vue";
import FluidBigTitle from "@/components/common/FluidBigTitle.vue";
export default {
  components: {
    FluidButton,
    FluidAnimatedLogo,
    FluidBigTitle
  },
  data() {
    return {
      FigmaIcon
    };
  }
};
</script>

<style scoped>
.home-content {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.logo {
  margin-bottom: 40px;
}

.info {
  margin-bottom: 30px;
}

.figma-import-button {
  margin-bottom: 10px;
}
</style>
