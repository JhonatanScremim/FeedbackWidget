import { CloseButton } from "../../CloseButton";

import successImage from "../../../assets/Success.svg";

interface FeedbackSuccessStepProps{
    onFeedbackSent: () => void;
}

export function FeedbackSuccessStep(props: FeedbackSuccessStepProps){
    return (
        <>
            <header>
                <CloseButton />
            </header>

            <div className="flex flex-col items-center py-10 w-[304px]">
                <img src={successImage} alt="Success" />
                
                <span className="text-xl mt-8">Agradeçemos o feedback!</span>

                <button
                    type="button"
                    onClick={props.onFeedbackSent}
                    className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar-thumb-zinc-700">
                    Quero enviar outro
                </button>
            </div>
        </>
    );
}