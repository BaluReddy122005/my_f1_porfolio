"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export const Hero = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const nameRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.fromTo(
            nameRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 0.5 }
        )
            .fromTo(
                titleRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                "-=0.7"
            )
            .fromTo(
                subtitleRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                "-=0.7"
            );
    }, []);

    return (
        <section
            id="home"
            className="relative w-full h-screen flex flex-col justify-center items-start px-8 md:px-24 pointer-events-none"
        >
            <div className="z-10 max-w-4xl space-y-4 font-sans tracking-tight pointer-events-auto">
                <p ref={nameRef} className="text-f1-red font-semibold text-xl md:text-2xl uppercase tracking-[0.2em] opacity-0">
                    Bhargav Reddy Bollepelli
                </p>
                <h1 ref={titleRef} className="text-6xl md:text-8xl font-black text-white leading-tight opacity-0 drop-shadow-2xl">
                    COMPUTER <br />
                    SCIENCE <br />
                    ENGINEER
                </h1>
                <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-400 font-light max-w-xl opacity-0">
                    Engineering high-performance software with the precision and speed of a Formula 1 race.
                </p>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50 animate-bounce pointer-events-auto">
                <p className="text-sm font-light mb-2 uppercase tracking-widest">Scroll to start engine</p>
                <div className="w-[1px] h-16 bg-gradient-to-b from-f1-red to-transparent"></div>
            </div>
        </section>
    );
};
