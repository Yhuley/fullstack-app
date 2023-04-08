import { merge } from 'webpack-merge';
import { config as commonConfig } from './webpack.common';

module.exports = (envVars: { env: string }) => {
  const { env } = envVars;
  const envConfig = require(`./webpack.${env}.ts`);
  const config = merge(commonConfig, envConfig);
  return config;
};
