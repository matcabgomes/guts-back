var util = require('util');

module.exports = {
    mongoUrl : util.format('mongodb://%s/%s',
                      process.env.DB_SERVER || 'localhost',
                      process.env.DB_NAME   || 'annabeth-services'),
    servicePort : process.env.PORT || 5000,
    isMongoDebug : true
};
