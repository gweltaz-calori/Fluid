<template>
    <div class="animate">
        <fluid-text-info class="info" v-if="isSelectedLayerMultiSelection">Select only one layer to add an animation</fluid-text-info>
    </div>
</template>

<script>
import SecondFormatter from "@/formatter/SecondFormatter";

import { mapGetters, mapActions } from "vuex";

export default {
  components: {},
  data() {
    return {
      secondFormatter: new SecondFormatter()
    };
  },
  computed: {
    ...mapGetters(["isSelectedLayerMultiSelection", "selectedLayersFromTree"])
  },
  methods: {}
};
</script>

<style scoped>
.preview-animation {
  margin: 0 auto;
  margin-top: 7px;
}

.info {
  display: flex;
  text-align: center;
  justify-content: center;
}
</style>
