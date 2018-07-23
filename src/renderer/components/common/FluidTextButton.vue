<template>
    <a class="button" :class="[{'focus':focus}]" v-if="href" href="">
        <slot></slot>
        <img v-if="icon" :src="icon" alt="">
    </a>
    <router-link :to="to" :class="[{'focus':focus}]" class="button" v-else-if="to">
        <slot></slot>
        <img v-if="icon" :src="icon" alt="">
    </router-link>
    <button class="button" :class="[{'focus':focus}]" v-else>
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
    icon: {},
    focus: false
  }
};
</script>

<style scoped>
.button {
  font-family: Exo;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 11px;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;

  color: rgba(255, 255, 255, 0.5);
}
.button.focus {
  color: #ffffff;
}

img {
  margin-left: 4px;
}
</style>
