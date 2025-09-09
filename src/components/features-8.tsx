import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { FeatureOneCli200 } from './animated/featurecli200'
import { FeatureTagFilter200 } from './animated/featureTagFilter200'
import { FeatureDryRun200 } from './animated/featureDryRun200'
import { FeatureVerboseOutput200 } from './animated/featureVerboseOutput200'
import { FeatureRealTimeAlerts200 } from './animated/featureRealAlerts'
import { FeatureSecureByDefault200 } from './animated/featuresecureby'
import { Icon } from '@iconify/react/dist/iconify.js'

export default function FeaturesSection() {
    const features = [
        {
            title: 'One CLI for 26 Providers', sub: 'AWS, Vercel, RunPod, Supabase — same commands, same flow.', component: FeatureOneCli200
        },
        {
            title: 'Tag & Filter Resources', sub: 'Group resources across providers. Find what you need in one query.', component: FeatureTagFilter200
        },
        {
            title: 'Dry-Run Previews', sub: 'See changes before applying. Safe, predictable operations.', component: FeatureDryRun200
        },
        {
            title: 'Verbose Output', sub: 'Debug with detailed logs. Know exactly what’s happening.', component: FeatureVerboseOutput200,
            className: 'lg:col-span-3'
        },
        {
            title: 'Real-Time Alerts', sub: 'Get notified on Slack, Discord, Email, or Teams when jobs finish.', component: FeatureRealTimeAlerts200,
            className: 'lg:col-span-3'
        },
        {
            title: 'Standalone Installers', sub: 'No dependencies. Just download and go — works on Windows and Linux.', key: "si"
        }, {
            title: 'Secure by Default', sub: "All the data, API Keys and secrets remain on the machine itself", component: FeatureSecureByDefault200
        }, {
            title: 'Open Source', sub: "100% open source, code's available on Github", key: "oss"
        },
    ]
    return (
        <>
            <section id='features' className="relative z-10 pb-16 md:pb-32 dark:bg-transparent">
                <div className="md:mx-20 bg-neutral-100 md:rounded-3xl">
                    <div className="mx-auto max-w-6xl py-24 md:py-48 px-6">
                        <div className="relative">
                            <div className='max-w-3xl text-center mx-auto pb-20'>
                                <h1 className='md:text-5xl font-medium md:leading-[56px] text-3xl mb-8'>Why CloudCTRL exists</h1>
                                <p className="font-medium text-neutral-500">Multiple platforms. Multiple CLIs. One problem: fragmentation. CloudCTRL unifies your infrastructure workflow. One command. Every provider.</p>
                            </div>
                            <div className="relative z-10 grid grid-cols-6 gap-5 md:gap-2">
                                {features.map((f, i) => <Card key={i} className={cn("relative shadow-none rounded-xl col-span-full p-1 lg:col-span-2", f.className)}>
                                    <CardContent className="relative flex-col flex p-0">
                                        {f.component && <f.component />}
                                        {f.key && <div className='h-50 flex'>
                                            {
                                                f.key === "si" && <div className='m-auto space-y-2'>
                                                    <div className="flex gap-2 p-3 rounded-lg items-center border border-dashed">
                                                        <div className="size-10 flex">
                                                            <Icon icon={"logos:microsoft-windows-icon"} fontSize={32} className='m-auto' />
                                                        </div>
                                                        <span className="text-sm font-medium">
                                                            cloudctl-windows-installer.msi
                                                        </span>
                                                    </div>
                                                    <div className="flex gap-2 p-3 rounded-lg items-center border border-dashed">
                                                        <div className="size-10 flex">
                                                            <Icon icon={"logos:linux-tux"} fontSize={32} className='m-auto' />
                                                        </div>
                                                        <span className="text-sm font-medium">
                                                            cloudctl-linux.deb
                                                        </span>
                                                    </div>
                                                </div>
                                            }
                                            {
                                                f.key === "oss" && <div className='m-auto flex items-center'>
                                                    <Icon icon={"logos:github-icon"} fontSize={28} />
                                                    <span className="text-lg ml-2 font-medium">
                                                        git clone....
                                                    </span>
                                                </div>
                                            }
                                        </div>}
                                        <div className="mt-auto p-5">
                                            <h3 className='text-xl font-semibold'>{f.title}</h3>
                                            <p className="text-sm font-medium text-neutral-400 mt-2">
                                                {f.sub}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
