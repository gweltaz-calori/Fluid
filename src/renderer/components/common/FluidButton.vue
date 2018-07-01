<template>
    <a class="button" :class="[theme,{'disabled':disabled}]" v-if="href" href="">
        <slot></slot>
        <img v-if="icon" :src="icon" alt="">
    </a>
    <router-link :to="to" :class="[theme,{'disabled':disabled}]" class="button" v-else-if="to">
        <slot></slot>
        <img v-if="icon" :src="icon" alt="">
    </router-link>
    <button :class="[theme,{'disabled':disabled}]" class="button" v-else>
        <slot></slot>
        <img v-if="icon" :src="icon" alt="">
    </button>
</template>

<script>
export default {
  props: {
    theme: {
      default: "light"
    },
    href: {},
    to: {},
    disabled: {
      default: false
    },
    icon: {}
  }
};
</script>

<style scoped>
.button {
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Exo;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 13.1323px;
  text-align: center;
  cursor: pointer;

  color: rgba(255, 255, 255, 0.84);
  background: rgba(169, 169, 169, 0.07);
  border-radius: 17.5097px;
  padding: 10px 14px;
}

.disabled {
  cursor: not-allowed;
  opacity: 0.3;
}

img {
  margin-left: 12px;
}
</style>