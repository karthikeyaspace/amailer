const { amailer } = require('amailer');

const emailOptions = {
  from: '[example@example.com]', 
  to: '[recipient@example.com]',    // can be an array of recipients
  subject: 'Test Email',
  text: 'Hello, this is a test email.',
  type: 'smtp',
  service: 'gmail',
  user: '[example@gmail.com]',
  pass: '[yourpassword]',  // https://myaccount.google.com/u/apppasswords
};

amailer(emailOptions)
  .then(response => console.log('Email sent:', response))
  .catch(error => console.error('Error sending email:', error));
