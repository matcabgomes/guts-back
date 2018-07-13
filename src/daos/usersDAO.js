var logger              = require('winston');
var model               = require('../models/chatLog')();
var Promise             = require('promise');

module.exports = function() {
  return {

    saveLog: function(entity) {
        return new Promise(function(resolve, reject) {
          logger.log('info', 'Creating a new chatLog', entity);
  
          model.create(entity)
          .then(function(item) {
            logger.log('info', 'The chatLog has been created succesfully');
            resolve(item);
          }).catch(function(erro) {
            logger.log('error', 'An chatLog has ocurred while creating a new server', erro);
            reject(erro);
          });
        });
    } 
  
  }
}