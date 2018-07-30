<template>
    <div class="home-content">
        <fluid-animated-logo class="logo"></fluid-animated-logo>
        <fluid-big-title class="info"></fluid-big-title>
        <fluid-button-input v-model="figmaLinkUrl" class="figma-import-button" v-if="linkInputActive" placeholder="PASTE FIGMA LINK">
          <fluid-input-button-action  @click.native="checkFigmaLink">
            <fluid-icon-arrow ></fluid-icon-arrow>
          </fluid-input-button-action>
        </fluid-button-input>
        <fluid-button ref="buttonInput" v-else @click.native="toggleInput" class="figma-import-button">
          import from figma
          <fluid-icon-figma slot="icon"></fluid-icon-figma>
        </fluid-button>
        <fluid-button :to="{'name':'Editor'}">open existing fluid</fluid-button>
    </div>
</template>

<script>
import { FIGMA_URL_REGEX } from "@/utils/regex";
import FluidAnimatedLogo from "@/components/other/FluidAnimatedLogo.vue";
export default {
  components: {
    FluidAnimatedLogo
  },
  data() {
    return {
      linkInputActive: false,
      figmaLinkUrl: ""
    };
  },
  methods: {
    checkFigmaLink() {
      let matches = this.figmaLinkUrl.match(FIGMA_URL_REGEX);
      if (!matches) {
        return;
      }

      this.$router.push({
        name: "EditorLoader",
        params: {
          key: matches[3]
        }
      });
    },
    toggleInput() {
      this.linkInputActive = !this.linkInputActive;
    }
  },
  mounted() {
    if (this.$route.params.fromMenu) {
      this.$refs.buttonInput.$el.click();
    }
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
