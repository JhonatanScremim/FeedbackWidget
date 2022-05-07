
import nodemailer from "nodemailer";
import { IMailHelper, SendMailData } from "../IMailHelper";


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "cea7818b62e813",
      pass: "0c47ad3eb1970f"
    }
  });

export class NodemailerMailHelper implements IMailHelper{
    
    sendMail(data: SendMailData){
        transport.sendMail({
            from: "Equipe FeedbackWidget",
            to: "Jhonatan Scremim <jhonatanscremim@gmail.com>",
            subject: data.subject,
            html: data.body
        });
    }

}