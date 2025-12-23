import { Button } from '@/components/ui/button'
import { ChevronsLeftRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        <>
            {/* Hero Section */}
            <div className="border-b-2 border-[#1f1f1f]">
                <div id="home" className="w-9/10 md:max-w-2xl lg:max-w-7xl mx-auto md:py-32 py-10">
                    <div className="flex flex-col gap-2">
                        <div>
                            <Button className="rounded-full border hover:bg-white hover:text-black">
                                <ChevronsLeftRight />
                                <h1 className="text-xs md:text-sm">JUNIOR FULL STACK DEVELOPER</h1>
                            </Button>
                        </div>
                        <div className="mt-4">
                            <h1 className="text-xl md:text-2xl">Hello, I buil things for the web.</h1>
                        </div>
                    </div>
                    <div className="md:mt-18 mt-8 flex gap-4 justify-between">
                        <div>
                            <div className="lg:text-8xl md:text-4xl text-4xl font-bold">
                                <h1>PHUCHIT</h1>
                                <h1>ANUCHITANUKUL</h1>
                            </div>
                            <div className="text-2xl md:pt-10 pt-8">
                                <p className="text-muted-foreground text-lg md:text-xl font-normal leading-relaxed max-w-125">I specialize in building exceptional digital experiences. Currently focused on accessible, human-centered products using modern web technologies.</p>
                            </div>
                            <div className="flex gap-4 md:pt-10 pt-8">
                                <Link href="/projects"><Button className="border-2 border-[#1f1f1f] bg-white text-md text-black hover:scale-110 duration-500 hover:bg-white w-32 h-12 cursor-pointer">See My Work</Button></Link>
                                <Link href="/contact"><Button className="border-2 border-[#1f1f1f] bg-black hover:bg-white/10 text-md w-32 h-12 duration-300 cursor-pointer">Contact Me</Button></Link>
                            </div>
                        </div>
                        <div>
                            <Image src="/images/coding.png" alt="phuchit" width={500} height={500} className="aspect-5/5 rounded-2xl border bg-transparent hidden md:block" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
