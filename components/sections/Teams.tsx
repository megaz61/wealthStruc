"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";
import { User2 } from "lucide-react";

export default function Teams() {
    const team = [
        {
            name: "Robert Williams",
            role: "Senior Financial Advisor",
            details: "Certified Financial Planner (CFP) with 20 years of experience.",
        },
        {
            name: "Amanda Chen",
            role: "Tax Strategy Specialist",
            details: "Former tax attorney, CPA and Enrolled Agent with 15 years experience.",
        },
        {
            name: "Marcus Johnson",
            role: "Investment Analyst",
            details: "Chartered Financial Analyst (CFA) with 12 years analyzing market trends.",
        },
        {
            name: "Lisa Rodriguez",
            role: "Estate Planning Consultant",
            details: "Expert in trust and estate planning with 18 years of dedicated service.",
        },
    ];

    return (
        <SectionWrapper id="team">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Meet Our <span className="text-primary">Expert Team</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                    Experienced professionals dedicated to your financial success.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {team.map((member, index) => (
                    <Card key={index} className="text-center p-6 bg-white/5 border-white/5 hover:border-primary/50 transition-colors">
                        <div className="w-24 h-24 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4">
                            <User2 className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                        <p className="text-primary text-sm font-semibold mb-3">{member.role}</p>
                        <p className="text-muted-foreground text-sm">
                            {member.details}
                        </p>
                    </Card>
                ))}
            </div>
        </SectionWrapper>
    );
}
