const config = {
  environment: process.env.NODE_ENV || 'dev',
  server: {
    port: process.env.PORT || 8081
  }
};

module.exports = config;
