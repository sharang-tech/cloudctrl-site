import { Logo } from '@/components/logo'
import { Icon } from '@iconify/react';
import Link from 'next/link'

const links = [
    {
        title: 'Documentation',
        href: '/docs',
    },
    {
        title: 'MIT License',
        href: '/license.txt',
    },
    {
        title: 'About Company',
        href: 'https://sharang.tech/?utm_source=CloudCTRL&utm_medium=footer&utm_campaign=footer_link',
        ext: true
    },
]

export default function FooterSection() {
    return (
        <footer className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <Link
                    href="/"
                    aria-label="go home"
                    className="mx-auto block size-fit">
                    <Logo />
                </Link>

                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-muted-foreground hover:text-primary block duration-150">
                            <span>{link.title}</span>
                        </Link>
                    ))}
                </div>
                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">

                    <Link
                        href="https://github.com/sharang-tech/CloudCTRL"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Github"
                        className="text-muted-foreground hover:text-primary block">
                        <Icon icon={'simple-icons:github'} className='text-3xl' />
                    </Link>
                </div>
                <span className="text-muted-foreground block text-center text-sm"> © {new Date().getFullYear()} Sharang Tech Labs, All rights reserved</span>
            </div>
        </footer>
    )
}
