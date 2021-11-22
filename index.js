

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

//mensaje sms
client.messages.create({
     body: 'Bienvenidos a la prueba mensaje de texto de twilio del dia de hoy',
     from: '+19496196793',
    to: '+573005694201'
   }).then(message => console.log('mensaje enviado ${message.sid}'))

  //mensajes whatsapp
  client.messages.create({
    body: 'Bienvenidos a la prueba Whatsapp de twilio del dia de hoy',
    //celular del sanbox de whatsapp
    from: 'whatsapp:+14155238886',
   to: 'whatsapp:+573005694201'
  }).then(message => console.log('whatsapp enviado ${message.sid}'))