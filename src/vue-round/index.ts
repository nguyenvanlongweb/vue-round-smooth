import VueRound from './VueRound.vue';

const vueRoundSmooth = {
  install(app: any) {
    app.component('VueRoundSmooth', VueRound);
  },
};

export default vueRoundSmooth;
