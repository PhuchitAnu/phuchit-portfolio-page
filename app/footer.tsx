import { AtSign, BriefcaseBusiness, ChevronsLeftRight } from 'lucide-react'

export default function Footer() {
    return (
        <div className="bg-[#050505] text-white text-lg py-4 border-t-2 border-[#1f1f1f]">
            <div className="w-9/10 md:max-w-2xl lg:max-w-7xl mx-auto flex flex-col">
                <div className='flex md:flex-row flex-col items-center justify-between py-10 border-b-2 gap-8 md:gap-0 border-[#1f1f1f]'>
                    <div className="flex flex-col items-center md:items-start gap-2 ">
                        <p className='text-xl font-bold'>Let&apos;s build something together</p>
                        <p className='text-md text-muted-foreground'>p.anuhitanukul@gmail.com</p>
                    </div>
                    <nav className="flex gap-4">
                        <ChevronsLeftRight />
                        <BriefcaseBusiness />
                        <AtSign />
                    </nav>
                </div>
                <div className='flex md:flex-row flex-col items-center md:items-start justify-between py-5 text-sm text-muted-foreground'>
                    <p>© 2025 Phuchit Anuhitanukul. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Designed &amp; Built by Phuchit Anuchitanukul</p>
                </div>
            </div>
        </div>
    )
}