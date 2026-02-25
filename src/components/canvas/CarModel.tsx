"use client";

import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { Group } from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export const CarModel = () => {
    const groupRef = useRef<Group>(null);

    // Load the actual F1 model. Note: Path is relative to the 'public' folder in Next.js
    const { scene } = useGLTF('/models/f1.glb');

    useEffect(() => {
        if (!groupRef.current) return;

        // Cinematic intro animation
        gsap.from(groupRef.current.position, {
            z: -10,
            duration: 2.5,
            ease: "power3.out",
        });

        gsap.from(groupRef.current.rotation, {
            y: Math.PI * 2,
            duration: 3,
            ease: "power3.out",
        });

        // Scroll-based animations
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 1, // Smooth scrubbing
            },
        });

        // Hero -> About
        tl.to(groupRef.current.rotation, { y: -Math.PI / 4, ease: "none" }, 0)
            .to(groupRef.current.position, { x: 2, z: 2, ease: "none" }, 0);

        // About -> Skills
        tl.to(groupRef.current.rotation, { y: Math.PI / 4, ease: "none" }, 0.3)
            .to(groupRef.current.position, { x: -2, z: 4, ease: "none" }, 0.3);

        // Skills -> Projects
        tl.to(groupRef.current.rotation, { y: Math.PI / 2, ease: "none" }, 0.6)
            .to(groupRef.current.position, { x: 0, z: 5, ease: "none" }, 0.6);

        // Projects -> Contact
        tl.to(groupRef.current.position, { z: 15, ease: "power2.in" }, 0.8);

        return () => {
            tl.kill();
        };
    }, []);

    // Note: If the model is too big or too small, you can add scale={[0.5, 0.5, 0.5]} or similar to <primitive>
    // Assuming the previous scale [0.9] was too small (like a dot), we scale it up by 10x or 100x.
    return (
        <group ref={groupRef} position={[0, -1, 0]}>
            <primitive object={scene} scale={[200, 200, 200]} />
        </group>
    );
};
