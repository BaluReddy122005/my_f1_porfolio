"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const milestones = [
    { year: "2022", title: "Started BTech in Computer Science", desc: "First laps in the world of programming." },
    { year: "2023", title: "First Hackathon Win", desc: "Built a AI powered Surveillance System app in 24 hours at Puducherry . Podium finish." },
    { year: "2024", title: "Hackathon Wins", desc: "Won 3 hackathons and got a patent for Suveillance Solutions ,Recoginzations for State and Central Government" },
    { year: "2025", title: "Software Engineer Intern", desc: "Working as a Software Engineer Intern " },
    { year: "2026", title: "Graduation & Full-time Journey", desc: "Ready for the main event." },
];  
export const Achievements = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // Animate the central timeline line
        gsap.fromTo(
            lineRef.current,
            { height: 0 },
            {
                height: "100%",
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 50%",
                    end: "bottom 80%",
                    scrub: 1,
                },
            }
        );

        // Animate each milestone dot and content
        itemsRef.current.forEach((item, i) => {
            if (!item) return;
            const direction = i % 2 === 0 ? -50 : 50;

            gsap.fromTo(
                item,
                { x: direction, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 70%",
                    },
                }
            );
        });
    }, []);

    return (
        <section
            id="achievements"
            ref={sectionRef}
            className="relative w-full min-h-screen py-32 px-8 overflow-hidden pointer-events-none"
        >
            <div className="max-w-5xl mx-auto relative pointer-events-auto">
                <h2 className="text-4xl md:text-6xl font-black mb-24 italic uppercase tracking-wider text-center text-white drop-shadow-lg">
                    Career <span className="text-f1-red">Telemetry</span>
                </h2>

                <div className="relative">
                    {/* Main vertical track line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2 rounded-full"></div>

                    {/* Animated red line */}
                    <div
                        ref={lineRef}
                        className="absolute left-4 md:left-1/2 top-0 w-1 bg-f1-red -translate-x-1/2 rounded-full shadow-[0_0_15px_#e10600]"
                    ></div>

                    {milestones.map((ms, i) => (
                        <div
                            key={i}
                            ref={(el) => { itemsRef.current[i] = el }}
                            className={`relative flex items-center mb-16 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Dot */}
                            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-f1-black border-2 border-f1-red rounded-full -translate-x-1/2 shadow-[0_0_10px_#e10600] z-10 transition-transform hover:scale-150 cursor-pointer"></div>

                            <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}>
                                <div className="glass p-6 md:p-8 rounded-xl border border-white/5 hover:border-f1-red/30 transition-colors group">
                                    <span className="inline-block px-3 py-1 bg-f1-red/20 text-f1-red font-mono text-sm tracking-widest rounded-full mb-4">
                                        {ms.year}
                                    </span>
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-f1-red transition-colors">{ms.title}</h3>
                                    <p className="text-gray-400 font-light">{ms.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
