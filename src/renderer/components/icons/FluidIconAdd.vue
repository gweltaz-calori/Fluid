<template>
    <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1.56397" height="11.2954" transform="translate(4.71802 0.852295)" :fill="tint"/>
        <rect width="1.55592" height="11" transform="translate(11 5.72202) rotate(90)" :fill="tint"/>
    </svg>
</template>

<script>
export default {
  props: {
    tint: {
      default: "white"
    }
  }
};
</script>

