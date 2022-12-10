<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import round from './lib/attachPaintWorkletScript';
round();

const props = defineProps({
  x: { type: Number, required: true },
  y: { type: Number, required: true },
});

const corner = ref<string>('3, 3');

watchEffect(() => {
  corner.value = `${props.x}, ${props.y}`;
});
</script>
<template>
  <div class="mask">
    <slot></slot>
  </div>
</template>
<style>
.mask {
  --smooth-corners: v-bind(corner);
  mask-image: paint(smooth-corners);
  -webkit-mask-image: paint(smooth-corners);
}
</style>
