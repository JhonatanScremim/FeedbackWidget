import { prisma } from "../../prisma";
import { IFeedbackRepository } from "../IFeedbackRepository";

export interface FeedbackCreateData{
    type: string;
    comment: string;
    screenshot?: string;
}

export class FeedbackRepository implements IFeedbackRepository{

    async create(data: FeedbackCreateData) {
        await prisma.feedback.create({
            data: {
                type: data.type,
                comment: data.comment,
                screenshot: data.screenshot
            }
        });
    }

}