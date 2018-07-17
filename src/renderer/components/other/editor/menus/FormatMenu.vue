<template>
    <div class="properties">
          <editor-property>
              <editor-property-header>
                <editor-property-title>{{MediaName.VIDEO}}</editor-property-title>
                <editor-property-actions>
                  <editor-property-action v-if="selectedLayer.videos.length > 0 " @click.native="removeMedia(MediaName.VIDEO)">
                    <fluid-icon-minus></fluid-icon-minus>
                  </editor-property-action>
                  <editor-property-action v-else @click.native="addMedia(MediaName.VIDEO)">
                      <fluid-icon-add ></fluid-icon-add>
                  </editor-property-action>
                </editor-property-actions>
              </editor-property-header>
              <editor-property-content v-show="selectedLayer.videos.length > 0 ">
                <editor-sub-property v-for="(videoMedia,index) in selectedLayer.videos" :key="videoMedia.source">
                  <editor-sub-property-row>
                    <fluid-file-uploader @input="setMediaValue(MediaName.VIDEO,index,'source',$event)" :value="videoMedia.source" :filters="[{ name: 'Videos', extensions: ['webm', 'mp4'] }]"></fluid-file-uploader>
                    <fluid-player-controls :playing="videoMedia.isPlaying"></fluid-player-controls> 
                  </editor-sub-property-row>
                  <editor-sub-property-row>
                      <editor-sub-property-row-name>Volume</editor-sub-property-row-name>
                      <editor-sub-property-row-value @input="setMediaValue(MediaName.VIDEO,index,'volume',$event)" :value="videoMedia.volume" type="range"></editor-sub-property-row-value>
                  </editor-sub-property-row>
                  <editor-sub-property-row>
                      <editor-sub-property-row-name>Play on mouse click</editor-sub-property-row-name>
                      <editor-sub-property-row-value @input="setMediaValue(MediaName.VIDEO,index,'playOnMouseClick',$event)" :value="videoMedia.playOnMouseClick" type="checkbox"></editor-sub-property-row-value>
                  </editor-sub-property-row>
                </editor-sub-property>
              </editor-property-content>
          </editor-property>
          <editor-property>
              <editor-property-header>
                <editor-property-title>{{MediaName.AUDIO}}</editor-property-title>
                <editor-property-actions>
                  <editor-property-action v-if="selectedLayer.audios.length > 0 " @click.native="removeMedia(MediaName.AUDIO)">
                    <fluid-icon-minus></fluid-icon-minus>
                  </editor-property-action>
                  <editor-property-action v-else @click.native="addMedia(MediaName.AUDIO)">
                      <fluid-icon-add ></fluid-icon-add>
                  </editor-property-action>
                </editor-property-actions>
              </editor-property-header>
              <editor-property-content v-show="selectedLayer.audios.length > 0 ">
                <editor-sub-property v-for="(media,index) in selectedLayer.audios" :key="media.source">
                  <editor-sub-property-row>
                    <fluid-file-uploader @input="setMediaValue(MediaName.AUDIO,index,'source',$event)" :value="media.source" :filters="[{ name: 'Audios', extensions: ['mp3', 'wav','ogg'] }]"></fluid-file-uploader>
                    <fluid-player-controls :playing="media.isPlaying"></fluid-player-controls> 
                  </editor-sub-property-row>
                  <editor-sub-property-row>
                      <editor-sub-property-row-name>Volume</editor-sub-property-row-name>
                      <editor-sub-property-row-value @input="setMediaValue(MediaName.AUDIO,index,'volume',$event)" :value="media.volume" type="range"></editor-sub-property-row-value>
                  </editor-sub-property-row>
                  <editor-sub-property-row>
                      <editor-sub-property-row-name>Play on mouse click</editor-sub-property-row-name>
                      <editor-sub-property-row-value @input="setMediaValue(MediaName.AUDIO,index,'playOnMouseClick',$event)" :value="media.playOnMouseClick" type="checkbox"></editor-sub-property-row-value>
                  </editor-sub-property-row>
                </editor-sub-property>
              </editor-property-content>
          </editor-property>
        </div>
</template>

<script>
import { MediaName, VideoMedia, AudioMedia } from "@/models/types";
import { mapGetters, mapActions } from "vuex";

import EditorProperty from "@/components/other/EditorProperty.vue";
import EditorSubProperty from "@/components/other/EditorSubProperty.vue";
import EditorSubPropertyRow from "@/components/other/EditorSubPropertyRow.vue";
import EditorSubPropertyRowName from "@/components/other/EditorSubPropertyRowName.vue";
import EditorSubPropertyRowValue from "@/components/other/EditorSubPropertyRowValue.vue";
import EditorPropertyHeader from "@/components/other/EditorPropertyHeader.vue";
import EditorPropertyContent from "@/components/other/EditorPropertyContent.vue";
import EditorPropertyTitle from "@/components/other/EditorPropertyTitle.vue";
import EditorPropertyActions from "@/components/other/EditorPropertyActions.vue";
import EditorPropertyAction from "@/components/other/EditorPropertyAction.vue";
export default {
  components: {
    EditorSubProperty,
    EditorSubPropertyRow,
    EditorSubPropertyRowName,
    EditorSubPropertyRowValue,
    EditorProperty,
    EditorPropertyHeader,
    EditorPropertyContent,
    EditorPropertyTitle,
    EditorPropertyActions,
    EditorPropertyAction
  },
  data() {
    return {
      MediaName
    };
  },
  computed: {
    ...mapGetters(["selectedLayer"])
  },
  methods: {
    ...mapActions(["addVideo", "removeVideo", "removeAudio", "addAudio"]),
    addMedia(type) {
      switch (type) {
        case MediaName.VIDEO:
          this.addVideo(new VideoMedia());
          break;
        case MediaName.AUDIO:
          this.addAudio(new AudioMedia());
          break;
      }
    },
    canAddProperty(children, type) {
      switch (type) {
        case MediaName.VIDEO:
          return children.length < VideoMedia.MAX_CHILDREN;
          break;
        case MediaName.AUDIO:
          return children.length < AudioMedia.MAX_CHILDREN;
          break;
      }
    },
    removeMedia(type) {
      switch (type) {
        case MediaName.VIDEO:
          this.removeVideo();
          break;
        case MediaName.AUDIO:
          this.removeAudio();
          break;
      }
    },
    setMediaValue(type, index, key, value) {
      let mutationName = "";
      switch (type) {
        case MediaName.VIDEO:
          mutationName = "SET_VIDEO_PROPERTY";
          break;
        case MediaName.AUDIO:
          mutationName = "SET_AUDIO_PROPERTY";
          break;
      }
      this.$store.commit(mutationName, { index, key, value });
    }
  }
};
</script>

<style scoped>
</style>
