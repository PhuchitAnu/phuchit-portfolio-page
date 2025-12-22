import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RiToolsFill } from "react-icons/ri";

export default function Tools() {
    return (
        <div className="flex flex-col gap-4 pt-10">
            <div className="flex gap-2 items-center">
                <RiToolsFill className="text-2xl" />
                <h1 className="text-2xl font-bold">My Toolkit</h1>
            </div>
            <div className="flex gap-6">
                <div className="flex gap-4">
                    <Card className="bg-[#1f1f1f] border border-[#444444] hover:border-white transition-all duration-250 gap-2">
                        <CardHeader>
                            <CardTitle className="pb-2 border-b-2 border-[#444444] text-sm text-muted-foreground">FRONTEND</CardTitle>
                        </CardHeader>
                        <CardContent className="text-white">
                            <div className="flex flex-wrap gap-2 text-sm font-semibold">
                                <p className="px-4 py-2 rounded-sm bg-[#353535] border border-[#444444] cursor-pointer hover:bg-white hover:text-black transition-all duration-250">Next.js</p>
                                <p className="px-4 py-2 rounded-sm bg-[#353535] border border-[#444444] cursor-pointer hover:bg-white hover:text-black transition-all duration-250">React</p>
                                <p className="px-4 py-2 rounded-sm bg-[#353535] border border-[#444444] cursor-pointer hover:bg-white hover:text-black transition-all duration-250">Typescript</p>
                                <p className="px-4 py-2 rounded-sm bg-[#353535] border border-[#444444] cursor-pointer hover:bg-white hover:text-black transition-all duration-250">Tailwind</p>
                                <p className="px-4 py-2 rounded-sm bg-[#353535] border border-[#444444] cursor-pointer hover:bg-white hover:text-black transition-all duration-250">Framer Motion</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex gap-4">
                    <Card className="bg-[#1f1f1f] border border-[#444444] hover:border-white transition-all duration-250 gap-2">
                        <CardHeader>
                            <CardTitle className="pb-2 border-b-2 border-[#444444] text-sm text-muted-foreground">BACKEND</CardTitle>
                        </CardHeader>
                        <CardContent className="text-white">
                            <div className="flex flex-wrap gap-2 text-sm font-semibold">
                                <p className="px-4 py-2 rounded-sm bg-[#353535] border border-[#444444] cursor-pointer hover:bg-white hover:text-black transition-all duration-250">Node.js</p>
                                <p className="px-4 py-2 rounded-sm bg-[#353535] border border-[#444444] cursor-pointer hover:bg-white hover:text-black transition-all duration-250">Express</p>
                                <p className="px-4 py-2 rounded-sm bg-[#353535] border border-[#444444] cursor-pointer hover:bg-white hover:text-black transition-all duration-250">MongoDB</p>
                                <p className="px-4 py-2 rounded-sm bg-[#353535] border border-[#444444] cursor-pointer hover:bg-white hover:text-black transition-all duration-250">PostgreSQL</p>
                                <p className="px-4 py-2 rounded-sm bg-[#353535] border border-[#444444] cursor-pointer hover:bg-white hover:text-black transition-all duration-250">Prisma</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="flex gap-4">
                <Card className="bg-[#1f1f1f] border border-[#444444] hover:border-white transition-all duration-250 gap-2 w-full">
                    <CardHeader>
                        <CardTitle className="pb-2 border-b-2 border-[#444444] text-sm text-muted-foreground">TOOLS & SKILLS</CardTitle>
                    </CardHeader>
                    <CardContent className="text-white">
                        <div className="flex flex-wrap gap-2 text-sm font-semibold">
                            <p className="px-4 py-2 rounded-sm bg-[#353535] border border-[#444444] cursor-pointer hover:bg-white hover:text-black transition-all duration-250">Git & GitHub</p>
                            <p className="px-4 py-2 rounded-sm bg-[#353535] border border-[#444444] cursor-pointer hover:bg-white hover:text-black transition-all duration-250">Postman</p>
                            <p className="px-4 py-2 rounded-sm bg-[#353535] border border-[#444444] cursor-pointer hover:bg-white hover:text-black transition-all duration-250">Vercel</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
