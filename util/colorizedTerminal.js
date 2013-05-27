var colorize = require('colorize'),
    util = require('util');

var ColorizedTerminal = {
  info: function(message) {
    var args = Array.prototype.slice.call(arguments, 1).map(
        partial(this._colorize, 'cyan'));
    this._print(this._colorize('yellow', this._format(message, args)))
  },

  message: function(text) {
    this._print(text)
  },

  _print: function(text) {
    colorize.console.log(text)
  },

  _format: function(message, args) {
    return util.format.apply(this, [message].concat(args))
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

exports = module.exports = ColorizedTerminal
