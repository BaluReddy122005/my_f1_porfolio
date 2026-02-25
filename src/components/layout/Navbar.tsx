"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
    const navRef = useRef<HTMLElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Hide/show navbar on scroll
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (lastScrollY < window.scrollY && window.scrollY > 100) {
                gsap.to(navRef.current, { y: "-100%", duration: 0.3, ease: "power2.out" });
            } else {
                gsap.to(navRef.current, { y: "0%", duration: 0.3, ease: "power2.out" });
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Garage", href: "#projects" },
        { name: "Journey", href: "#achievements" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header ref={navRef} className="fixed top-0 left-0 w-full z-50 transition-all duration-300 glass border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <a href="#home" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <div className="relative w-16 h-16 md:w-20 md:h-16">
                        {/* Defaulting to a placeholder logo. User can drop 'logo.png' into public/ to replace */}
                        <Image
                            src="/logo.png"
                            alt="F1 Logo"
                            fill
                            className="object-contain"
                            onError={(e: any) => {
                                // Fallback if logo.png is not found
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.parentElement!.innerHTML = '<span class="text-2xl font-black italic tracking-tighter text-white">F1<span class="text-f1-red">.DEV</span></span>';
                            }}
                        />
                    </div>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium uppercase tracking-widest text-gray-400 hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-f1-red transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            {isOpen && (
                <div className="absolute top-20 left-0 w-full bg-f1-black/95 backdrop-blur-xl border-b border-white/10 flex flex-col px-6 py-8 gap-6 md:hidden text-center shadow-2xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-medium uppercase tracking-widest text-white hover:text-f1-red transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};
