"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { X, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Surveillance Solutions",
        category: "AI / Computer Vision",
        description: "An AI-powered intelligent surveillance system that detects, tracks, and extracts specific individuals from CCTV footage. Features real-time face recognition, automated video cropping, alert notifications, and high-performance video processing for security and investigation use cases.",
        image: "/api/placeholder/600/400",
        tech: ["Python", "OpenCV", "Deep Learning", "Flask", "Computer Vision"],
        link: "https://github.com/BaluReddy122005/Final_Project",
        github: "https://github.com/BaluReddy122005/Final_Project"
    },
    {
        id: 2,
        title: "Skin Disease Classification",
        category: "Deep Learning",
        description: "A deep learning-based medical imaging system that classifies different types of skin diseases using CNN models. Provides fast and accurate predictions to assist early diagnosis and improve healthcare accessibility.",
        image: "/api/placeholder/600/400",
        tech: ["Python", "TensorFlow", "CNN", "Deep Learning", "Flask"],
        link: "https://github.com/BaluReddy122005/Skin-Disease-Classification-",
        github: "https://github.com/BaluReddy122005/Skin-Disease-Classification-"
    },
    {
        id: 3,
        title: "Payment Management System",
        category: "Full Stack MERN",
        description: "A full-stack payment management platform built with MERN stack to handle secure transactions, user accounts, payment tracking, and financial records with a modern responsive dashboard.",
        image: "/api/placeholder/600/400",
        tech: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript"],
        link: "https://github.com/BaluReddy122005/Payment_management_System",
        github: "https://github.com/BaluReddy122005/Payment_management_System"
    }
];

export const Projects = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    useEffect(() => {
        cardsRef.current.forEach((card, i) => {
            if (!card) return;
            gsap.fromTo(
                card,
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    delay: i * 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 50%",
                    },
                }
            );
        });
    }, []);

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="relative w-full min-h-screen py-20 px-8 md:px-24 pointer-events-none"
        >
            <div className="max-w-7xl mx-auto pointer-events-auto">
                <h2 className="text-4xl md:text-6xl font-black mb-16 italic uppercase tracking-wider text-white text-right">
                    The <span className="text-f1-red">Garage</span>
                </h2>

                <div className="flex flex-col gap-8">
                    {projects.map((project, i) => (
                        <div
                            key={project.id}
                            ref={(el) => { cardsRef.current[i] = el }}
                            className="glass group relative overflow-hidden rounded-xl p-8 md:p-12 cursor-pointer border border-white/5 hover:border-f1-red/30 transition-all duration-500"
                            onClick={() => setSelectedProject(project)}
                        >
                            {/* Animated background glow on hover */}
                            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-f1-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
                                <div>
                                    <p className="text-f1-red font-mono text-sm tracking-widest uppercase mb-2">Chassis 0{i + 1}</p>
                                    <h3 className="text-3xl font-bold text-white group-hover:text-f1-red transition-colors">{project.title}</h3>
                                    <p className="text-gray-400 mt-2 font-light max-w-2xl">{project.description}</p>
                                </div>

                                <div className="flex gap-3 mt-4 md:mt-0">
                                    {project.tech.map((t, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-gray-300 border border-white/10">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-auto">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}></div>
                    <div className="relative w-full max-w-4xl glass rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-f1-red text-white flex rounded-full backdrop-blur-md transition-colors"
                        >
                            <X size={24} />
                        </button>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="h-64 md:h-auto bg-f1-carbon relative">
                                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover opacity-60" />
                                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 to-transparent"></div>
                            </div>
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <p className="text-f1-red font-mono text-sm tracking-widest uppercase mb-2">{selectedProject.category}</p>
                                <h3 className="text-3xl font-black text-white italic mb-4">{selectedProject.title}</h3>
                                <p className="text-gray-300 font-light leading-relaxed mb-8">{selectedProject.description}</p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {selectedProject.tech.map((t, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-white/5 rounded text-sm text-gray-300 border border-white/10">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a href={selectedProject.link} className="flex items-center gap-2 px-6 py-3 bg-f1-red text-white font-bold tracking-widest uppercase rounded hover:bg-white hover:text-black transition-colors">
                                        <ExternalLink size={18} /> Live Demo
                                    </a>
                                    <a href={selectedProject.github} className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-bold tracking-widest uppercase rounded hover:bg-white hover:text-black transition-colors">
                                        <Github size={18} /> Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
