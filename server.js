#!/usr/bin/env node

var HTTP_PORT = 8080;

var util = require('util');
var connect = require('connect');
var colorize = require('colorize')

var Server = {
  run: function (port, terminal) {
    connect()
      .use(connect.static(__dirname))
      .listen(port);
    terminal.info("Server started on port: %s", __dirname, port)
    terminal.message("press CTRL-C to stop the server")
  }
}

var ColorizedTerminal = {
  info: function(message, args) {
    args = this._colorize_values('cyan', Array.prototype.slice.call(arguments, 1))
    this._log(this._colorize('yellow', this._format(message, args)))
  },

  message: function(text) {
    this._log(text)
  },

  _log: function(text) {
    colorize.console.log(text)
  },

  _format: function(message, args) {
    return util.format.apply(this, [message].concat(args))
  },

  _colorize_values: function(color, args) {
    return args.map(partial(this._colorize, color))
  },

  _colorize: function(color, text) {
    return util.format('#%s[%s]', color, text)
  }
}

function partial(fn) {
  fixed_args = Array.prototype.slice.call(arguments, 1)
  return function() {
    dynamic_args = Array.prototype.slice.call(arguments)
    args = fixed_args.concat(dynamic_args)
    return fn.apply(null, args)
  }
}

function main() {
  var terminal = ColorizedTerminal
  Server.run(HTTP_PORT, terminal)
}

main()

