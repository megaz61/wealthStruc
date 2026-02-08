"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { motion } from "framer-motion";

export default function TrustedBy() {
    const logos = [
        {
            name: "Goldman Sachs",
            svg: (
                <svg viewBox="0 0 200 50" aria-label="Goldman Sachs" className="fill-current w-full h-full">
                    <path d="M20,15 h10 v4 h-10 v8 h12 v4 h-16 v-20 h16 v4 h-12 z M45,20 a8,8 0 1,0 0,16 a8,8 0 1,0 0,-16 m0,4 a4,4 0 1,1 0,8 a4,4 0 1,1 0,-8 M65,15 h4 v16 h8 v4 h-12 z M85,15 h8 a8,8 0 0,1 0,16 h-8 z m4,4 v8 h4 a4,4 0 0,0 0,-8 h-4 M110,15 l6,20 h-4 l-4,-14 l-4,14 h-4 l6,-20 M135,15 l8,20 h-4 l-1,-4 h-6 l-1,4 h-4 l8,-20 m4,12 l-2,-6 l-2,6 h4 M160,15 h4 v20 h-4 l-10,-14 v14 h-4 v-20 h4 l10,14 v-14" />
                </svg>
            )
        },
        {
            name: "JP Morgan",
            svg: (
                <svg viewBox="0 0 200 50" aria-label="JP Morgan" className="fill-current w-full h-full">
                    <path d="M20,15 v14 a6,6 0 0,1 -12,0 v-2 h4 v2 a2,2 0 0,0 4,0 v-14 h4 M45,15 h8 a6,6 0 0,1 0,12 h-4 v8 h-4 z m4,4 v4 h4 a2,2 0 0,0 0,-4 h-4 M80,15 h4 l6,14 l6,-14 h4 v20 h-4 v-14 l-6,14 h-2 l-6,-14 v14 h-4 M115,15 h12 v4 h-8 v12 h8 v4 h-12 M145,15 h8 a8,8 0 0,1 0,16 h-8 z m4,4 v8 h4 a4,4 0 0,0 0,-8 h-4 M170,25 h8 v10 h-4 v-2 a6,6 0 0,1 -10,0 a6,6 0 0,1 10,-8 h-4" />
                </svg>
            )
        },
        {
            name: "Morgan Stanley",
            svg: (
                <svg viewBox="0 0 200 50" aria-label="Morgan Stanley" className="fill-current w-full h-full">
                    <path d="M10,15 v20 h4 v-14 l6,14 h2 l6,-14 v14 h4 v-20 h-4 l-7,16 l-7,-16 M50,25 a6,6 0 1,0 0,12 a6,6 0 1,0 0,-12 m0,4 a2,2 0 1,1 0,4 a2,2 0 1,1 0,-4 M70,15 h8 a4,4 0 0,1 0,8 h-4 l6,8 h-5 l-5,-7 v7 h-4 v-16 M95,25 a6,6 0 1,0 0,12 h4 v-6 h-4 v-4 h6 v-4 h-6 M125,15 l8,20 h-4 l-1,-4 h-6 l-1,4 h-4 l8,-20 m4,12 l-2,-6 l-2,6 h4 M150,15 h4 l10,14 v-14 h4 v20 h-4 l-10,-14 v14 h-4" />
                </svg>
            )
        },
        {
            name: "BlackRock",
            svg: (
                <svg viewBox="0 0 200 50" aria-label="BlackRock" className="fill-current w-full h-full">
                    <path d="M20,15 h8 a4,4 0 0,1 0,8 h-4 a4,4 0 0,1 4,8 h-8 z m4,4 v4 h4 a1,1 0 0,0 0,-4 h-4 m0,8 v4 h4 a1,1 0 0,0 0,-4 h-4 M45,15 h4 v16 h8 v4 h-12 M70,15 l8,20 h-4 l-1,-4 h-6 l-1,4 h-4 l8,-20 m4,12 l-2,-6 l-2,6 h4 M95,25 a6,6 0 1,0 0,12 h4 v-4 h-4 v-4 h4 v4 h4 v-6 a6,6 0 0,0 -8,-2 M120,15 h4 v10 l8,-10 h5 l-8,10 l8,10 h-5 l-8,-10 v10 h-4 M145,15 h8 a4,4 0 0,1 0,8 h-4 l6,8 h-5 l-5,-7 v7 h-4 v-16 M170,25 a6,6 0 1,0 0,12 a6,6 0 1,0 0,-12 m0,4 a2,2 0 1,1 0,4 a2,2 0 1,1 0,-4" />
                </svg>
            )
        },
        {
            name: "Fidelity",
            svg: (
                <svg viewBox="0 0 200 50" aria-label="Fidelity" className="fill-current w-full h-full">
                    <path d="M20,15 h12 v4 h-8 v4 h6 v4 h-6 v8 h-4 M45,15 h4 v20 h-4 M65,15 h8 a6,6 0 1,1 0,12 h-4 v8 h-4 z m4,4 v4 h2 a2,2 0 0,0 0,-4 h-2 M90,15 h12 v4 h-8 v4 h6 v4 h-6 v4 h8 v4 h-12 M115,15 h4 v16 h8 v4 h-12 M135,15 h4 v20 h-4 M155,15 h14 v4 h-5 v16 h-4 v-16 h-5 M180,15 l6,10 l6,-10 v8 l-6,12 l-6,-12" />
                </svg>
            )
        },
        {
            name: "Vanguard",
            svg: (
                <svg viewBox="0 0 200 50" aria-label="Vanguard" className="fill-current w-full h-full">
                    <path d="M20,15 l6,20 l6,-20 h-4 l-4,14 l-4,-14 M45,15 l8,20 h-4 l-1,-4 h-6 l-1,4 h-4 l8,-20 m4,12 l-2,-6 l-2,6 h4 M70,15 h4 v20 h-4 l-10,-14 v14 h-4 v-20 h4 l10,14 v-14 M95,25 a6,6 0 1,0 0,12 h4 v-10 h-4 v-2 h8 v12 a6,6 0 0,1 -8,0 M120,15 h4 v12 a4,4 0 0,0 8,0 v-12 h4 v12 a8,8 0 0,1 -16,0 M145,15 l8,20 h-4 l-1,-4 h-6 l-1,4 h-4 l8,-20 m4,12 l-2,-6 l-2,6 h4 M170,15 h8 a4,4 0 0,1 0,8 h-4 l6,8 h-5 l-5,-7 v7 h-4 v-16" />
                </svg>
            )
        }
    ];

    return (
        <section className="bg-black py-12 relative z-20">
            {/* This section sits immediately below the Hero's curve */}
            <div className="container mx-auto px-4 md:px-6">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-sm font-bold text-white/40 tracking-widest uppercase mb-10"
                >
                    Trusted by Industry Leaders
                </motion.p>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
                    {logos.map((logo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center gap-3 opacity-50 hover:opacity-100 transition-all duration-300 group cursor-default"
                        >
                            <div className="h-8 md:h-10 w-auto text-white/90 group-hover:text-primary transition-colors">
                                {logo.svg}
                            </div>
                            <span className="text-sm font-bold text-white/40 group-hover:text-white transition-colors">
                                {logo.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
