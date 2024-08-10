# amailer

`amailer` is a Node.js library for sending emails using various services like SMTP (via Nodemailer), SendGrid, and Mailgun.

## Installation

You can install the package via npm:

```bash
npm i amailer
```
## Usage

1. SMTP Example (Using Nodemailer)
```
const { amailer } = require('amailer');

const emailOptions = {
  from: 'example@example.com',
  to: 'recipient@example.com',
  subject: 'Test Email',
  text: 'Hello, this is a test email.',
  type: 'smtp',
  service: 'gmail',
  user: 'example@gmail.com',
  pass: 'yourpassword',
};

amailer(emailOptions)
  .then(response => console.log('Email sent:', response))
  .catch(error => console.error('Error sending email:', error));
```

2. SendGrid 
```
const { amailer } = require('amailer');

const emailOptions = {
  from: 'example@example.com',
  to: 'recipient@example.com',
  subject: 'Test Email',
  text: 'Hello, this is a test email.',
  type: 'sendgrid',
  apiKey: 'your-sendgrid-api-key',
};

amailer(emailOptions)
  .then(response => console.log('Email sent:', response))
  .catch(error => console.error('Error sending email:', error));

```

3. Mailgun Example
```
const { amailer } = require('amailer');

const emailOptions = {
  from: 'example@example.com',
  to: 'recipient@example.com',
  subject: 'Test Email',
  text: 'Hello, this is a test email.',
  type: 'mailgun',
  apiKey: 'your-mailgun-api-key',
  domain: 'your-mailgun-domain',
};

amailer(emailOptions)
  .then(response => console.log('Email sent:', response))
  .catch(error => console.error('Error sending email:', error));

```
### API Reference
amailer(options)

options: An object with the following properties:

`from`: The sender's email address. \
`to`: The recipient's email address(es). multiple emails in a array for sending mails in bulk  \
`subject`: The subject of the email. \
`text`: The plaintext body of the email. \
`html`: The HTML body of the email (optional). \
`attachments`: Attachments to the email (optional). \
`type`: The type of email service (smtp, sendgrid, mailgun). \
`service`: The SMTP service provider (for smtp type). \
`user`: The SMTP username (for smtp type). \
`pass`: The SMTP password (for smtp type). \
`apiKey`: The API key for SendGrid or Mailgun. \
`domain`: The domain for Mailgun.

### License
This project is licensed under the MIT [LICENSE](https://github.com/karthikeyaspace/amailer/LICENSE) - see the LICENSE file for details. 