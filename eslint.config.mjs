// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'vue/no-multiple-template-root': 'off',
    'vue/html-closing-bracket-spacing': ['error', {
      startTag: 'never',
      endTag: 'never',
      selfClosingTag: 'always',
    }],
    'comma-dangle': ['error', 'always-multiline'],
    'quotes': ['error', 'single', { avoidEscape: true }],
    'vue/component-name-in-template-casing': ['error', 'PascalCase', { registeredComponentsOnly: false }],
  },
})
