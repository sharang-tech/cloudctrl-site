import { Gemini, Replit, GooglePaLM } from '@/components/logos'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowUpRight, Plus } from 'lucide-react'
import { Icon } from '@iconify/react/dist/iconify.js'

export default function IntegrationsSection() {
    return (
        <section>
            <div className="bg-gradient-to-t from-background to-neutral-100 py-24 md:py-32">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="mx-auto max-w-md px-6 [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)]">
                        <div className="bg-background dark:bg-muted/50 rounded-xl border px-6 pb-12 pt-3 shadow-xl">
                            <Integration
                                icon={<Icon icon={"logos:slack-icon"} />}
                                name="Slack"
                                description="Get real-time updates on your Slack Channel"
                            />
                            <Integration
                                icon={<Icon icon={"logos:discord-icon"} />}
                                name="Discord"
                                description="Get real-time alerts on your Discord Server's Channel"
                            />
                            <Integration
                                icon={<Icon icon={"logos:microsoft-teams"} />}
                                name="Microsoft Teams"
                                description="Get real-time notification on your Team's Group"
                            />
                        </div>
                    </div>
                    <div className="mx-auto mt-6 max-w-lg space-y-6 text-center">
                        <h2 className="text-balance text-3xl font-semibold md:text-4xl lg:text-5xl">Real-time Notifications</h2>
                        <p className="text-muted-foreground">Connect seamlessly with your team, and receive real-time notification on your favorite medium of communication</p>

                        <Button
                            variant="outline"
                            size="sm"
                            asChild>
                            <Link href="/docs/integrations">View Integrations<ArrowUpRight size={16} /></Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Integration = ({ icon, name, description }: { icon: React.ReactNode; name: string; description: string }) => {
    return (
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-dashed py-3 last:border-b-0">
            <div className="bg-muted border-foreground/5 flex size-12 items-center justify-center rounded-lg border">{icon}</div>
            <div className="space-y-0.5">
                <h3 className="text-sm font-medium">{name}</h3>
                <p className="text-muted-foreground line-clamp-1 text-sm">{description}</p>
            </div>
            <Button
                disabled
                variant="outline"
                size="icon"
                aria-label="Add integration">
                <Plus className="size-4" />
            </Button>
        </div>
    )
}
