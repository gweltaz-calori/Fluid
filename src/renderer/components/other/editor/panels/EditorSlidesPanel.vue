<template>
    <div class="panel">
      <div class="title">Slides</div>
      <fluid-scrollable-container height="100%" class="slides">
        <editor-slide @click.native="setSelectedFrame(index)" v-for="(slide,index) in slides" :key="slide.id" :selected="currentSlide.id == slide.id"></editor-slide>
      </fluid-scrollable-container>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import EditorSlide from "@/components/other/EditorSlide.vue";

export default {
  components: {
    EditorSlide
  },
  computed: {
    ...mapGetters(["slides", "currentSlide"])
  },
  methods: {
    ...mapActions(["setSelectedFrame"])
  }
};
</script>

<style scoped>
.panel {
  position: absolute;
  /* padding: 30.5px 50px; */
  padding: 30.5px 0;
  top: 0;
  left: 0;
  bottom: 0;
  width: 246px;
  background: #181818;
}

.title {
  padding: 0 50px;
  text-transform: uppercase;
  font-family: Exo;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 11px;

  color: #ffffff;
}

.slides {
  margin-top: 26px;
  height: calc(100% - 30.5px);
}

.slide {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 9px;
}
</style>
