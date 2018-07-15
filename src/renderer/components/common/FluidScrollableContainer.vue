<template>
    <div class="scroll-container">
        <div class="scroll-content" :style="{'height':'100%',width: 'calc(100% + 17px)'}">
            <slot></slot>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.scroll-container {
  overflow: hidden;
}
.scroll-content {
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
