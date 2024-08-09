import { NodeMailer, MailgunService } from "./services";
import { EmailOptions, ServiceConfig } from "./types";

const amailer = async (options: any) => {
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
      if(!config.user || !config.pass) throw new Error("User or pass is missing");
      service = new NodeMailer(config);
      break;
    case "sendgrid":
      if(!config.apiKey) throw new Error("API key is missing");
      service = null;
      break;
    case "mailgun":
      if(!config.apiKey || !config.domain) throw new Error("API key or domain is missing");
      service = new MailgunService(config);
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
