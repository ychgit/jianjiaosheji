const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(proxy('/v2', { 
  	target: 'https://m.wowdsgn.com',
  	host:"m.wowdsgn.com",
  	changeOrigin:true
   }));
  app.use(proxy('/itemdetail', { 
  	target: 'https://m.wowdsgn.com',
  	host:"m.wowdsgn.com",
  	changeOrigin:true
   }));

};
