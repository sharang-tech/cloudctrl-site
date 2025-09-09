import { Icon } from '@iconify/react/dist/iconify.js'
import { ArrowUpRight, } from 'lucide-react'
import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { InfiniteSlider } from './ui/infinite-slider'

export default function ProviderSection() {
    const cloudProviders = [
        {
            title: 'AWS',
            logo: '/aws-amazon-web-services.png',
            link: '/providers/aws'
        }, {
            title: 'Microsoft Azure',
            icon: 'logos:azure',
            link: '/providers/azura'
        }, {
            title: 'Google Cloud',
            logo: '/google-cloud.png',
            link: '/providers/google'
        }, {
            title: 'Vultr',
            icon: 'logos:vultr',
            link: '/providers/vultr'
        }, {
            title: 'DigitalOcean',
            logo: '/digitalocean.png',
            link: '/providers/digitalocean'
        }, {
            title: 'Linode',
            logo: '/linode.png',
            link: '/providers/linode'
        }, {
            title: 'Tencent Cloud',
            logo: '/tencent.png',
            link: '/providers/tencent'
        }, {
            title: 'Huawei Cloud',
            logo: '/huawei.png',
            link: '/providers/huawei'
        }, {
            title: 'Alibaba Cloud',
            logo: '/alibaba-cloud.png',
            link: '/providers/alibaba'
        }, {
            title: 'Vercel',
            icon: 'logos:vercel',
            link: '/providers/vercel'
        }, {
            title: 'Netlify',
            icon: 'logos:netlify',
            link: '/providers/netlify'
        }, {
            title: 'Render',
            logo: '/render.png',
            link: '/providers/render'
        }, {
            title: 'Fly.io',
            icon: 'logos:fly',
            link: '/providers/netlify'
        }, {
            title: 'Neon DB',
            icon: 'logos:neon',
            link: '/providers/neon'
        }, {
            title: 'Planetscale',
            icon: 'logos:planetscale',
            link: '/providers/planetscale'
        }, {
            title: 'Supabase',
            icon: 'logos:supabase',
            link: '/providers/supabase'
        }, {
            title: 'Together.ai',
            logo: '/together-ai.png',
            link: '/providers/together'
        },]
    return (
        <section id='providers'>
            <div className="mx-auto bg-gradient-to-t from-white to-neutral-100 max-w-6xl md:px-5 pt-12 pb-20 rounded-t-2xl font-medium">
                <div className="max-w-5xl mx-auto">
                    <div className="flex max-sm:flex-wrap max-sm:flex-col items-center max-sm:px-5 mb-10">
                        <div className='max-sm:text-center'>
                            <h1 className='text-xl max-sm:mb-2'>Works seemlessly with your favourite providers</h1>
                            <p className='text-neutral-500 text-sm'>Integrated with over 25+ provider, throughout different sectors.</p>
                        </div>
                        <div className="mt-5 md:mt-0 md:ml-auto">
                            <Button className='bg-rose-600' asChild>
                                <Link href={process.env.DOCS_URL + "/providers"}>
                                    View all Providers <ArrowUpRight />
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <InfiniteSlider speed={30} gap={28} className='md:hidden'>
                        {
                            cloudProviders.map((item) => <div key={item.title} className='h-28 flex'>
                                {item.icon && <Icon icon={item.icon} className='m-auto' fontSize={28} />}
                                {item.logo && <Image src={item.logo} alt={item.title} width={256} className='scale-50 m-auto' height={-1} />}
                            </div>)
                        }
                    </InfiniteSlider>
                    <div className="hidden md:grid divide-x divide-y divide-dashed grid-cols-3 md:grid-cols-4">
                        {cloudProviders.map((item, i) => <div className={`h-28 flex group relative ${i === 3 && 'border-r-0'} ${i === 7 && 'border-r-0'} ${i === 11 && 'border-r-0'} ${i === 15 && 'border-r-0'} ${i === 16 && `border-b-0`}`} key={i}>
                            {item.logo && <Image src={item.logo} alt={item.title} width={256} className='scale-50 m-auto' height={-1} />}
                            {item.icon && <Icon icon={item.icon} className='m-auto' fontSize={28} />}
                            <Link href={process.env.DOCS_URL + item.link} className="absolute z-10 flex w-full h-full backdrop-blur-3xl invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-300">
                                <div className='m-auto h-fit py-1 flex items-center text-sm gap-1'>
                                    {item.title} <ArrowUpRight size={16} className='group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-500' />
                                </div>
                            </Link>
                        </div>)}
                        <div className={`h-28 flex group relative`}>
                            <span className="m-auto text-sm">
                                and more...
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
