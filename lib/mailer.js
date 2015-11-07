'use strict';

var nodemailer = require('nodemailer');
var transport  = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'wpacks.email.marketing@gmail.com',
        pass: '123123abcD'
    }
});

module.exports = transport;
