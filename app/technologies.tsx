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
                <div className="max-w-7xl mx-auto py-10">
                    <p className="text-muted-foreground pb-10">TECHNOLOGIES I USE</p>
                    <div className="flex w-full justify-between">
                        <Card className="w-76 h-40 bg-[#050505] border-2 border-[#1f1f1f] hover:border-white transition-colors duration-300 ">
                            <CardHeader>
                                <CardTitle className="flex gap-2">
                                    <RiNextjsFill className="text-white w-12 h-12" />
                                    <FaReact className="text-white w-12 h-12" />
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-white">
                                <p>Next.js, React</p>
                            </CardContent>
                        </Card>

                        <Card className="w-76 h-40 bg-[#050505] border-2 border-[#1f1f1f] hover:border-white transition-colors duration-300">
                            <CardHeader>
                                <CardTitle className="flex gap-2">
                                    <FaNode className="text-white w-12 h-12" />
                                    <SiExpress className="text-white w-12 h-12" />
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-white">
                                <p>Node.js, Express</p>
                            </CardContent>
                        </Card>

                        <Card className="w-76 h-40 bg-[#050505] border-2 border-[#1f1f1f] hover:border-white transition-colors duration-300">
                            <CardHeader>
                                <CardTitle className="flex gap-2">
                                    <SiMongodb className="text-white w-12 h-12" />
                                    <BiLogoPostgresql className="text-white w-12 h-12" />
                                    <SiPrisma className="text-white w-12 h-12" />
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-white">
                                <p>MongoDB, PostgresSQL, Prisma</p>
                            </CardContent>
                        </Card>

                        <Card className="w-76 h-40 bg-[#050505] border-2 border-[#1f1f1f] hover:border-white transition-colors duration-300">
                            <CardHeader>
                                <CardTitle className="flex gap-2">
                                    <RiTailwindCssFill className="text-white w-12 h-12" />
                                    <TbBrandFramerMotion className="text-white w-12 h-12" />
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-white">
                                <p>Tailwind, shadcn/ui, Motion</p>
                            </CardContent>
                        </Card>

                    </div>
                </div>
            </div>
        </>
    )
}
