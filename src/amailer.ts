import { NodeMailer, MailgunService } from "./services";
import { EmailOptions, ServiceConfig } from "./types";

const amailer = async (options: EmailOptions, config: any) => {
  let service;
  if(!config.type) throw new Error("Service type is missing");
  switch (config.type) {
    case "smtp":
      service = new NodeMailer(config);
      break;
    case "sendgrid":
      service = null;
      break;
    case "mailgun":
      service = new MailgunService(config);
      break;
    default:
      throw new Error("Invalid service type");
  }

  if (!service) throw new Error("Service is not implemented");

  await service.sendEmail(options);
};

export { amailer };
