import type { RouterConfig } from '@nuxt/schema';
// https://router.vuejs.org/api/interfaces/routeroptions.html
let timer: number | null = null;
export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (timer) {
      clearTimeout(timer);
    }
    if (to.hash && to.path === from.path) {
      return {
        behavior: 'smooth',
        top: 64,
        el: to.hash
      };
    } else {
      return new Promise((resolve) => {
        timer = setTimeout(() => {
          resolve(
            savedPosition || {
              top: 0
            }
          );
        }, 300) as any as number;
      });
    }
  }
};
