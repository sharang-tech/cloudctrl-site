import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import { TextReveal } from "./magicui/text-reveal";

interface WHYsectionProps {
    className?: string
}

const WHYsection: FunctionComponent<WHYsectionProps> = ({ className }) => {
    return (<section id="why" className={cn("bg-gradient-to-b from-background to-neutral-100 relative z-10 py-16 md:py-32 dark:bg-transparent", className)}>
        <div className="max-w-4xl mx-auto">
            <h1 className='text-5xl font-medium leading-[56px] mb-8'>
                Why CloudCTRL Exists
            </h1>
            <p>Modern infrastructure spans dozens of platforms — AWS for compute, Vercel for frontend, RunPod for AI, Supabase for databases — each with its own CLI, config format, and learning curve. Managing them separately slows you down, increases errors, and makes automation harder.

                CloudCTRL was built to solve that. It unifies your entire stack under one intuitive command-line interface. Whether you're spinning up GPU instances, deploying a static site, or scaling a Postgres cluster, you can do it all with the same syntax, workflow, and configuration model.

                With CloudCTRL, you gain consistency without sacrificing capability — infrastructure management that scales with your stack, not your complexity.</p>
        </div>
    </section>);
}

export default WHYsection;