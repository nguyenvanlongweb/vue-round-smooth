# Installation

```sh
npm install vue-round-smooth
yarn add vue-round-smooth
```

# Usage

1.  Import package

```js
import vueRoundSmooth from 'vue-round-smooth';

app.use(vueRoundSmooth);
```

2. Use in components

```html
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
    background: #d01257;
    text-align: center;
    color: #fff;
    font-size: 2rem;
    width: 160px;
    height: 50px;
  }

  .color1 {
    background: green;
  }
</style>
```

# Props

| Name | Description |

| Name |          Description          |
| ---- | :---------------------------: |
| x    | Horizontal axis bending index |
| y    |      Axial bending index      |
