"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { motion } from "framer-motion";
import {
    TrendingUp,
    ShieldCheck,
    FileText,
    PieChart,
    Landmark,
    Briefcase
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Services() {
    const services = [
        {
            icon: TrendingUp,
            title: "Wealth Management",
            price: "$99.00", // Just as a placeholder mapping from ref style if needed, but keeping description
            description: "Grow and protect your assets with personalized investment strategies.",
            tag: "Popular"
        },
        {
            icon: ShieldCheck,
            title: "Retirement Planning",
            price: "$149.00",
            description: "Secure your future with comprehensive retirement strategies.",
            tag: "Essential"
        },
        {
            icon: FileText,
            title: "Tax Optimization",
            price: "$199.00",
            description: "Minimize tax liability through strategic planning.",
            tag: "Smart"
        },
        {
            icon: PieChart,
            title: "Investment Advisory",
            price: "$20.00",
            description: "Expert guidance on stocks, bonds, and alternative investments.",
            tag: "Growth"
        },
        {
            icon: Landmark,
            title: "Estate Planning",
            price: "$20.00",
            description: "Protect your legacy and ensure smooth wealth transfer.",
            tag: "Legacy"
        },
        {
            icon: Briefcase,
            title: "Business Consulting",
            price: "$20.00",
            description: "Strategic financial planning for entrepreneurs.",
            tag: "Biz"
        },
    ];

    return (
        <SectionWrapper id="services" className="bg-background">
            <div className="flex flex-wrap items-end justify-between mb-12 gap-6">
                <div className="max-w-xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tighter">
                        Find Your Perfect <br /> Financial Strategy
                    </h2>
                </div>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search services..."
                        className="bg-white/5 border border-white/10 rounded-full py-3 px-6 w-[300px] focus:outline-none focus:border-primary/50 transition-colors text-sm"
                    />
                    <Button className="absolute right-1 top-1 rounded-full h-auto py-2 px-4 text-xs">Search</Button>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="h-full p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-primary/50 transition-all duration-300 group relative overflow-hidden">
                            {/* Reference style: content is minimal and punchy */}
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 rounded-xl bg-white/5 text-primary group-hover:scale-110 transition-transform duration-300">
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-medium px-2 py-1 rounded border border-white/10 text-white/50">{service.tag}</span>
                            </div>

                            <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                {service.description}
                            </p>

                            <div className="flex items-center text-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                Learn More →
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
