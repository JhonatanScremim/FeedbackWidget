
export interface SendMailData{
    subject: string;
    body: string;
}

export interface IMailHelper{
    sendMail: (data: SendMailData) => void;
}