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
                {/* Right Column: Realistic Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 group"
                >
                    {/* Image */}
                    <div className="absolute inset-0 bg-gray-900">
                        {/* If generation works, this will be replaced. If not, using a high-quality Unsplash source as fallback/placeholder for "Realistic Image" */}
                        <img
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop"
                            alt="Financial Consultation"
                            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute bottom-8 left-8 glass-card p-4 rounded-xl flex items-center gap-3 z-30 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(2,223,130,0.4)]">
                            <CheckCircle className="w-6 h-6 text-black" />
                        </div>
                        <div>
                            <div className="font-bold text-white text-base">Trusted Advisors</div>
                            <div className="text-xs text-primary/80">100% Client Focus</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
