const { amailer } = require('amailer');

const emailOptions = {
  from: '[example@example.com]',  
  to: '[recipient@example.com]',   // can be an array of recipients
  subject: 'Test Email',
  text: 'Hello, this is a test email.',
  type: 'sendgrid',
  apiKey: '[your-sendgrid-api-key]',  // https://app.sendgrid.com/settings/api_keys
};

amailer(emailOptions)
  .then(response => console.log('Email sent:', response))
  .catch(error => console.error('Error sending email:', error));
