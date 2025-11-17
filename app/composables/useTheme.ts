import type { TTheme } from '~/types/common';

export default function useTheme() {
  const appConfig = useAppConfig();
  const appTheme = useCookie<TTheme>('app-theme', {
    default: () => appConfig.theme,
  });

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