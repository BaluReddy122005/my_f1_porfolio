"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Send, Github, Linkedin, Twitter } from "lucide-react";

export const Contact = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
            }
        );
    }, []);

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="relative w-full min-h-screen py-24 px-8 md:px-24 flex items-center pointer-events-none"
        >
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 pointer-events-auto">

                {/* Left Info */}
                <div className="flex flex-col justify-center">
                    <p className="text-f1-red font-mono tracking-widest uppercase mb-4 flex items-center gap-2">
                        <span className="w-8 h-[1px] bg-f1-red"></span> Pit Stop
                    </p>
                    <h2 className="text-5xl md:text-7xl font-black italic uppercase text-white leading-none mb-8">
                        Let's <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-f1-red to-red-800">Collaborate</span>
                    </h2>
                    <p className="text-gray-400 font-light text-xl max-w-md mb-12">
                        Looking for a high-performance engineer to join your team? My inbox is always open for new opportunities.
                    </p>

                    <div className="flex gap-6">
                        <a href="https://github.com/BaluReddy122005" className="p-4 rounded-full glass hover:bg-f1-red hover:text-white transition-all duration-300 text-gray-400">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/bhargav-reddy-9ba165270/" className="p-4 rounded-full glass hover:bg-[#0077b5] hover:text-white transition-all duration-300 text-gray-400">
                            <Linkedin size={24} />
                        </a>
                        <a href="#" className="p-4 rounded-full glass hover:bg-white hover:text-black transition-all duration-300 text-gray-400">
                            <Twitter size={24} />
                        </a>
                    </div>
                </div>

                {/* Right Form */}
                <div className="flex items-center justify-center">
                    <form
                        action="https://formsubmit.co/balureddy8309@gmail.com"
                        method="POST"
                        className="w-full glass p-8 md:p-10 rounded-3xl border border-white/10 group shadow-2xl relative overflow-hidden"
                    >
                        {/* FormSubmit configurations */}
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_subject" value="New F1 Portfolio Message!" />

                        <div className="absolute top-0 right-0 w-64 h-64 bg-f1-red/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>

                        <div className="space-y-6 relative z-10">
                            <div>
                                <label className="block text-xs font-mono uppercase text-gray-400 tracking-widest mb-2">Driver Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-f1-red focus:ring-1 focus:ring-f1-red transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-mono uppercase text-gray-400 tracking-widest mb-2">Comms Channel (Email)</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-f1-red focus:ring-1 focus:ring-f1-red transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-mono uppercase text-gray-400 tracking-widest mb-2">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={4}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-f1-red focus:ring-1 focus:ring-f1-red transition-all resize-none"
                                    placeholder="Start engine..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-f1-red text-white font-bold italic uppercase tracking-widest rounded-lg flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-colors"
                            >
                                Send Transmission <Send size={18} />
                            </button>
                        </div>
                    </form>
                </div>

            </div>

            {/* Footer minimal */}
            <div className="absolute bottom-8 left-0 w-full text-center pointer-events-auto">
                <p className="text-xs text-gray-600 font-mono tracking-widest uppercase">
                    © {new Date().getFullYear()} Bhargav Reddy. Engine tuned for performance.
                </p>
            </div>
        </section>
    );
};
