import { Attachment } from "nodemailer/lib/mailer";

interface EmailOptions {
  from: string;
  to: string | string[];
  cc?: string;
  bcc?: string;
  subject: string;
  text?: string;
  html?: string;
  attachments?: Attachment[];
}


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
