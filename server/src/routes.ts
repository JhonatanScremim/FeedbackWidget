import express from "express";  
import { NodemailerMailHelper } from "./helpers/nodemailer/NodemailerMailHelper";
import { FeedbackRepository } from "./repositories/prisma/FeedbackRepository";
import { SubmitFeedbackService } from "./services/SubmitFeedbackService";

export const routes = express.Router();

routes.post("/feedbacks", async (req, res) => {
    
    const {type, comment, screenshot} = req.body;

    const feedbackRepository = new FeedbackRepository();
    const nodemailerHelper = new NodemailerMailHelper();
    const submitFeedbackService = new SubmitFeedbackService(feedbackRepository, nodemailerHelper);

    await submitFeedbackService.execute({
        type, 
        comment,
        screenshot
    });

    return res.status(201).send();
});