"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const About = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

    useEffect(() => {
        const el = sectionRef.current;

        // Animate the glass card
        gsap.fromTo(
            cardRef.current,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 70%",
                },
            }
        );

        // Animate text paragraphs sequentially
        textRefs.current.forEach((text, i) => {
            if (!text) return;
            gsap.fromTo(
                text,
                { x: -50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: i * 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: "top 60%",
                    },
                }
            );
        });
    }, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative w-full min-h-screen flex items-center justify-end px-8 md:px-24 pointer-events-none"
        >
            <div
                ref={cardRef}
                className="glass max-w-2xl p-8 md:p-12 rounded-3xl pointer-events-auto shadow-2xl overflow-hidden relative"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-f1-red/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>

                <h2 className="text-4xl md:text-5xl font-black mb-8 italic uppercase tracking-wider text-white">
                    The <span className="text-f1-red">Driver</span> behind the code
                </h2>

                <div className="space-y-6 text-gray-300 font-light leading-relaxed text-lg">
                    <p ref={el => { textRefs.current[0] = el }}>
                        I treat software engineering like a Formula 1 race. Every millisecond counts, architecture must be flawless, and performance is non-negotiable.
                    </p>
                    <p ref={el => { textRefs.current[1] = el }}>
                        As a BTech Computer Science student, I specialize in building highly optimized, scalable, and visually stunning web applications. My mindset is geared towards continuous improvement and pushing the limits of modern web technologies.
                    </p>
                    <p ref={el => { textRefs.current[2] = el }}>
                        Whether it's fine-tuning a database query or crafting butter-smooth 60fps animations, my goal is always the same: podium-finish quality.
                    </p>
                </div>
            </div>
        </section>
    );
};
