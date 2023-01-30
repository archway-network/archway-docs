import path from 'path';

export const envPath = path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`);
export const defaultEnvPath = path.resolve(process.cwd(), '.env');
