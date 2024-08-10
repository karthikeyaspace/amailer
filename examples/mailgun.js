const { amailer } = require('amailer');

const emailOptions = {
  from: '[example@example.com]',
  to: '[recipient@example.com]',   // can be an array of recipients
  subject: 'Test Email',
  text: 'Hello, this is a test email.',
  type: 'mailgun',
  apiKey: '[your-mailgun-api-key]',
  domain: '[your-mailgun-domain]',  // https://app.mailgun.com/app/domains
};

amailer(emailOptions)
  .then(response => console.log('Email sent:', response))
  .catch(error => console.error('Error sending email:', error));
