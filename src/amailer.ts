import { NodeMailer, MailgunService, SendGridService } from "./services";
import { EmailOptions, ServiceConfig } from "./types";

const amailer = async (options: EmailOptions & ServiceConfig) => {
  let service;
  if(!options.type) throw new Error("Service type is missing");

  const config: ServiceConfig = {
    type: options.type,
    service: options?.service,
    user: options?.user,
    pass: options?.pass,
    apiKey: options?.apiKey,
    domain: options?.domain,
  }

  switch (config.type) {
    case "smtp":
      service = new NodeMailer(config);          // user, pass
      break;
    case "sendgrid":
      service = new SendGridService(config);     // apiKey
      break;
    case "mailgun":
      service = new MailgunService(config);      // apiKey, domain
      break;
    default:
      throw new Error("Invalid service type");
  }

  if (service === null) throw new Error("Service is not initaited");

  const emailoptions: EmailOptions = {
    from: options.from,
    to: options.to,
    subject: options.subject,
    text: options?.text,
    html: options?.html,
    attachments: options?.attachments,
  };


  if (typeof emailoptions.to === "string")  // send email to single user
    return await service.sendEmail(emailoptions);
  else if (Array.isArray(emailoptions.to))  // send same email to multiple users
    return await service.sendEmails(emailoptions);
  else throw new Error("Invalid to email field");
};

export { amailer };
