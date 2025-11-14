import { useLocalStorage } from '@vueuse/core';
import type { TTheme } from '~/types/common';

export default function useTheme() {
  const appConfig = useAppConfig();
  const appTheme = useLocalStorage<TTheme>('app-theme', appConfig.theme);

  const changeTheme = (newTheme: TTheme) => {
    appTheme.value = newTheme;
    updateAppConfig({
      ...appConfig,
      theme: newTheme,
    });
  };

  return {
    appTheme,
    changeTheme,
  };
}