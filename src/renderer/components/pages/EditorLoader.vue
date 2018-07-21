<template>
    <div class="editor-loader">
        <svg class="loader" ref="loader" width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path  d="M49.049 24.5245C49.049 38.069 38.069 49.049 24.5245 49.049C10.98 49.049 0 38.069 0 24.5245C0 10.98 10.98 0 24.5245 0C38.069 0 49.049 10.98 49.049 24.5245Z" transform="translate(2.5072 2.47534)" stroke="white" stroke-opacity="0.2" stroke-width="3.27358" stroke-linecap="round"/>
        <path d="M49.049 24.5245C49.049 38.069 38.069 49.049 24.5245 49.049C10.98 49.049 0 38.069 0 24.5245C0 10.98 10.98 0 24.5245 0" transform="translate(2.5072 2.47534)" stroke="white" stroke-width="3.27358" stroke-linecap="round"/>
        </svg>
        <div class="steps">
            <div ref="steps" class="step" :class="{'active':currentStep == step}" v-for="step in steps" :key="step">{{step}}</div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import { getFrames, getImages } from "@/api";
import { TweenMax } from "gsap/TweenMax";
export default {
  data() {
    return {
      steps: ["ALMOST READY", "CREATING IMAGES", "FETCHING FRAMES"],
      currentStep: null
    };
  },
  methods: {
    ...mapActions(["setFrames"]),
    animateLoaderIn() {
      TweenMax.to(this.$refs.loader, 2, {
        opacity: 1,
        y: 0
      });
      TweenMax.to(this.$refs.loader, 1, {
        ease: Linear.easeNone,
        repeat: -1,
        paused: false,
        rotation: 360
      });
    },
    animateLoaderOut() {
      return new Promise((resolve, reject) => {
        TweenMax.to(this.$refs.loader, 1, {
          opacity: 0,
          ease: Quad.easeInOut
        });

        TweenMax.to(this.$refs.steps, 1, {
          opacity: 0,
          ease: Quad.easeInOut,
          onComplete: resolve
        });
      });
    }
  },
  async beforeMount() {
    this.currentStep = this.steps[2];
    const frames = await getFrames(this.$route.params.key);

    this.currentStep = this.steps[1];
    const framesWithImages = await getImages(this.$route.params.key, frames);
    this.currentStep = this.steps[0];
    this.setFrames(framesWithImages);
    await this.animateLoaderOut();
    this.$router.push({
      name: "Editor"
    });
  },
  mounted() {
    this.animateLoaderIn();
  }
};
</script>

<style scoped>
.editor-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.steps {
  display: flex;
  flex-direction: column;
  margin-left: 46px;
}

.step {
  margin: 2.7px 0;
  pointer-events: none;
  font-family: Exo;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 23.0467px;
  opacity: 0.08;

  color: #ffffff;

  transition: opacity 0.8s;
}

.step.active {
  opacity: 1;
}

.loader {
  opacity: 0;
  transform: translateY(20px);
}
</style>
