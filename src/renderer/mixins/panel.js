//simple mixin to inject the color of panels everywhere

export default {
  computed: {
    panelStyle() {
      return {
        background: this.$store.getters.themeColors.overlay
      };
    },
    panelBorderStyle() {
      return {
        background: this.$store.getters.themeColors.text,
        opacity: 0.11
      };
    }
  }
};
