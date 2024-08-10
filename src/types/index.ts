interface EmailOptions {
  from: string;
  to: string | string[];
  subject: string;
  text?: string;
  html?: string;
  attachments?: any[];
}


/*
  smtp - nodemailer
  service, user, pass

  sendgrid
  apiKey

  mailgun
  apiKey, domain

*/

interface ServiceConfig {
  type: "smtp" | "sendgrid" | "mailgun";
  service?: string; 
  user?: string;
  pass?: string;
  apiKey?: string;
  domain?: string;
}


interface EmailService {
  sendEmail: (options: EmailOptions) => Promise<any>;
  sendEmails: (options: EmailOptions) => Promise<any>;
}

export { EmailOptions, ServiceConfig, EmailService };
