import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/react/dist/iconify.js'
import { AppWindow, ArrowUpRight, Bot, Cloud, Database } from 'lucide-react'

export default function HeroSection() {
    return (
        <>
            <section id="hero" className="overflow-x-hidden duration-300">
                <div className='relative py-40'>
                    <div className="max-w-3xl m-auto px-6 text-center">
                        <div className="flex gap-3 justify-center mb-4">
                            <div className="size-10 flex border rounded-lg">
                                <Bot className='m-auto size-5' />
                            </div>
                            <div className="size-10 flex border rounded-lg">
                                <Database className='m-auto size-5' />
                            </div>
                            <div className="size-10 flex border rounded-lg">
                                <Cloud className='m-auto size-5' />
                            </div>
                            <div className="size-10 flex border rounded-lg">
                                <AppWindow className='m-auto size-5' />
                            </div>
                        </div>
                        <h1 className='md:text-5xl text-2xl font-medium md:leading-[56px] mb-8'>The Universal CLI for Cloud, AI, Frontend & Databases</h1>
                        <p className='font-medium'>Stop juggling CLIs. Deploy, manage, and monitor across cloud, AI, frontend, and databases — all from one consistent interface.</p>
                        <div className="flex gap-4 items-center flex-wrap mx-auto mt-8 w-fit">
                            <Button
                                asChild
                            >
                                <Link href={"https://github.com/sharang-tech/cloudctrl"}>
                                    <Icon icon={'simple-icons:github'} className='text-3xl' />
                                    <span>Download</span>
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline">
                                <Link href={process.env.DOCS_URL || ""} target='_blank'>
                                    <span>Documentation</span>
                                    <ArrowUpRight size={16} />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
