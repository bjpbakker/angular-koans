exports = module.exports = function main(req, res, next) {
  var fn = MessageBoard[req.url];
  if (fn === undefined) {
    next()
  } else {
    res.end(JSON.stringify(fn()))
  }
}

var MessageBoard = {
  list: function() {
    return [{ id: 1, message: 'Welcome to the message board' }];
  }
}

