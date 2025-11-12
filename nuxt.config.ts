export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore'],
      },
    ],
  ],
  css: [
    '~/assets/scss/main.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: [
            '@use "~/assets/scss/functions.scss" as *;',
          ].join(''),
        },
      },
    },
  },
  typescript: {
    typeCheck: process.env.NODE_ENV === 'development',
  },
  imports: {
    dirs: ['stores'],
  },
});