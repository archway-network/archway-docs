import { AppConfig } from '@/types';

const useConfig = (): AppConfig => {
  const config = useAppConfig();

  return config as AppConfig;
};

export default useConfig;
