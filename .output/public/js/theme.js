const themeKey = 'vueuse-color-scheme';
if (localStorage) {
  const theme = localStorage.getItem(themeKey);
  if (theme === 'dark') {
    document.documentElement.classList.toggle('dark', true);
  } else {
    document.documentElement.classList.remove('dark');
  }
}
