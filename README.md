# amailer

`amailer` is a Node.js library for sending emails using various services like SMTP (via Nodemailer), SendGrid, and Mailgun.

## Installation

You can install the package via npm:

```bash
npm i amailer
```
\
`Clone Github Repo`
```
git clone https://github.com/karthikeyaspace/amailer.git
```
`Install necessary Packages`

```
npm install
```

`Run Tests using ava`
```
npm test
```
### Usage

#### 1. SMTP Example (Using Nodemailer)
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

#### 2. SendGrid 
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

#### 3. Mailgun Example
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

#### 4. Send Attachments via Nodemailer
```
import { amailer } from "amailer";
import dotenv from "dotenv";
dotenv.config();

async function send() {
  const options = {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: "Test Email",
    text: "Hello, this is a test email with attachments",
    type: "smtp",
    service: "gmail",
    user: process.env.FROM_EMAIL,
    pass: process.env.EMAIL_PASSWORD,
    attachments: [
      {
        filename: "test.txt",
        content: "Hello, this is a test email.",
      },
      {
        filename: "invoice.pdf",
        path: "../tests/invoice.pdf",
      },
      {
        filename: "logo.png",
        path: "[url]",
      },
    ],
  };

  try {
    const res = await amailer(options);
    console.log(res, "res");
    // console.log(options, "options");
  } catch (err) {
    console.log("Error sending email: ", err);
  }
}


send();
```

for more examples check out amailer [`github`](https://github.com/karthikeyaspace/amailer/tree/main/examples)

### API Reference
amailer(options)

options: An object with the following properties:

`from`: The sender's email address. \
`to`: The recipient's email address(es). multiple emails in a array for sending mails in bulk  \
`cc`: carbon copy \
`bcc`: blind carbon copy \
`subject`: The subject of the email. \
`text`: The plaintext body of the email. \
`html`: The HTML body of the email (optional). \
`attachments`: Attachments to the email (optional). \
\
`type`: The type of email service (smtp, sendgrid, mailgun). \
`service`: The SMTP service provider (for smtp type). \
`user`: The SMTP username (for smtp type). \
`pass`: The SMTP password (for smtp type). \
`apiKey`: The API key for SendGrid or Mailgun. \
`domain`: The domain for Mailgun.

### License
This project is licensed under the MIT [LICENSE](https://github.com/karthikeyaspace/amailer/blob/main/LICENSE) - see the LICENSE file for details. 

