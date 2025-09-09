import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/react/dist/iconify.js'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-5xl rounded-xl bg-gradient-to-t from-background to-neutral-100 px-6 py-12 md:py-20 lg:py-32">
                <div className="text-center max-w-xl mx-auto">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Get Started</h2>
                    <p className="mt-4">Seemlessly streamline your Infrastructure workflow with your team, from AI to Cloud to Frontend and more.</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button
                            asChild
                            size="sm"
                            variant="outline">
                            <Link href="/docs">
                                <span>Documentation</span>
                                <ArrowUpRight size={16} />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="sm">
                            <Link href={"https://github.com/sharang-tech/cloudctrl"}>
                                <Icon icon={'simple-icons:github'} className='text-3xl' />
                                <span>Download</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
