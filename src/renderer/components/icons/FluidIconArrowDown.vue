<template>
    <svg width="5" height="4" viewBox="0 0 5 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 4.30407V1.07602V0L2.86938 2.15204L0 4.30407Z" transform="translate(4.49414 0.498169) rotate(90)" :fill="tint"/>
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
