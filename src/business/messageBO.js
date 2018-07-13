var Promise         = require('promise');
var logger          = require('../config/logger');
var model           = require('../daos/usersDAO')();

module.exports = function(dependencies) {

  return {
    dependencies: dependencies,

    getResponse: function(request) {
      return new Promise(function(resolve, reject) {
        const dialogflow = require('dialogflow');
        const sessionClient = new dialogflow.SessionsClient();
        sessionClient
        .detectIntent(request)
        .then(responses => {
            console.log(JSON.stringify(responses));
            console.log(responses[0].queryResult)
            console.log(responses[0].fulfillmentMessages)
            console.log('Detected intent');
            const result = responses[0].queryResult;
            console.log(`  Query: ${result.queryText}`);
            
            var parts = request.session.split('|');
            console.log(parts);

            var log = {
              userEmail: parts[2],
              userName: parts[1],
              sessionId: request.session,
              userMessage:request.queryInput.text.text,
              chatMessage: result.fulfillmentText,
              date: new Date()
            }
            console.log(log);
            model.saveLog(log)
            .then(function(r){
              resolve(result.fulfillmentText);
              return true;
            })
            resolve(result.fulfillmentText)
            console.log('Ahoooo');
            console.log(`  Response: ${result.fulfillmentText}`);
            if (result.intent) {
            console.log(`  Intent: ${result.intent.displayName}`);
            } else {
            console.log(`  No intent matched.`);
            }

        })
        .catch(err => {
            console.error('ERROR:', err);
            reject();
        });
        })
      },


      saveLog: function(log) {
        return new Promise(function(resolve, reject) {
          
          model.saveLog(log)
            .then(function(r){
              return true
            })
            .catch(function(e){
              return false;
            })

        });
  
      }
    }   
  };