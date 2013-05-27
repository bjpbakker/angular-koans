#!/usr/bin/env node

var express = require('express'),
    routes = require('./routes'),
    http = require('http'),
    terminal = require('./util');

function main(terminal) {
  var app = express();
  app.set('port', process.env.PORT || 8080);
  app.use(express.static(__dirname + '/public'));
  app.get('/api/messageboard/list', routes.messageboard.list);
  http.createServer(app).listen(app.get('port'), function() {
    terminal.info("Server started on port: %s", app.get('port'));
    terminal.message("press CTRL-C to stop the server");
  });
}

main(terminal.colorized);

