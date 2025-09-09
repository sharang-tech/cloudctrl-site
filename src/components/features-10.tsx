import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Calendar, LucideIcon, MapIcon, Terminal, Waypoints } from 'lucide-react'
import Image from 'next/image'
import { ReactNode } from 'react'

export default function Features() {
    const Solutions = [
        {
            icon: Terminal,
            "title": "Too Many CLIs",
            "problem": "Juggling AWS, Vercel, RunPod, and more — each with its own commands and setup.",
            "solution": "One interface. One command pattern. Manage all providers with `CloudCTRL`."
        },
        {
            icon: Waypoints,
            "title": "Inconsistent Workflows",
            "problem": "Different config formats, auth methods, and output styles slow down automation.",
            "solution": "Unified profiles, tagging, and standardized output. Same workflow across all platforms."
        }
    ]
    return (
        <section className="bg-gradient-to-t from-neutral-100 via-white to-neutral-100 py-16 md:py-32 dark:bg-transparent">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-5xl">
                <div className="text-center max-w-xl mx-auto mb-16">
                    <h2 className="text-balance text-3xl font-semibold md:text-4xl">Simplify Your Infrastructure Workflow</h2>
                    <p className="text-muted-foreground mt-6">Managing multiple platforms shouldn’t mean learning multiple workflows. CloudCTRL brings consistency across your tools — so you can focus on building, not configuring.</p>
                </div>
                <div className="mx-auto grid gap-4 lg:grid-cols-2">
                    {Solutions.map((sol, i) => <FeatureCard key={i}>
                        <CardHeader className="pb-3">
                            <CardHeading
                                icon={sol.icon}
                                title={sol.title}
                                description={sol.problem}
                            />
                        </CardHeader>

                        <CardContent>
                            <div className="bg-neutral-100 relative p-8 text-center rounded-2xl h-80 flex">
                                <p className="m-auto text-xl font-semibold">
                                    {sol.solution}
                                </p>
                                <span className="absolute top-5 left-5 rounded-full text-white px-3 py-1 text-sm bg-black">
                                    How CloudCTRL solves it
                                </span>
                            </div>
                        </CardContent>
                    </FeatureCard>)}
                </div>
            </div>
        </section>
    )
}

interface FeatureCardProps {
    children: ReactNode
    className?: string
}

const FeatureCard = ({ children, className }: FeatureCardProps) => (
    <Card className={cn('group relative rounded-none shadow-none', className)}>
        <CardDecorator />
        {children}
    </Card>
)

const CardDecorator = () => (
    <>
        <span className="border-orange-500 absolute -left-px -top-px block size-4 border-l-2 border-t-2"></span>
        <span className="border-orange-500 absolute -right-px -top-px block size-4 border-r-2 border-t-2"></span>
        <span className="border-orange-500 absolute -bottom-px -left-px block size-4 border-b-2 border-l-2"></span>
        <span className="border-orange-500 absolute -bottom-px -right-px block size-4 border-b-2 border-r-2"></span>
    </>
)

interface CardHeadingProps {
    icon: LucideIcon
    title: string
    description: string
}

const CardHeading = ({ icon: Icon, title, description }: CardHeadingProps) => (
    <div className="p-6">
        <span className="text-muted-foreground flex items-center gap-2">
            <Icon className="size-4" />
            {title}
        </span>
        <p className="mt-8 text-2xl font-semibold">{description}</p>
    </div>
)


