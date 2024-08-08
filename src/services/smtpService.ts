import nodemailer from 'nodemailer';
import { EmailOptions, ServiceConfig, EmailService } from '../types';


class NodeMailer implements EmailService {
    private transporter: nodemailer.Transporter;

    constructor(config: ServiceConfig) {
        if(!config.smtp) 
            throw new Error("SMTP configuration is missing");

        this.transporter = nodemailer.createTransport({
            service: config.smtp.service,
            auth: {
                user: config.smtp.user,
                pass: config.smtp.pass
            }
        })
    }

    sendEmail(options: EmailOptions): Promise<any> {
        return new Promise((resolve, reject)=>{
            this.transporter.sendMail(options, (error, info) => {
                if(error) return reject(error);
                resolve(info);
            })
        })
    }
}

export { NodeMailer };