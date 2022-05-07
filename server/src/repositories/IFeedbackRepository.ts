import { FeedbackCreateData } from "./prisma/FeedbackRepository";

export interface IFeedbackRepository{
    create: (data: FeedbackCreateData) => Promise<void>;
}