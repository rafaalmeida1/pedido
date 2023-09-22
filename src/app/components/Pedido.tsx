import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import animationData from "../../assets/back.json";
import Lottie from "react-lottie";
import Image from "next/image";

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
        <div className="w-[332px] h-[calc(100vh-15rem)] relative flex items-center justify-center min-h-full rounded-lg overflow-hidden">
            <Transition
                show={showPedido}
                enter="transform transition ease-in-out duration-300"
                enterFrom="scale-0"
                enterTo="scale-100"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="scale-100"
                leaveTo="scale-0"
            >
                <Image
                    src="/convite.png"
                    alt="Convite"
                    width={360}
                    height={360}
                />
                <div className="z-[999] flex gap-4 items-center justify-center mt-4">
                    <a
                        href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=EU ACEEEEITO AMOR ❤️!!`}
                        className="border-[#B48133] z-[999] hover:bg-[#B48133] p-3 bg-transparent border rounded-lg transition-all"
                    >
                        ❤️Mande Mensagem pra mim❤️
                    </a>
                </div>
            </Transition>
        </div>
    );
}
