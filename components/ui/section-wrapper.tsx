import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

const SectionWrapper = ({
    className,
    children,
    ...props
}: HTMLAttributes<HTMLDivElement>) => {
    return (
        <section className={cn("py-[85px] relative overflow-hidden", className)} {...props}>
            <div className="container-custom relative z-10">
                {children}
            </div>
        </section>
    );
};

export { SectionWrapper };
