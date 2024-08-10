import nodemailer from "nodemailer";
import { EmailOptions, EmailService, ServiceConfig } from "../types";

class NodeMailer implements EmailService {
  private transporter: nodemailer.Transporter;

  constructor(config: ServiceConfig) {
    if (!config.user || !config.pass)
      throw new Error("SMTP configuration is missing");

    this.transporter = nodemailer.createTransport({
      service: config.service,
      auth: {
        user: config.user,
        pass: config.pass,
      },
    });
  }

  sendEmail(options: EmailOptions): Promise<any> {
    return new Promise((resolve, reject) => {
      this.transporter.sendMail(options, (error, info) => {
        if (error) return reject(error);
        resolve(info);
      });
    });
  }

  sendEmails(options: EmailOptions): Promise<any> {
    if (!Array.isArray(options.to))
      throw new Error("To field should be an array");
    return Promise.all(
      options.to.map((to: string) => {
        return this.sendEmail({ ...options, to });
      })
    );
  }
}

export { NodeMailer };
