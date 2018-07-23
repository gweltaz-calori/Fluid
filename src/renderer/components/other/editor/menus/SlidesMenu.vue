<template>
    <div class="slides">
        <editor-slide :slide="slide" @click.native="setSelectedFrame(index)" v-for="(slide,index) in slides" :key="slide.id" :selected="currentSlide.id == slide.id"></editor-slide>
    </div>
</template>

<script>
import EditorSlide from "@/components/other/EditorSlide.vue";
import { mapGetters, mapActions } from "vuex";
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
.slide {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 9px;
}

.slides {
  margin-top: 26px;
  height: 100%;
}
</style>
