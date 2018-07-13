var mailTemplateBO = require('../../business/mailTemplateBO');

module.exports = function() {
  var business = new mailTemplateBO();

  return {
    sendMail: function(req, res)
    {
        var subject = req.body.subject;
        var bodyText = req.body.text;
        var to = req.body.to;

        business
            .sendMail(subject, bodyText, to)
            .then(function(r){
                res.status(200).json({"response":r});
            })
            .catch(function(error){
                res.status(500).json(error);
            });
    }
  }
};