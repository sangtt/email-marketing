'use strict';

var emailTemplates = require('email-templates');
var mailer         = require('./mailer');

module.exports = function (templatesDir) {

    emailTemplates(templatesDir, function(err, template) {

        if (err) {
            console.log(err);
        } else {

            var locals = {
                email : 'thanhsangvnm@gmail.com',
                url   : 'http://acme.com/confirm/xxx-yyy-zzz'
            };

            // Send a single email
            template('confirm-email', locals, function(err, html, text) {
                if (err) {
                    console.log(err);
                } else {
                    mailer.sendMail({
                        from    : 'Sang Truong <sang.truong@wpacks.com>',
                        to      : locals.email,
                        subject : 'Please confirm your e-mail address',
                        html    : html,
                        text    : text
                    }, function(err, responseStatus) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log(responseStatus.message);
                        }
                    });
                }
            });
       }
    });
}
