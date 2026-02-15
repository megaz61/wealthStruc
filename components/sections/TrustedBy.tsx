"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { motion } from "framer-motion";

export default function TrustedBy() {
    const companies = [
        "Goldman Sachs",
        "J.P. Morgan",
        "Morgan Stanley",
        "BlackRock",
        "Fidelity",
        "Vanguard"
    ];

    return (
        <section className="bg-black py-16 border-t border-white/5 relative z-20">
            <div className="container-custom">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-sm font-bold text-white/40 tracking-widest uppercase mb-12"
                >
                    Trusted by Industry Leaders
                </motion.p>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    {companies.map((company, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group cursor-default"
                        >
                            <span
                                className="text-xl md:text-[20px] font-bold text-gray-500 tracking-tight transition-colors duration-300 group-hover:text-white"
                            >
                                {company}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
