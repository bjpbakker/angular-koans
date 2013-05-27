var MessageBoard = require('../lib/messageboard')

var fixedMessageStore = {
  messages: function() {
    return [{id: 1, message: "Welcome to the message board"},
            {id: 2, message: "You've round tripped to the server and back"},
            {id: 3, message: "Well done!"}];
  }
}
var messageBoard = Object.create(MessageBoard);
messageBoard.store = fixedMessageStore;

exports = module.exports = {
  list: function(req, res) {
    res.end(JSON.stringify(messageBoard.list()));
  }
}
