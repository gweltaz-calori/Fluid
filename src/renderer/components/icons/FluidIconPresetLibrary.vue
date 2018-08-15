<template>
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.484375" y="0.670288" width="2.68943" height="2.68943" rx="1" :fill="tint"/>
        <rect x="0.483398" y="6.97449" width="2.68943" height="2.68943" rx="1" :fill="tint"/>
        <rect x="6.78711" y="6.97449" width="2.68943" height="2.68943" rx="1" :fill="tint"/>
        <rect x="6.78711" y="0.670227" width="2.68943" height="2.68943" rx="1" :fill="tint"/>
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
