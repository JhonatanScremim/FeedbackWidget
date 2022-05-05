import html2canvas from "html2canvas";
import { Camera } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenshotButtonProps{
    onScreenshotTook: (screenshot: string) => void
}

export function ScreenshotButton(props: ScreenshotButtonProps){

    const [isTakingScreenshot, setIsTakingScreenchot] = useState(false);

    async function handleTakeScreenshot() {
        setIsTakingScreenchot(true);

        const canvas = await html2canvas(document.querySelector("html")!);
        const base64image = canvas.toDataURL("image.png");

        props.onScreenshotTook(base64image);
        setIsTakingScreenchot(false);
    }

    return (
        <button
            type="button"
            onClick={handleTakeScreenshot}
            className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500">
                { isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6"/>}
        </button>
    );
}