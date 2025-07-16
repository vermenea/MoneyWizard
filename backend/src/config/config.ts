import dotenv from 'dotenv';

dotenv.config();

interface Config {
  PORT: number;
  nodeEnv: string;
}

const config: Config = {
  PORT: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
};

export default config;
