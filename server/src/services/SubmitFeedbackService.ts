import { IMailHelper } from "../helpers/IMailHelper";
import { IFeedbackRepository } from "../repositories/IFeedbackRepository";

interface SubmitFeedbackRequest{
    type: string; 
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackService{

    private feedbackRepository: IFeedbackRepository;
    private mailHelper: IMailHelper;

    constructor (feedbackRepository: IFeedbackRepository, mailHelper: IMailHelper) {
        this.feedbackRepository = feedbackRepository;
        this.mailHelper = mailHelper;
    }

    async execute(req: SubmitFeedbackRequest){
        
        if (!req.type)
        throw new Error("Type is required");
        
        if (!req.comment)
            throw new Error(" is required");

        if (req.screenshot && !req.screenshot.startsWith("data:image/png;base64"))
            throw new Error("Invalid screenshot format");

        await this.feedbackRepository.create({
            type: req.type,
            comment: req.comment,
            screenshot: req.screenshot
        });
    
        this.mailHelper.sendMail({
            subject: "Novo Feedback",
            body: `<p>Tipo do feedback: ${req.type}, commentario: ${req.comment}</p>`
        });
    }
}