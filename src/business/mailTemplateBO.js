const Promise         = require('promise');
const logger          = require('../config/logger');
const mail            = require('nodemailer');
const fromMail            = require('../config/secret')

module.exports = function(dependencies) {

   return {

        sendMail: function(subjectText, bodyText, to){
            return new Promise(function(resolve, reject) {
                console.log(fromMail.email)
                console.log(fromMail.password)
                var ownMail = {
                    user: fromMail.email,
                    pass: fromMail.password
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