/* eslint-disable */
module.exports = {
  apps: [
    {
      name: 'blog client',
      script: './initializers/server/index.js',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV:  'production',
      },
    },
    {
      name: 'API server',
      script: './blogserver/index.js',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV:  'production',
      },
    }
  ]
};
