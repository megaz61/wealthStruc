"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { motion } from "framer-motion";

export default function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Initial Consultation",
            description: "We discuss your financial goals, current situation, and concerns in a free no-obligation meeting.",
        },
        {
            number: "02",
            title: "Financial Analysis",
            description: "Our team conducts a thorough review of your assets, liabilities, income, and expenses.",
        },
        {
            number: "03",
            title: "Custom Strategy",
            description: "We develop a personalized financial plan tailored to your specific goals and risk tolerance.",
        },
        {
            number: "04",
            title: "Implementation & Monitoring",
            description: "We execute your plan and provide ongoing support with regular reviews and adjustments.",
        },
    ];

    return (
        <SectionWrapper id="process" className="bg-white/[0.02]">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Your Path to <span className="text-primary">Financial Success</span>
                </h2>
                <p className="text-xl text-muted-foreground w-full max-w-2xl mx-auto">
                    A proven process designed to understand your needs and deliver results.
                </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative">
                {/* Connector Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="relative z-10 flex flex-col items-center text-center group"
                    >
                        <div className="w-24 h-24 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center text-3xl font-bold text-primary mb-6 shadow-[0_0_20px_rgba(2,223,130,0.2)] group-hover:scale-110 transition-transform duration-300">
                            {step.number}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                        <p className="text-muted-foreground text-sm">
                            {step.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
