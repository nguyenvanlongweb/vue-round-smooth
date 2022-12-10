import VueRound from './VueRound.vue';

type Options = {
  componentName: string;
} | null;

const createVueRoundSmooth = (options?: Options) => {
  const name: string = options?.componentName || 'VueRoundSmooth';

  return {
    install(app: any) {
      app.component(name, VueRound);
    },
  };
};

export { createVueRoundSmooth, VueRound as VueRoundComponent };
