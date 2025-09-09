import { Fira_Code } from 'next/font/google';
import { cn } from '../lib/utils'

const font = Fira_Code({
    weight: "500",
    subsets: ["latin"]
})

export const Logo = ({ className }: { className?: string; }) => {
    return (
        <div className={cn(`text-foreground h-5 w-auto ${font.className}`, className)}>
            <span>CloudCTRL<span className='text-orange-500'>()</span></span>
        </div>
    )
}