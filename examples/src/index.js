const { amailer } = require("amailer");

async function sendSmtp() {
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
  try {
    await amailer(emailOptions)
      .then((res) => {
        console.log("Email sent successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
}

async function sendMailgun() {
  const emailOptions = {
    from: '[example@example.com]',
    to: '[recipient@example.com]',   // can be an array of recipients
    subject: 'Test Email',
    text: 'Hello, this is a test email.',
    type: 'mailgun',
    apiKey: '[your-mailgun-api-key]',
    domain: '[your-mailgun-domain]',  // https://app.mailgun.com/app/domains
  };

  try {
    await amailer(emailOptions)
      .then((res) => {
        console.log("Email sent successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
}


async function sendSendgrid() {
  const emailOptions = {
    from: '[example@example.com]',  
    to: '[recipient@example.com]',   // can be an array of recipients
    subject: 'Test Email',
    text: 'Hello, this is a test email.',
    type: 'sendgrid',
    apiKey: '[your-sendgrid-api-key]',  // https://app.sendgrid.com/settings/api_keys
  };

  try {
    await amailer(emailOptions)
      .then((res) => {
        console.log("Email sent successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
}


// sendSmtp();
// sendMailgun();
// sendSendgrid();

