<script setup lang="ts"></script>
<template>
  <div class="mask">dfd</div>
  <VueRoundSmooth :x="3" :y="3" class="color color1"> sdsds </VueRoundSmooth>
  <VueRoundSmooth :x="12" :y="3" class="color"> sdsds </VueRoundSmooth>
  <VueRoundSmooth :x="12" :y="3" class="color">
    <div>Hello</div>
  </VueRoundSmooth>
</template>
<style>
.color {
  margin: 10px;
  background: #d01257; /* So you can see it */
  text-align: center;
  color: bisque;
  font-size: 2rem;
  width: 160px;
  height: 50px;
}

.color1 {
  background: green;
}
</style>
