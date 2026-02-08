"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Portfolio() {
    const cases = [
        {
            title: "Individual Wealth Growth",
            content: "Helped a young professional grow retirement savings from $50K to $300K in 8 years through strategic investment planning."
        },
        {
            title: "Business Expansion Funding",
            content: "Secured $2M in financing for a tech startup, leading to successful market expansion and 200% revenue growth.",
        },
        {
            title: "Retirement Success",
            content: "Enabled a couple to retire 5 years early with a comfortable income stream exceeding their initial goals."
        },
        {
            title: "Tax Savings Achievement",
            content: "Reduced annual tax burden by 35% for a high-income family through strategic tax optimization."
        },
        {
            title: "Estate Protection",
            content: "Structured a $5M estate plan ensuring seamless wealth transfer and minimizing estate taxes by 40%."
        }
    ];

    return (
        <SectionWrapper id="portfolio">
            <div className="md:flex justify-between items-end mb-16">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Proven <span className="text-primary">Track Record</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Real results we&apos;ve delivered for our clients.
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cases.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="h-full p-8 hover:bg-white/10 group cursor-default">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                                <ArrowUpRight className="text-white/30 group-hover:text-primary transition-colors" />
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                {item.content}
                            </p>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
