"use client";

import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <SectionWrapper className="py-20">
            <div className="rounded-[40px] bg-gradient-to-r from-[#02df82] to-[#02b368] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_0_100px_rgba(2,223,130,0.3)]">
                {/* Background Patterns */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />

                <div className="relative z-10 max-w-3xl mx-auto text-black">
                    <span className="inline-block py-1 px-3 rounded-full bg-black/10 border border-black/5 text-xs font-bold uppercase tracking-wider mb-6">
                        Limited Availability
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        Get Your Financial Plan
                    </h2>
                    <p className="text-xl md:text-2xl font-medium opacity-80 mb-10 max-w-2xl mx-auto">
                        By signing up now, you&apos;ll get access to a free initial consultation and a roadmap to wealth.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 justify-center">
                        {/* Starter Card */}
                        <div className="bg-black/90 p-8 rounded-3xl text-white flex flex-col items-center shadow-lg border border-white/10 hover:border-primary/50 transition-all duration-300">
                            <span className="text-sm text-gray-400 mb-2">Starter</span>
                            <span className="text-3xl font-bold mb-6">Free</span>
                            <ul className="text-sm space-y-3 mb-8 text-gray-300 text-left w-full flex-grow">
                                <li className="flex gap-2">✓ Initial Consultation</li>
                                <li className="flex gap-2">✓ Portfolio Review</li>
                                <li className="flex gap-2">✓ Basic Risk Assessment</li>
                            </ul>
                            <Link href="/coming-soon" className="w-full">
                                <Button className="w-full bg-white text-black hover:bg-gray-200 rounded-xl">Book Now</Button>
                            </Link>
                        </div>

                        {/* Growth Card (Highlighted) */}
                        <div className="bg-white p-8 rounded-3xl text-black flex flex-col items-center shadow-2xl transform scale-105 border-4 border-black/5 relative z-10">
                            <span className="absolute -top-3 bg-black text-white text-xs py-1 px-3 rounded-full">Most Popular</span>
                            <span className="text-sm font-bold text-gray-600 mb-2">Growth</span>
                            <span className="text-4xl font-bold mb-6">$149<span className="text-lg font-normal text-gray-500">/mo</span></span>
                            <ul className="text-sm space-y-3 mb-8 text-gray-600 text-left w-full flex-grow">
                                <li className="flex gap-2">✓ Comprehensive Strategy</li>
                                <li className="flex gap-2">✓ Tax Optimization</li>
                                <li className="flex gap-2">✓ Quarterly Reviews</li>
                                <li className="flex gap-2">✓ Dedicated Advisor</li>
                            </ul>
                            <Link href="/coming-soon" className="w-full">
                                <Button className="w-full bg-[#02df82] text-black hover:bg-[#02b368] rounded-xl shadow-lg">Get Started</Button>
                            </Link>
                        </div>

                        {/* Wealth Card */}
                        <div className="bg-black/90 p-8 rounded-3xl text-white flex flex-col items-center shadow-lg border border-white/10 hover:border-primary/50 transition-all duration-300">
                            <span className="text-sm text-gray-400 mb-2">Wealth</span>
                            <span className="text-3xl font-bold mb-6">$299<span className="text-lg font-normal text-gray-500">/mo</span></span>
                            <ul className="text-sm space-y-3 mb-8 text-gray-300 text-left w-full flex-grow">
                                <li className="flex gap-2">✓ Family Office Services</li>
                                <li className="flex gap-2">✓ Estate Planning</li>
                                <li className="flex gap-2">✓ 24/7 Priority Support</li>
                                <li className="flex gap-2">✓ Private Equity Access</li>
                            </ul>
                            <Link href="/coming-soon" className="w-full">
                                <Button className="w-full bg-white text-black hover:bg-gray-200 rounded-xl">Contact Us</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
