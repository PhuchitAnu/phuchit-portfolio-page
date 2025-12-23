'use client'

import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { MenuIcon } from 'lucide-react'
import { RxCross2 } from "react-icons/rx";
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import Link from 'next/link'

export default function HamburgerBar() {
    return (
        <div className="md:hidden flex items-center">
            <Drawer direction='right'>
                <DrawerTrigger>
                    <MenuIcon />
                </DrawerTrigger>
                <DrawerContent className='bg-[#1f1f1f] border-[#1f1f1f] outline-none text-white'>
                    <div className='p-4 border-b border-b-[#888888]'>
                        <div className='flex justify-between items-center'>
                            <DrawerTitle className='text-white'>Navigation Menu</DrawerTitle>
                            <DrawerClose className='text-white'>
                                <RxCross2 />
                            </DrawerClose>
                        </div>
                        <DrawerDescription className='text-white'>
                            <VisuallyHidden>
                                Main site navigation links
                            </VisuallyHidden>
                        </DrawerDescription>
                    </div>
                    <DrawerHeader className='gap-2'>
                        <Link href="/" className='hover:text-white duration-300'>
                            <DrawerClose>Home</DrawerClose>
                        </Link>
                        <Link href="/about" className='hover:text-white duration-300'>
                            <DrawerClose>About</DrawerClose>
                        </Link>
                        <Link href="/projects" className='hover:text-white duration-300'>
                            <DrawerClose>Projects</DrawerClose>
                        </Link>
                        <Link href="/contact" className='hover:text-white duration-300'>
                            <DrawerClose>Contact</DrawerClose>
                        </Link>

                    </DrawerHeader>
                    <DrawerFooter>

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}
