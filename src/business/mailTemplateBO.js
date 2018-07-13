var Promise         = require('promise');
var logger          = require('../config/logger');
var mail            = require('nodemailer');

module.exports = function(dependencies) {

   return {

        sendMail: function(subjectText, bodyText, to){
            return new Promise(function(resolve, reject) {
                var ownMail = {
                    user: "sammy.sysmap@gmail.com",
                    pass: "Hack.321"
                }

                var transporter = mail.createTransport({
                    host: "smtp.gmail.com",
                    port: 465,
                    secure: true,
                    auth: ownMail
                });
                var mailOptions = {
                    from: "Você <" + ownMail.user +">",
                    to: to,
                    subject: subjectText,
                    text: bodyText
                }
                var chain = Promise.resolve();

                chain
                .then(function(){
                    return transporter.sendMail(mailOptions, function(err, info){
                        if(err){
                            console.log(err);                 
                        }else{
                            console.log("Mensagem enviada com sucesso");
                        }
                    })
                })
                .then(function(r){
                    resolve("Mensagem enviada com sucesso!");
                })
                .catch(function(err){
                    reject(err);
                });
            });
        }
    }
    

}