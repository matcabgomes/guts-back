var messageBO = require('../../business/messageBO');

module.exports = function() {
  var business = new messageBO({});

  return {
    getResponse: function(req, res)
    {
        request = req.body;
        business
            .getResponse(request)
            .then(function(r){
                res.status(200).json({"response":r});
            })
            .catch(function(error){
                res.status(500).json(error);
            });
    }
    
  }
};