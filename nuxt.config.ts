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
    // has errors at nuxt 4.2.1
    // typeCheck: process.env.NODE_ENV === 'development',
  },
  imports: {
    dirs: ['stores'],
  },
  app: {
    baseURL: process.env.GENERATE_GH ? '/apartment-catalog/' : undefined,
  },
});