import type { TTheme } from '~/types/common';

declare module 'nuxt/schema' {
  interface AppConfig {
    theme: TTheme
  }
}

export {};