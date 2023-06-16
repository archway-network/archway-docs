import { AppConfig } from '@/types';

export const useConfig = (): AppConfig => {
  const config = useAppConfig();

  return config as AppConfig;
};
