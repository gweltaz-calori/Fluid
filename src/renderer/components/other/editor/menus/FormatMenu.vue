<template>
    <div>
        <div class="properties">
          <editor-property v-for="(mediaName,mediaValue) in MediaName" :key="mediaName">
              <editor-property-header>
                <editor-property-title>{{mediaName}}</editor-property-title>
                <editor-property-actions>
                  <editor-property-action>
                      <fluid-icon-add @click.native="addMedia(mediaValue)"></fluid-icon-add>
                  </editor-property-action>
                </editor-property-actions>
              </editor-property-header>
              <editor-property-content>
                <editor-sub-property>
                    <fluid-file-uploader v-model="file" :filters="[{ name: 'Videos', extensions: ['webm', 'mp4'] }]"></fluid-file-uploader>
                </editor-sub-property>
                <editor-sub-property>
                    <editor-sub-property-name>Volume</editor-sub-property-name>
                    <editor-sub-property-value value="5" type="range"></editor-sub-property-value>
                </editor-sub-property>
                <editor-sub-property>
                    <editor-sub-property-name>Play on mouse click</editor-sub-property-name>
                    <editor-sub-property-value v-model="checkValue" type="checkbox"></editor-sub-property-value>
                </editor-sub-property>
              </editor-property-content>
          </editor-property>
        </div>
    </div>
</template>

<script>
import { MediaName, VideoMedia, AudioMedia } from "@/models/types";
import { mapGetters, mapActions } from "vuex";

import EditorProperty from "@/components/other/EditorProperty.vue";
import EditorSubProperty from "@/components/other/EditorSubProperty.vue";
import EditorSubPropertyName from "@/components/other/EditorSubPropertyName.vue";
import EditorSubPropertyValue from "@/components/other/EditorSubPropertyValue.vue";
import EditorPropertyHeader from "@/components/other/EditorPropertyHeader.vue";
import EditorPropertyContent from "@/components/other/EditorPropertyContent.vue";
import EditorPropertyTitle from "@/components/other/EditorPropertyTitle.vue";
import EditorPropertyActions from "@/components/other/EditorPropertyActions.vue";
import EditorPropertyAction from "@/components/other/EditorPropertyAction.vue";
export default {
  components: {
    EditorSubProperty,
    EditorSubPropertyName,
    EditorSubPropertyValue,
    EditorProperty,
    EditorPropertyHeader,
    EditorPropertyContent,
    EditorPropertyTitle,
    EditorPropertyActions,
    EditorPropertyAction
  },
  data() {
    return {
      MediaName,
      checkValue: false,
      file: null
    };
  },
  computed: {
    ...mapGetters(["selectedLayer"])
  },
  methods: {
    ...mapActions(["addMediaToSelectedLayer"]),
    addMedia(mediaType) {
      let media;
      switch (mediaType) {
        case MediaName.AUDIO:
          media = new AudioMedia();
          break;
        case MediaName.VIDEO:
          media = new VideoMedia();
          break;
      }

      this.addMediaToSelectedLayer(media);
    }
  }
};
</script>

<style scoped>
</style>
