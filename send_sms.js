// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
require('dotenv').config();
const twilio = require('twilio');

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
var client = new twilio(accountSid, authToken);

client.messages
  .create({
     body: 'Jael needs love <3',
     from: process.env.TWILIO_PHONE,
     to: process.env.TYLER_PHONE
   })
  .then(message => console.log(message.sid));
