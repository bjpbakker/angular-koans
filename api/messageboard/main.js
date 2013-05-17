var MessageBoard = require('./messageboard.js')

var fixedMessageStore = {
  messages: function() {
    return [{id: 1, message: "Welcome to the message board"},
            {id: 2, message: "You've round tripped to the server and back"},
            {id: 3, message: "Well done!"}];
  }
}
var messageBoard = Object.create(MessageBoard);
messageBoard.store = fixedMessageStore;

exports = module.exports = function main(req, res, next) {
  var fn = messageBoard[req.url];
  if (fn === undefined) {
    next()
  } else {
    res.end(JSON.stringify(fn.apply(messageBoard)))
  }
}

