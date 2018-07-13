
module.exports = function(app) {
    var controller = app.controllers.mailTemplate;
  
    app.route('/v1/mail/send')
      .post(controller.sendMail);
  };
  