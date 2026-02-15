"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function ComingSoon() {
    return (
        <div className="min-h-screen w-full bg-[#0a0a0a] flex flex-col items-center justify-center relative overflow-hidden font-sans">
            {/* Background Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 text-center px-4 max-w-3xl mx-auto"
            >
                {/* Animated Icon/Graphic */}
                <div className="mb-12 flex justify-center">
                    <div className="relative w-24 h-24 flex items-center justify-center">
                        <span className="absolute inset-0 rounded-full border border-primary/30 animate-ping opacity-20" />
                        <span className="absolute inset-0 rounded-full border border-primary/20 animate-pulse delay-75" />
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center border border-primary/50 shadow-[0_0_30px_rgba(2,223,130,0.3)] backdrop-blur-sm">
                            <div className="w-8 h-8 bg-primary rounded-full animate-pulse shadow-[0_0_20px_rgba(2,223,130,0.8)]" />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                    Building Wealth <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">
                        Takes Time
                    </span>
                </h1>

                <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
                    This feature is currently under development. As this is a portfolio showcase, some functionalities are simulated to demonstrate the design and user experience.
                </p>

                {/* Action */}
                <Link href="/">
                    <Button
                        size="lg"
                        className="rounded-full px-8 h-12 text-base shadow-[0_0_20px_rgba(2,223,130,0.2)] hover:shadow-[0_0_40px_rgba(2,223,130,0.4)] transition-all duration-300 gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Return to Home
                    </Button>
                </Link>
            </motion.div>

            {/* Footer info matching theme */}
            <div className="absolute bottom-8 text-center text-white/20 text-sm">
                <p>&copy; {new Date().getFullYear()} WealthStruc. All rights reserved.</p>
            </div>
        </div>
    );
}
