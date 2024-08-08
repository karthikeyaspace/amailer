interface EmailOptions {
  from: string;
  to: string | [];
  subject: string;
  text?: string;
  html?: string;
  attachments?: any[]; //mailgun
}

interface ServiceConfig {
  type: "smtp" | "sendgrid" | "mailgun";
  smtp?: {
    service: string;
    user: string;
    pass: string;
  };
  sendgrid?: {
    apiKey: string;
  };
  mailgun?: {
    apiKey: string;
    domain: string;
  };
}

interface EmailService {
  sendEmail: (options: EmailOptions) => Promise<any>;
}

export { EmailOptions, ServiceConfig, EmailService };
