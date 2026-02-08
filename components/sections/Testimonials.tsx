"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Quote, Star } from "lucide-react";


export default function Testimonials() {
    const testimonials = [
        {
            quote: "WealthStruc has been fantastic for my business finances. It's fast, reliable, and the support is top-notch. My assets grew quickly.",
            author: "Caitlyn King",
            role: "Business Specialist",
            rating: 5
        }
    ];

    return (
        <SectionWrapper className="py-20">
            <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
                <div className="max-w-lg">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase">
                        What Our <br /> Clients Said
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        Trusted by thousands of investors worldwide.
                    </p>
                </div>

                <div className="flex-1 w-full relative">
                    {testimonials.map((item, index) => (
                        <div key={index} className="relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                            <div className="flex gap-1 text-primary mb-4">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-primary" />
                                ))}
                            </div>
                            <Quote className="w-8 h-8 text-primary/20 mb-4 fill-current" />
                            <p className="text-xl text-white/90 mb-8 leading-relaxed font-light">
                                &quot;{item.quote}&quot;
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-500 p-[2px]">
                                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-xs font-bold">
                                        {item.author.charAt(0)}
                                    </div>
                                </div>
                                <div>
                                    <p className="font-bold text-white">{item.author}</p>
                                    <p className="text-xs text-muted-foreground">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Pagination Dummies */}
                    <div className="flex gap-2 mt-8 justify-end">
                        <div className="w-8 h-1 bg-primary rounded-full" />
                        <div className="w-2 h-1 bg-white/20 rounded-full" />
                        <div className="w-2 h-1 bg-white/20 rounded-full" />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
