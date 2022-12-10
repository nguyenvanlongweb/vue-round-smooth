import { h, ref, watchEffect } from 'vue';
import round from './lib/attachPaintWorkletScript';
import styles from './styles.module.css';

round();

export default {
  props: ['x', 'y', 'class'],
  setup(props: any, { slots }: any) {
    const corner = ref<string>('3, 3');
    const classes = styles.mask + ' ' + props?.class;

    watchEffect(() => {
      corner.value = `${props.x}, ${props.y}`;
    });

    return () => [
      h(
        <div style={{ '--smooth-corners': corner.value }} class={classes}>
          {slots.default()}
        </div>
      ),
    ];
  },
};
