<template>
    <a class="button" :class="[theme,{'disabled':disabled}]" v-if="href" href="">
        <span><slot></slot></span>
        <span v-if="$slots.icon" class="button-icon">
          <slot name="icon"></slot>
        </span>
    </a>
    <router-link :to="to" :class="[theme,{'disabled':disabled}]" class="button" v-else-if="to">
        <span><slot></slot></span>
        <span v-if="$slots.icon" class="button-icon">
          <slot name="icon"></slot>
        </span>
    </router-link>
    <button :class="[theme,{'disabled':disabled}]" class="button" v-else>
        <span><slot></slot></span>
        <span v-if="$slots.icon" class="button-icon">
          <slot name="icon"></slot>
        </span>
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
  cursor: default;

  color: rgba(255, 255, 255, 0.84);
  background: rgba(169, 169, 169, 0.07);
  border-radius: 45.5097px;
  padding: 15px 20px;
  transition: color 0.3s;
}

.button:hover {
  color: rgba(255, 255, 255, 1);
}

.disabled {
  cursor: not-allowed;
  opacity: 0.3;
}

.button-icon {
  margin-left: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>