export default defineNuxtPlugin((nuxtApp) => {
  if (!process.dev) {
    nuxtApp.hook('vue:error', (err) => {
      console.log(err);
    });
  }
});
