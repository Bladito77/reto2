// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs //javascript
require('dotenv').config()
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'edwintorresapp@gmail.com', // Change to your recipient
  from: 'ed_blatoco@hotmail.com', // Change to your verified sender
  subject: 'Prueba de envio de correo con sendgrid',
  text: 'esta es una prueba de correo enviado con Node.js',
  html: '<strong>este es un mensaje de prueba de envio con node.js y sendgrid </strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email enviado')
  })
  .catch((error) => {
    console.error(error)
  })