'use client'

import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import animationData from "../assets/animation_lmsckmzx.json"; 
import { Escolha } from "./components/Escolha";
import { Pedido } from "./components/Pedido";

export default function Home() {
    const [animationState, setAnimationState] = useState({
        isStopped: false,
        isPaused: false,
    });

    const [fase, setFase] = useState<"escolha" | "pedido">("escolha");

    const handleChangeFase = () => {
        setFase("pedido")
    }

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const handleAnimationComplete = () => {
        setAnimationState({
            isStopped: true,
            isPaused: false,
        });
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div style={{ display: animationState.isStopped ? "none" : "block" }} className="pointer-events-none mt-16">
                <Lottie
                    options={defaultOptions}
                    height={300}
                    width={300}
                    isStopped={animationState.isStopped}
                    isPaused={animationState.isPaused}
                    eventListeners={[
                        {
                            eventName: "complete",
                            callback: handleAnimationComplete,
                        },
                    ]}
                />
            </div>
            {animationState.isStopped && (fase == "escolha" ? <Escolha changeFase={handleChangeFase} /> : <Pedido />)}
        </main>
    );
}
