var restify = require('restify');

var server = restify.createServer();
server.pre(restify.pre.userAgentConnection());

//routers
require('./routes/palindrome')(server);

var port = process.env.PORT || '4000';

server.listen(port);
