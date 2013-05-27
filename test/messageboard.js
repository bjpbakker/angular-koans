var sinon = require('sinon')

var MessageBoard = require('../lib/messageboard/messageboard.js')

describe('message-board', function() {
  var subject
  var store

  beforeEach(function() {
    subject = Object.create(MessageBoard);
    subject.store = store = {};
  })

  it ('lists the messages are that posted on the board', function() {
    var messages = ['msg-1', 'msg-2'];
    store.messages = sinon.stub().returns(messages)
    subject.list().should.eql(messages)
  })
})

