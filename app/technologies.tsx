import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { BiLogoPostgresql } from 'react-icons/bi'
import { FaNode, FaReact } from 'react-icons/fa'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiExpress, SiMongodb, SiPrisma } from 'react-icons/si'
import { TbBrandFramerMotion } from 'react-icons/tb'

export default function Technologies() {
    return (
        <>
            {/* Technologies Section */}
            <div className="border-b-2 border-[#1f1f1f]">
                <div className="w-9/10 md:max-w-2xl lg:max-w-7xl mx-auto md:py-10 py-8">
                    <p className="text-muted-foreground md:pb-10 pb-8">TECHNOLOGIES I USE</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full justify-between">

                        <Card className="md:w-38 lg:w-52 xl:w-78 h-40 bg-[#050505] border-2 border-[#1f1f1f] hover:border-white transition-colors duration-300 ">
                            <CardHeader>
                                <CardTitle className="flex gap-2">
                                    <RiNextjsFill className="text-white
                                     md:w-10 md:h-10 lg:w-12 lg:h-12" />
                                    <FaReact className="text-white
                                     md:w-10 md:h-10 lg:w-12 lg:h-12" />
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-white lg:text-base md:text-sm">
                                <p>Next.js, React</p>
                            </CardContent>
                        </Card>

                        <Card className="md:w-38 lg:w-52 xl:w-78 h-40 bg-[#050505] border-2 border-[#1f1f1f] hover:border-white transition-colors duration-300">
                            <CardHeader>
                                <CardTitle className="flex gap-2">
                                    <FaNode className="text-white
                                    md:w-10 md:h-10 lg:w-12 lg:h-12" />
                                    <SiExpress className="text-white
                                    md:w-10 md:h-10 lg:w-12 lg:h-12" />
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-white lg:text-base md:text-sm">
                                <p>Node.js, Express</p>
                            </CardContent>
                        </Card>

                        <Card className="md:w-38 lg:w-52 xl:w-78 h-40 bg-[#050505] border-2 border-[#1f1f1f] hover:border-white transition-colors duration-300">
                            <CardHeader>
                                <CardTitle className="flex gap-2">
                                    <SiMongodb className="text-white
                                    md:w-8 md:h-8 lg:w-12 lg:h-12" />
                                    <BiLogoPostgresql className="text-white
                                    md:w-8 md:h-8 lg:w-12 lg:h-12" />
                                    <SiPrisma className="text-white
                                    md:w-8 md:h-8 lg:w-12 lg:h-12" />
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-white lg:text-base md:text-sm">
                                <p>MongoDB, PostgreSQL, Prisma</p>
                            </CardContent>
                        </Card>

                        <Card className="md:w-38 lg:w-52 xl:w-78 h-40 bg-[#050505] border-2 border-[#1f1f1f] hover:border-white transition-colors duration-300">
                            <CardHeader>
                                <CardTitle className="flex gap-2">
                                    <RiTailwindCssFill className="text-white md:w-10 md:h-10 lg:w-12 lg:h-12" />
                                    <TbBrandFramerMotion className="text-white md:w-10 md:h-10 lg:w-12 lg:h-12" />
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-white lg:text-base md:text-sm">
                                <p>Tailwind, Motion</p>
                            </CardContent>
                        </Card>

                    </div>
                </div>
            </div>
        </>
    )
}
