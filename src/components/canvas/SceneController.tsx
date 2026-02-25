"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Preload } from "@react-three/drei";
import { Suspense } from "react";
import { CarModel } from "./CarModel";

export const SceneController = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 bg-f1-black pointer-events-none">
            <Canvas
                camera={{ position: [0, 2, 8], fov: 45 }}
                gl={{ antialias: true, alpha: false }}
                dpr={[1, 2]}
            >
                <color attach="background" args={["#000000"]} />
                <ambientLight intensity={0.5} />
                <directionalLight
                    position={[10, 10, 5]}
                    intensity={2}
                    color="#ffffff"
                    castShadow
                />
                <directionalLight
                    position={[-10, 10, -5]}
                    intensity={1}
                    color="#e10600"
                />

                <Suspense fallback={null}>
                    <CarModel />
                    <Environment preset="city" />
                    {/* Preload ensures smooth transitions */}
                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    );
};
