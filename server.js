#!/usr/bin/env node

var HTTP_PORT = 8080;

var util = require('util');
var connect = require('connect');

var Server = {
  run: function (port, terminal) {
    connect.createServer(
        connect.static(__dirname)
    ).listen(port);
    terminal.info("Server serving %s on port: %s", __dirname, port)
    terminal.message("press CTRL-C to stop the server")
  }
}

var ColorizedTerminal = {
  YELLOW: "\033[33m",
  CYAN: "\033[36m",
  NORMAL: "\033[0m",

  info: function(message, args) {
    args = this._colorize(Array.prototype.slice.call(arguments, 1), this.CYAN, this.YELLOW)
    console.log(this.YELLOW + this._format(message, args) + this.NORMAL)
  },

  message: function(text) {
    console.log(text)
  },

  _format: function(message, args) {
    return util.format.apply(this, [message].concat(args))
  },

  _colorize: function(args, color, reset) {
    return args.map(function(arg) { return color + arg + reset })
  }
}

function main() {
  var terminal = ColorizedTerminal
  Server.run(HTTP_PORT, terminal)
}

main()

