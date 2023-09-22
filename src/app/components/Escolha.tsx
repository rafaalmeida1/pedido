import { useEffect, useState, useRef } from "react";
import { Transition } from "@headlessui/react";
import animationData from "../../assets/flutuando.json";
import Lottie from "react-lottie";

function getRandomPosition(maxX: number, maxY: number) {
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    return { x, y };
}

interface EscolhaProps {
    changeFase: () => void;
}

export function Escolha({ changeFase }: EscolhaProps) {
    const [showPedido, setShowPedido] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<any>(null);
    const [animationState, setAnimationState] = useState({
        isStopped: false,
        isPaused: false,
    });

    useEffect(() => {
        // Defina o estado para true após um pequeno atraso para acionar a animação
        setTimeout(() => {
            setShowPedido(true);
        }, 100);
    }, []);

    const handleNoButtonClick = () => {
        const container = containerRef.current;
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        const buttonWidth = 100; // Largura do botão "Não"
        const buttonHeight = 40; // Altura do botão "Não"

        const maxX = containerWidth - 300 - buttonWidth;
        const maxY = containerHeight - 200 - buttonHeight;

        const randomPosition = getRandomPosition(maxX, maxY);
        setPosition(randomPosition);
    };

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div
            ref={containerRef}
            className="relative overflow-hidden rounded-lg border border-red-500 w-[332px] min-h-full h-[calc(100vh-15rem)] flex items-center justify-center p-5"
        >
            <Transition
                show={showPedido}
                enter="transform transition ease-in-out duration-300"
                enterFrom="scale-0"
                enterTo="scale-100"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="scale-100"
                leaveTo="scale-0"
            >
                <div className="flex flex-col items-center z-50 gap-5">
                    <h1 className="font-bold text-2xl z-[9999] mx-auto text-center">
                        Você aceita namorar comigo Thaisa?
                    </h1>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={changeFase}
                            className="p-3 z-[9999] border border-green-500 rounded-lg bg-transparent hover:bg-green-500 transition-all"
                        >
                            Sim❤️
                        </button>
                        <div
                            style={{
                                transform: `translate(${position.x}px, ${position.y}px)`,
                            }}
                        >
                            <button
                                className="p-3 border z-[9999] border-red-500 rounded-lg bg-transparent hover:bg-red-500 transition-all"
                                onClick={handleNoButtonClick}
                            >
                                Não😑
                            </button>
                        </div>
                    </div>
                    
                </div>
                <div className="absolute w-full h-[calc(100vh-25rem)] bottom-0 z-10 pointer-events-none">
                <Lottie
                    options={defaultOptions}
                    height={400}
                    width={300}
                    isStopped={animationState.isStopped}
                    isPaused={animationState.isPaused}
                />
                </div>
            </Transition>
        </div>
    );
}
