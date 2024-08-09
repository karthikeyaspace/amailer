import Mailgun from "mailgun.js";
import { EmailOptions, EmailService, ServiceConfig } from "../types";

class MailgunService implements EmailService {
    private mailgun: any;
    private domain: string;
    constructor(config: ServiceConfig) {
        if (!config.apiKey || !config.domain) throw new Error("Mailgun configuration is missing");

        this.mailgun = new Mailgun(FormData);
        this.mailgun = this.mailgun.client({username: 'api', key: config.apiKey});
        this.domain = config.domain;
    }

    sendEmail(options: EmailOptions): Promise<any> {
        return new Promise((resolve, reject)=>{
            this.mailgun.messages.create(this.domain, options, (error: Error, body: any) => {
                if(error) return reject(error);
                resolve(body);
            })
        })
    }

    sendEmails(options: EmailOptions): Promise<any> {
        if(!Array.isArray(options.to)) 
            throw new Error("To field should be an array");
        return Promise.all(
            options.to.map((to: string)=> {
                return this.sendEmail({...options, to});
            })
        )
    }
}


export { MailgunService };
