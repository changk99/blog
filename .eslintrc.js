module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:nuxt/recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'no-multi-spaces': 'warn',
    'space-infix-ops': 'error',
    'arrow-spacing': 'error',
    'vue/multi-word-component-names': 'off'
  },
  ignorePatterns: ['index.html', '.gitignore', 'dist/**', '.output/**', '.nuxt/**']
};
