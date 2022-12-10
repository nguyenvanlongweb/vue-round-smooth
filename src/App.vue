<script setup lang="ts"></script>
<template>
  <div class="mask">dfd</div>
  <VueRoundSmooth :x="3" :y="3" class="box box1"> sdsds </VueRoundSmooth>
  <VueRoundSmooth :x="12" :y="3" class="box"> sdsds </VueRoundSmooth>
  <VueRoundSmooth :x="12" :y="3" class="box">
    <div>Hello</div>
  </VueRoundSmooth>
</template>
<style>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  background: #d01257;
  color: white;
  font-size: 2rem;
  width: 160px;
  height: 50px;
}

.box1 {
  background: green;
  width: 160px;
  height: 160px;
}
</style>
