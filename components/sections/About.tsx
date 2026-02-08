"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function About() {
    const stats = [
        { label: "Experience", value: "15+ Years" },
        { label: "Assets", value: "$500M+" },
        { label: "Clients", value: "2000+" },
        { label: "Retention", value: "98%" },
    ];

    return (
        <SectionWrapper id="about" className="py-20 md:py-32">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                {/* Left Column: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        Reclaim Time With <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                            Worry-Free Investing
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        Effortless Financial Solutions: Let Us Handle the Technical Details While You Focus on Growing Your Business and Enjoying Your Valuable Time.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                        {stats.map((stat, i) => (
                            <div key={i} className="flex flex-col">
                                <span className="text-2xl font-bold text-primary">{stat.value}</span>
                                <span className="text-sm text-muted-foreground">{stat.label}</span>
                            </div>
                        ))}
                    </div>

                    <Button size="lg" className="rounded-full shadow-[0_0_20px_rgba(2,223,130,0.3)]">
                        Explore Solutions
                    </Button>
                </motion.div>

                {/* Right Column: 3D Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[400px] md:h-[500px] w-full"
                >
                    {/* Placeholder for 3D Building/Structure */}
                    <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent rounded-3xl border border-white/10 relative overflow-hidden flex items-center justify-center group">
                        <div className="absolute inset-0 bg-grid-pattern opacity-30" />

                        {/* Abstract Building Blocks */}
                        <div className="relative z-10 w-40 h-64 bg-gradient-to-b from-primary/20 to-primary/5 rounded-lg border border-primary/20 backdrop-blur-md transform -rotate-12 translate-x-[-20px] group-hover:-translate-y-4 transition-transform duration-500" />
                        <div className="relative z-20 w-48 h-56 bg-gradient-to-b from-white/10 to-transparent rounded-lg border border-white/10 backdrop-blur-xl transform rotate-6 translate-x-[20px] shadow-2xl group-hover:translate-y-4 transition-transform duration-500 flex flex-col justify-between p-4">
                            <div className="w-8 h-8 rounded-full bg-primary mb-4 animate-pulse" />
                            <div className="space-y-2">
                                <div className="w-full h-2 bg-white/20 rounded-full" />
                                <div className="w-2/3 h-2 bg-white/20 rounded-full" />
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute bottom-6 left-6 glass-card p-4 rounded-xl flex items-center gap-3 z-30 animate-bounce" style={{ animationDuration: '3s' }}>
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                                <CheckCircle className="w-5 h-5 text-black" />
                            </div>
                            <div>
                                <div className="font-bold text-sm">Powerful Strategy</div>
                                <div className="text-xs text-muted-foreground">Proven Results</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
