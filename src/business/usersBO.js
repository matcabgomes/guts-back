var Promise         = require('promise');
var logger          = require('../config/logger');
//var dialogflow      = require('dialogflow');
module.exports = function() {

  return {

    getSession: function(request) {
        console.log('entered in BO')
      return new Promise(function(resolve, reject) {
          console.log('entered in promise')

        var dialogflow = require('dialogflow');
        console.log('required ok')
        var sessionClient = new dialogflow.SessionsClient();
        console.log('passou aq')
        //var sessionClient = new dialogflow.SessionsClient();

        var projectId = request.projectId;
        console.log('passou aq1')
        
        var sessionId = '|' + request.name + '|' + request.email + '|' + (new Date().toLocaleString()).replace(' ','_');
        console.log('passou aq2')
        
        console.log(projectId)
        console.log(sessionId)
        var chain = Promise.resolve();

        chain
            .then(function(){
                console.log('entered in chain nivel 1')
                return  sessionClient.sessionPath(projectId, sessionId)
            })
            .then(function(r){
                console.log('entrou no segundo nivel chain')
                resolve(r); 
            })
            .catch(function(err){
                reject(err);
            });

      });

    }
  }
}