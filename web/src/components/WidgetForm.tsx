import { CloseButton } from "./CloseButton";

import bugImage from "../assets/bug.svg";
import ideaImage from "../assets/idea.svg";
import otherImage from "../assets/thought.svg";
import { useState } from "react";

const feedbackTypes = {
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

type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

    return  (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu Feedback</span>

                <CloseButton />
            </header>
            <div className="flex py-8 gap-2 w-full">
                {
                    Object.entries(feedbackTypes).map(([key, value]) => {
                        
                        return (
                            <button
                                key={key}
                                onClick={() => setFeedbackType(key as FeedbackType)}
                                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                                type="button"
                            >
                            <img src={value.image.source} alt={value.image.alt} />
                            {value.title}</button>
                        );
                    })
                }
            </div>
            <footer className="text-xs text-neutral-400">
                Feito com ♥ por <a className="underline underline-offset-2" href="https://github.com/JhonatanScremim">Jhonatan Scremim</a>
            </footer>
        </div>
    );
}