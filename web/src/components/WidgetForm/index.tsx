import { CloseButton } from "../CloseButton";

import bugImage from "../../assets/bug.svg";
import ideaImage from "../../assets/idea.svg";
import otherImage from "../../assets/thought.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: bugImage,
            alt: "Icone problema"
        }
    },
    IDEA: {
        title: "Ideia",
        image: {
            source: ideaImage,
            alt: "Icone ideia"
        }
    },
    OTHER: {
        title: "Outro",
        image: {
            source: otherImage,
            alt: "Icone outro"
        }
    }
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

    function handleRestartFeedback(){
        setFeedbackType(null);
    }

    return  (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />) 
                :  (<FeedbackContentStep 
                        feedbackType={feedbackType}
                        onFeedbackRestartRequested={handleRestartFeedback}/>
            )}
            <footer className="text-xs text-neutral-400">
                Feito com ♥ por <a className="underline underline-offset-2" href="https://github.com/JhonatanScremim">Jhonatan Scremim</a>
            </footer>
        </div>
    );
}