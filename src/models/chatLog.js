var mongoose = require('mongoose');
var mongooseSchema =  mongoose.Schema;

var model = null;

module.exports = function(){
  var schema = mongooseSchema({
    userEmail: {
        type: String,
        required:true
    },
    userName: {
        type: String,
        required:true
    },
    sessionId: {
        type: String,
        required:true
    },
    userMessage:{
        type: String,
        required:true
    },
    chatMessage:{
        type: String,
        required:true
    },
    date: {
        type: Date,
        type: Boolean
    }
  });

  model = model ? model : mongoose.model('chatLog', schema);

  return model;
};
