import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black py-16 border-t border-white/10 text-sm">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div>
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-white block mb-6">
                            Wealth<span className="text-primary">Struc</span>.
                        </Link>
                        <p className="text-muted-foreground mb-6">
                            Expert financial guidance to help you build, protect, and manage your wealth.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <Link key={i} href="/coming-soon" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-colors">
                                    <Icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6 text-lg">Quick Links</h3>
                        <ul className="space-y-4">
                            {["About Us", "Services", "Our Process", "Case Studies", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link href="/coming-soon" className="text-muted-foreground hover:text-primary transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6 text-lg">Services</h3>
                        <ul className="space-y-4">
                            {["Wealth Management", "Retirement Planning", "Tax Optimization", "Estate Planning", "Business Consulting"].map((item) => (
                                <li key={item}>
                                    <Link href="/coming-soon" className="text-muted-foreground hover:text-primary transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6 text-lg">Contact Us</h3>
                        <ul className="space-y-4 text-muted-foreground">
                            <li>123 Financial District Blvd, Suite 400<br />New York, NY 10005</li>
                            <li>+1 (555) 123-4567</li>
                            <li>contact@wealthstruc.com</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground">
                    <p>© 2026 Financial Consultation Service. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/coming-soon" className="hover:text-white">Privacy Policy</Link>
                        <Link href="/coming-soon" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
