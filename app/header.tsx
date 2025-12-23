import { SquareTerminal } from 'lucide-react'
import Link from 'next/link'
import HamburgerBar from './components/HamburgerBar'

export default function Header() {
    return (
        <div className="bg-black text-white text-lg py-4 border-b-2 border-[#1f1f1f]">
            <div className="w-9/10 md:max-w-2xl lg:max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/">
                    <div className="flex gap-2 items-center">
                        <SquareTerminal size={32} />
                        <h1 className='font-bold text-2xl'>Phuchit Portfolio</h1>
                    </div>
                </Link>

                <nav className="hidden md:flex text-muted-foreground md:gap-4">
                    <Link href="/" className='hover:text-white duration-300'>Home</Link>
                    <Link href="/about" className='hover:text-white duration-300'>About</Link>
                    <Link href="/projects" className='hover:text-white duration-300'>Projects</Link>
                    <Link href="/contact" className='hover:text-white duration-300'>Contact</Link>
                </nav>

                <HamburgerBar />
            </div>
        </div>
    )
}
