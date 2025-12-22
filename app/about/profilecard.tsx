import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa6'
import { FiDownload } from 'react-icons/fi'

export default function ProfileCard() {
    return (
        <div>
            <Card className="w-100 h-160 bg-[#1f1f1f] border-2 border-[#444444]">
                <CardHeader className="flex flex-col gap-6 items-center">
                    <CardTitle>
                        <Image src="/images/self-photo1.png" alt="self" width={175} height={175} className="border-2 border-[#444444] rounded-full object-cover hover:border-white hover:scale-102 transition-all duration-500" />
                    </CardTitle>
                    <CardDescription className="flex flex-col gap-2 items-center text-white">
                        <h1 className="text-2xl font-bold">Phuchit Anuchitanukul</h1>
                        <p>Junior Full Stack Developer</p>
                        <p className="flex gap-2 items-center"><FaMapMarkerAlt />Bangkok, Thailand</p>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-8 items-center pb-8 border-b-2 border-[#444444]">
                        <p className="text-center text-muted-foreground">Building Clean, Responsive, and User-Friendly Interfaces, Accessible Web Experiences. Obsesses with code quality and modern design patterns.</p>
                        <div className="flex gap-6 items-center justify-center text-4xl text-white ">
                            <Link target="_blank" href="https://github.com/PhuchitAnu" className="hover:scale-105 transition-all duration-100">
                                <FaGithub />
                            </Link>
                            <Link target="_blank" href="https://www.facebook.com/phuchit.anuchitankul/" className="hover:scale-105 transition-all duration-100">
                                <FaFacebook />
                            </Link>
                            <Link target="_blank" href="https://www.instagram.com/nutt__tt/" className="hover:scale-110 transition-all duration-100">
                                <FaInstagram />
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center pt-6">
                        <Button className="flex gap-2 items-center w-full bg-white text-black hover:scale-105 transition-all duration-300 hover:bg-white hover:text-black">
                            <FiDownload />
                            <h1>Download CV</h1>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
