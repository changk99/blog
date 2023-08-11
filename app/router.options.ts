import type { RouterConfig } from '@nuxt/schema';
// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (to.hash && to.path === from.path) {
      return {
        behavior: 'smooth',
        top: 64,
        el: to.hash
      };
    } else {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            savedPosition || {
              top: 0
            }
          );
        }, 300);
      });
    }
  }
};
