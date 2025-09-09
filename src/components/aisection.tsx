import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';
import { Badge } from './ui/badge';

export default function AISection() {
    return (
        <section>
            <div className="bg-gradient-to-b from-background to-neutral-100 py-24 md:py-32">
                <div className="mx-auto flex flex-col px-6 md:grid md:max-w-5xl md:grid-cols-2 md:gap-12">
                    <div className="order-last mt-6 flex flex-col gap-12 md:order-first">
                        <div className="space-y-6">
                            <Badge variant={"outline"}>
                                Comming Soon!
                            </Badge>
                            <h2 className="text-balance text-3xl font-semibold md:text-4xl lg:text-5xl">Integrate with your favorite LLMs</h2>
                            <p className="text-muted-foreground">Connect seamlessly with popular platforms and services to enhance your workflow.</p>
                        </div>

                        <div className="mt-auto grid grid-cols-[auto_1fr] gap-3">
                            <div className="bg-background flex aspect-square items-center justify-center rounded-full overflow-hidden max-sm:hidden pt-4.5">
                                <Image src={"/aryabh.png"} alt="Sharang Tech Labs' Founder" width={56} height={56} />
                            </div>
                            <blockquote>
                                <p className='text-sm'>We want to make CloudCTRL available for upcomming generation of AI agents.</p>
                                <div className="mt-2 flex gap-2 text-sm">
                                    <cite>Aryabh Thakur</cite>
                                    <p className="text-muted-foreground">Founder, Sharang Tech Labs</p>
                                </div>
                            </blockquote>
                        </div>
                    </div>

                    <div className="-mx-6 px-6 [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)] sm:mx-auto sm:max-w-md md:-mx-6 md:ml-auto md:mr-0">
                        <div className="bg-background dark:bg-muted/50 rounded-2xl border p-3 shadow-lg md:pb-12">
                            <div className="grid grid-cols-2 gap-2">
                                <Integration
                                    icon={<Icon icon={"logos:claude-icon"} fontSize={36} />}
                                    name="Claude"
                                />
                                <Integration
                                    icon={<Icon icon={"logos:google-gemini"} fontSize={36} />}
                                    name="Gemini"
                                />
                                <Integration
                                    icon={<Icon icon={"logos:openai-icon"} fontSize={36} />}
                                    name="ChatGPT"
                                />
                                <Integration
                                    icon={<Icon icon={"logos:hugging-face-icon"} fontSize={36} />}
                                    name="HuggingFace"
                                />
                                <Integration
                                    icon={<Icon icon={"logos:mistral-ai-icon"} fontSize={36} />}
                                    name="Mistral"
                                />
                                <Integration
                                    icon={<Icon icon={"logos:meta-icon"} fontSize={36} />}
                                    name="LLama"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Integration = ({ icon, name }: { icon: React.ReactNode; name: string }) => {
    return (
        <div className="bg-white flex flex-col max-sm:h-40 md:size-40 rounded-lg border p-6 transition-colors">
            <div className="flex size-fit items-center justify-center">{icon}</div>
            <div className="mt-auto">
                <h3 className="text-sm font-medium">{name}</h3>
            </div>
        </div>
    )
}
