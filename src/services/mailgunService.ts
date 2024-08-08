import Mailgun from "mailgun.js";
import { EmailOptions, EmailService, ServiceConfig } from "../types";

class MailgunService implements EmailService {
    private mailgun: any;
    private domain: string;
    constructor(config: ServiceConfig) {
        if (!config.mailgun) throw new Error("Mailgun configuration is missing");

        this.mailgun = new Mailgun(FormData);
        this.mailgun = this.mailgun.client({username: 'api', key: config.mailgun.apiKey});
        this.domain = config.mailgun.domain;
    }


    sendEmail(options: EmailOptions): Promise<any> {
        return new Promise((resolve, reject)=>{
            this.mailgun.messages.create(this.domain, options, (error: Error, body: any) => {
                if(error) return reject(error);
                resolve(body);
            })
        })
    }
}


export { MailgunService };
