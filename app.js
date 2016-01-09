var Hapi = require('hapi');
var path = require('path');
var Inert = require('inert');


var server = new Hapi.Server();
server.connection({
    port: 8083
});

server.register(Inert, function () {});


server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: path.join(__dirname, '/'),
            index: true
        }
    }
});


server.start(function () {
    server.log('info', 'Server running at: ' + server.info.uri);
});
