'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { ArrowUpRight, Menu, Monitor, Moon, Sun, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useTheme } from 'next-themes'
import { Badge } from './ui/badge'

export const HeroHeader = () => {
    const [menuState, setMenuState] = useState(false)
    const [offset, setOffset] = useState(0);
    const { theme, setTheme } = useTheme()
    const [client, setClient] = useState(false)
    useEffect(() => {
        setClient(true)
        function onScroll() {
            setOffset(window.scrollY);
        }
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, [])
    return (
        <>
            <header data-scrolling={offset > 0}
                data-ontop={offset === 0} className='sticky -top-14 bg-background z-20 data-[scrolling=true]:border-border duration-300 border-transparent border-b'>
                <div className="py-4 bg-gradient-to-l from-neutral-800 to-neutral-950 text-white text-center font-medium">
                    <p className='text-xs md:text-base'>
                        Need custom development for your project? Visit us at Sharang.tech
                    </p>
                </div>
                <nav
                    data-state={menuState && 'active'}
                    className="w-full top-0">
                    <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
                        <div data-scrolling={offset > 0} className="relative duration-300 flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:data-[scrolling=false]:py-4 lg:data-[scrolling=true]:py-2">
                            <div className="flex w-full items-center justify-between gap-6 lg:w-auto">
                                <div className="flex items-center gap-1">
                                    <Link
                                        href="/"
                                        aria-label="home"
                                        className="flex items-center space-x-2">
                                        <Logo />
                                    </Link>
                                    <Badge>
                                        BETA
                                    </Badge>
                                </div>

                                <button
                                    onClick={() => setMenuState(!menuState)}
                                    aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                    className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                    <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                    <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                                </button>

                                <div className="hidden lg:block">
                                    <Button
                                        asChild
                                        size="sm"
                                        variant="ghost">
                                        <Link href="/docs/providers">
                                            <span>Providers</span>
                                            <ArrowUpRight size={16} />
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                    <Button
                                        asChild
                                        size="sm"
                                        variant="ghost">
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
                                    {client && <Button variant={"ghost"} size={"icon"} className='rounded-full hidden' onClick={() => {
                                        if (theme === "dark") {
                                            setTheme("light")
                                        }
                                        if (theme === "light") {
                                            setTheme("dark")
                                        }
                                        if (theme === "system") {
                                            setTheme("dark")
                                        }
                                    }}>
                                        {theme === "system" && <Monitor />}
                                        {theme === "dark" && <Moon />}
                                        {theme === "light" && <Sun />}
                                    </Button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
