import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

const SectionWrapper = ({
    className,
    children,
    ...props
}: HTMLAttributes<HTMLDivElement>) => {
    return (
        <section className={cn("py-20 md:py-32 relative overflow-hidden", className)} {...props}>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {children}
            </div>
        </section>
    );
};

export { SectionWrapper };
