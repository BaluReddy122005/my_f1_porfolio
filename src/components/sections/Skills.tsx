"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const skills = [
    { category: "Frontend", items: ["React", "Next.js", "Three.js", "GSAP", "TailwindCSS"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "SQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Linux", "Figma","Blockchain"] },
];

export const Skills = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        cardsRef.current.forEach((card, index) => {
            if (!card) return;

            gsap.fromTo(
                card,
                { y: 50, opacity: 0, scale: 0.9 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%",
                    },
                }
            );
        });
    }, []);

    return (
        <section
            id="skills"
            ref={sectionRef}
            className="relative w-full min-h-screen flex flex-col justify-center px-8 md:px-24 py-20 pointer-events-none"
        >
            <div className="w-full max-w-7xl mx-auto pointer-events-auto">
                <h2 className="text-4xl md:text-6xl font-black mb-16 italic uppercase tracking-wider text-white border-b-2 border-f1-red inline-block pb-2">
                    Telemetry <span className="text-gray-500 font-light">&</span> Skills
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((skillGroup, index) => (
                        <div
                            key={index}
                            ref={(el) => { cardsRef.current[index] = el }}
                            className="glass p-8 rounded-2xl group hover:border-f1-red/50 transition-colors duration-500"
                        >
                            <h3 className="text-2xl font-bold uppercase tracking-widest text-white mb-6 group-hover:text-f1-red transition-colors">
                                {skillGroup.category}
                            </h3>
                            <ul className="space-y-4">
                                {skillGroup.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-400 group-hover:text-gray-200 transition-colors">
                                        <span className="w-2 h-2 rounded-full bg-f1-red shadow-[0_0_10px_#e10600] opacity-50 group-hover:opacity-100 transition-opacity"></span>
                                        <span className="font-mono text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
