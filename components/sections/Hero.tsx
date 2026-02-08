"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-0 md:pt-48 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                {/* Top Center Glow */}
                <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium mb-8 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        Coming Soon
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold leading-[1.1] mb-8 tracking-tight">
                        Build Wealth With <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50">
                            Confidence
                        </span>
                    </h1>

                    <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                        Expert financial guidance to help you achieve your goals, secure your future, and make smarter money decisions.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                        <Button size="lg" className="rounded-full px-8 h-14 text-base shadow-[0_0_30px_rgba(2,223,130,0.3)] hover:shadow-[0_0_50px_rgba(2,223,130,0.5)] transition-all duration-300">
                            Get Free Consultation
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base border-white/10 hover:bg-white/5 gap-2 group">
                            <PlayCircle className="w-5 h-5 group-hover:text-primary transition-colors" />
                            Watch Demo
                        </Button>
                    </div>
                </motion.div>

                {/* 3D Visual Placeholder Anchor */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative w-full max-w-5xl mx-auto"
                >
                    {/* This div is the placeholder for the "3D Financial Image" */}
                    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] flex items-center justify-center">
                        {/* Insert your 3D Financial Image here */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-primary/5 to-transparent rounded-t-3xl border-t border-x border-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50 animate-pulse" style={{ animationDuration: '4s' }} />

                            {/* Abstract Blocks representation */}
                            <div className="flex items-end gap-4 md:gap-8 opacity-80">
                                <div className="w-16 h-32 bg-gradient-to-t from-primary/40 to-primary/10 rounded-lg border border-primary/30" />
                                <div className="w-16 h-48 bg-gradient-to-t from-primary/60 to-primary/20 rounded-lg border border-primary/30" />
                                <div className="w-16 h-64 bg-gradient-to-t from-primary/80 to-primary/30 rounded-lg border border-primary/30 shadow-[0_0_30px_rgba(2,223,130,0.2)]" />
                                <div className="w-16 h-40 bg-gradient-to-t from-primary/50 to-primary/15 rounded-lg border border-primary/30" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Convex Curve Separator */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
                <svg
                    className="relative block w-full h-[80px] md:h-[150px]"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    {/* The path draws a convex curve (arc) filled with BLACK to match the next section */}
                    <path
                        d="M0,120V60c180,90,420,90,600,90s420,0,600-90v60H0z"
                        className="fill-black"
                        transform="scale(1, -1) translate(0, -120)" // Invert to make it convex (mountain shape) if needed, but the ref image is actually CONCAVE into the black or CONVEX from the hero? 
                    // Wait, ref image has the Hero section curving DOWNWARDS OUTWARDS (Convex) or the Black section curving UPWARDS (Concave)?
                    // "The Hero section MUST end with a convex curve (arc) transitioning into the next section."
                    // Re-reading: "The 'Trusted By' Bar: Immediately inside/below the curve" -> implying the curve creates a "hill" or alignment.
                    // Looking at SwishHost image: The hero background ends in a convex curve (bulging down).
                    // So the black section needs to have a concave top, or simpler:
                    // The Hero draws a shape that bulges down.
                    />
                    {/* Let's try a standard arc that fills the bottom with the next section's color (Black) but "eats" into the hero? No, the hero pushes INVALID. 
               The Hero is the top layer. It needs to have a rounded bottom. 
               Easier: The SVG is part of the Hero, filled with the BACKGROUND of the NEXT section (Black).
               Shape: The void should be the curve.
            */}
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        opacity=".25"
                        className="fill-black hidden"
                    />
                    {/* Simple Arc: M0,something Q600,something 1200,something */}
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="fill-black opacity-20 hidden"
                    />
                    {/* 
                Correct Approach for "Convex Curve" (Bulging Down):
                We want the Hero image to bulge down. 
                So we need an SVG at the bottom that is TRANSPARENT at the top (showing hero bg) and BLACK at the bottom (start of next section), 
                but the boundary is an arc.
            */}
                    <path
                        d="M0,120 L1200,120 L1200,0 Q600,120 0,0 Z"
                        className="fill-black"
                    // M0,120 (Bottom Left) -> L1200,120 (Bottom Right) -> L1200,0 (Top Right) -> Quadratic Curve to Top Left via Bottom Center control point?
                    // Let's visualize: 
                    // Top edge of SVG is y=0. Bottom is y=120.
                    // We want to fill the "corners" with black, leaving the center transparent? 
                    // No, "Hero ends with a convex curve".
                    // |       Hero BG       |
                    // |                     |
                    //  \                   /
                    //   \                 /
                    //    \_______________/  <-- Curve
                    //        Black BG
                    //
                    // So the SVG should be the BLACK part.
                    // It should cover the area UNDER the hero's curve.
                    // Path: Start Top Left (0,0)? No.
                    // Start Top Left (0,something) curve down to Center (600, 120) curve up to Top Right (1200, something).
                    // Close shape by going Bottom Right -> Bottom Left.
                    />
                    <path
                        d="M0,0 Q600,150 1200,0 V150 H0 V0"
                        className="fill-black"
                    // M0,0 (Top Left) -> Quad Bezier to (1200,0) via (600, 150). This makes a "U" shape of Empty Space? No, the fill is Black.
                    // So the BLACK shape is the U. 
                    // WE WANT THE HERO TO BE THE CONVEX SHAPE.
                    // So the BLACK section needs to be "bitten" into.
                    // Wait, if I fill M0,0 Q600,150 1200,0 V150 H0 V0 with Black...
                    // Point 0,0 is Top Left. 1200,0 is Top Right.
                    // Q600,150 pulls the curve DOWN to y=150.
                    // So the shape being filled is the area between y=0 and the curve.
                    // Wait. 
                    // If I fill the path "M0,0 Q600,150 1200,0...", the area "inside" the curve is filled.
                    // This creates a "Tongue" of black hanging down? No.
                    // 
                    // Let's try: We want hero to stick OUT.
                    // So the Black section must have a concave top.
                    // We are placing this SVG at the BOTTOM of the hero (relative).
                    // So the SVG needs to fill the space that is NOT hero.
                    // If Hero bulges down, the "Not Hero" space are the corners.
                    // |\_               _/|
                    // |  \_____________/  |
                    // |______Black________|

                    // Use a standard curve shape: curvature.
                    />

                    {/* 
                 Actually, looking at SwishHost:
                 It's a big arc.
                 Let's stick to a simple arc.
             */}
                    <path
                        d="M0,60 Q600,180 1200,60 V150 H0 V60"
                        className="fill-black"
                    // This effectively draws a shape that starts mid-height, curves down, and fills the bottom.
                    // This creates a CONVEX Hero (rounded bottom).
                    />
                </svg>
            </div>
        </section>
    );
}
