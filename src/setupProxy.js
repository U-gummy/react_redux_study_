const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/admin',
    createProxyMiddleware({
      target: 'http://192.168.35.5:8080',
      changeOrigin: true,
    })
  );
};