import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import animationData from "../../assets/back.json";
import Lottie from "react-lottie";

export function Pedido() {
    const [showPedido, setShowPedido] = useState(false);
    const phoneNumber = "19992864222";
    const [animationState, setAnimationState] = useState({
        isStopped: false,
        isPaused: false,
    });

    // const phoneNumber = "19991929696";

    useEffect(() => {
        // Defina o estado para true após um pequeno atraso para acionar a animação
        setTimeout(() => {
            setShowPedido(true);
        }, 100);
    }, []);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div className="rounded-lg relative border overflow-hidden border-red-500 w-[332px] min-h-full h-[calc(100vh-15rem)] flex items-center justify-center p-5">
            <Transition
                show={showPedido}
                enter="transform transition ease-in-out duration-300"
                enterFrom="scale-0"
                enterTo="scale-100"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="scale-100"
                leaveTo="scale-0"
            >
                <div className="flex flex-col items-center z-[999] gap-5">
                    <h1 className="font-bold text-2xl z-[999]">
                        Liga pra mim pra avisar
                    </h1>
                    <div className="flex items-center gap-4 z-[999]">
                        <a
                            href={`tel:${phoneNumber}`}
                            className="p-3 border border-green-500 z-[999] rounded-lg bg-transparent hover:bg-green-500 transition-all"
                        >
                            ❤️Ligar para Rafa❤️
                        </a>
                    </div>
                </div>
                <div className="absolute w-full h-[calc(100vh-25rem)] transform right-10 top-15 z-10 pointer-events-none">
                    <Lottie
                        options={defaultOptions}
                        height={200}
                        width={340}
                        isStopped={animationState.isStopped}
                        isPaused={animationState.isPaused}
                    />
                </div>
            </Transition>
        </div>
    );
}
