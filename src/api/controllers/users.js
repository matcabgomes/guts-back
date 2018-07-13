var usersBO = require('../../business/usersBO');

module.exports = function() {
  var business = new usersBO();

  return {
    getSession: function(req, res)
    {
        console.log('Entered in controller')
        request = req.body;
        business
            .getSession(request)
            .then(function(r){
                res.status(200).json({"response":r});
            })
            .catch(function(error){
                res.status(500).json(error);
            });
    }
  }
};