import path from 'path';

export const envPath = path.resolve(process.cwd(), `.env.${process.env.NODE_ENV || "development"}`);
export const defaultEnvPath = path.resolve(process.cwd(), '.env');

export const archwayVersion = 'v2.0.0'