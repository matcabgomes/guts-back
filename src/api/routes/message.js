
module.exports = function(app) {
    var controller = app.controllers.message;
  
    app.route('/v1/conversation')
      .post(controller.getResponse);
  };
  