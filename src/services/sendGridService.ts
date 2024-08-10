import mail, { MailDataRequired } from "@sendgrid/mail";
import { EmailOptions, EmailService, ServiceConfig } from "../types";

class SendGridService implements EmailService {
  constructor(config: ServiceConfig) {
    if (!config.apiKey) throw new Error("Sendgrid configuration is missing");

    mail.setApiKey(config.apiKey);
  }

  sendEmail(options: EmailOptions): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!options.text || !options.html)
        return reject(new Error("Text or HTML is missing"));

      const sgmail: MailDataRequired = {
        from: options.from,
        to: options.to,
        subject: options.subject,
        content: [
          {
            type: "text/plain",
            value: options?.text,
          },
          {
            type: "text/html",
            value: options?.html,
          },
        ],
      };

      mail
        .send(sgmail)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  }

  // sendgrid can send email to multiple users at once
  sendEmails(options: EmailOptions): Promise<any> {
    return this.sendEmail(options);
  }
}

export { SendGridService };