import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Project() {
    return (
        <>
            {/* Projects Section */}
            < div className="border-[#1f1f1f]" >
                <div id="projects" className="w-9/10 md:max-w-2xl lg:max-w-7xl mx-auto py-20">
                    <div className="flex justify-between">
                        <div className="md:w-7/10 flex flex-col gap-4">
                            <h1 className="text-3xl font-bold">Selected Work </h1>
                            <p className="text-muted-foreground">A glimpse into some of the projects I&apos;ve been working on recently</p>
                        </div>
                        <div className="items-end md:flex hidden">
                            <Link href="/projects" className="flex gap-2 items-center hover:underline hover:underline-offset-2">
                                <p className="text-white">See All Projects</p>
                                <FaArrowRight className="text-white" />
                            </Link>
                        </div>
                    </div>

                    <div className="pt-10 grid md:grid-cols-2 grid-cols-1 place-self-center gap-10">

                        {/* Bookstown */}
                        <Card className=" md:w-80 lg:w-125 xl:w-155 bg-black border-0 p-0 gap-2">
                            <Link target="_blank" href="https://bookstown.vercel.app/">
                                <CardHeader className="p-0">
                                    <CardTitle className="flex gap-2">
                                        <Image src="/images/574_1x_shots_so.png" alt="bookstown" width={620} height={349} className="border-2 border-[#1f1f1f] rounded-lg hover:border-white hover:scale-102 transition-all duration-500" />
                                    </CardTitle>
                                </CardHeader>
                            </Link>
                            <CardContent className="text-white p-0">
                                <Link target="_blank" href="https://bookstown.vercel.app/" className="text-sm flex gap-2 pb-2 items-center">
                                    <h1 className="text-2xl font-bold">Bookstown Project</h1>
                                    <FaArrowUpRightFromSquare className="hover:scale-110 transition-all duration-100" />
                                </Link>
                                <p className="text-muted-foreground pb-2">
                                    Bookstown is an online bookstore web application designed to showcase books, organize them by category, and provide a simple purchasing experience.
                                </p>
                                <div className="flex gap-2 flex-wrap text-md font-semibold">
                                    <p className="px-2 py-1 rounded-md text-muted-foreground bg-[#1f1f1f]">Next</p>
                                    <p className="px-2 py-1 rounded-md text-muted-foreground bg-[#1f1f1f]">Node</p>
                                    <p className="px-2 py-1 rounded-md text-muted-foreground bg-[#1f1f1f]">Express</p>
                                    <p className="px-2 py-1 rounded-md text-muted-foreground bg-[#1f1f1f]">Prisma</p>
                                    <p className="px-2 py-1 rounded-md text-muted-foreground bg-[#1f1f1f]">Postgres</p>
                                    <p className="px-2 py-1 rounded-md text-muted-foreground bg-[#1f1f1f]">Tailwind</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Movie Finder */}
                        <Card className="md:w-80 lg:w-125 xl:w-155 bg-black border-0 p-0 gap-2">
                            <Link target="_blank" href="https://react-project-moviefinder.netlify.app/">
                                <CardHeader className="p-0">
                                    <CardTitle className="flex gap-2">
                                        <Image src="/images/144_1x_shots_so.png" alt="bookstown" width={620} height={349} className="border-2 border-[#1f1f1f] rounded-lg hover:border-white hover:scale-102 transition-all duration-500" />
                                    </CardTitle>
                                </CardHeader>
                            </Link>
                            <CardContent className="text-white p-0">
                                <Link target="_blank" href="https://react-project-moviefinder.netlify.app/" className="text-sm flex gap-2  pb-2 items-center">
                                    <h1 className="text-2xl font-bold">Movie Finder Project</h1>
                                    <FaArrowUpRightFromSquare className="hover:scale-110 transition-all duration-100" />
                                </Link>
                                <p className="text-muted-foreground pb-2">
                                    Movie Finder is a self-learning React web app that focuses on building a movie search UI with Tailwind CSS and logging search data using Appwrite.
                                </p>
                                <div className="flex gap-2 flex-wrap text-md font-semibold">
                                    <p className="px-2 py-1 rounded-md text-muted-foreground bg-[#1f1f1f]">React</p>
                                    <p className="px-2 py-1 rounded-md text-muted-foreground bg-[#1f1f1f]">Node</p>
                                    <p className="px-2 py-1 rounded-md text-muted-foreground bg-[#1f1f1f]">Express</p>
                                    <p className="px-2 py-1 rounded-md text-muted-foreground bg-[#1f1f1f]">Appwrite</p>
                                    <p className="px-2 py-1 rounded-md text-muted-foreground bg-[#1f1f1f]">Tailwind</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Blog Fullstack */}
                        {/* <Card className="w-155 bg-black border-0 p-0 gap-2">
                            <Link target="_blank" href="https://fullstack-portfolio-one-phuchit.vercel.app/">
                                <CardHeader className="p-0">
                                    <CardTitle className="flex gap-2">
                                        <Image src="/images/630_1x_shots_so.png" alt="bookstown" width={620} height={349} className="border-2 border-[#1f1f1f] rounded-lg hover:border-white hover:scale-102 transition-all duration-500" />
                                    </CardTitle>
                                </CardHeader>
                            </Link>
                            <CardContent className="text-white p-0">
                                <Link target="_blank" href="https://fullstack-portfolio-one-phuchit.vercel.app/" className="text-sm flex gap-2  pb-2 items-center">
                                    <h1 className="text-2xl font-bold">Blog Full-Stack Project</h1>
                                    <FaArrowUpRightFromSquare className="hover:scale-110 transition-all duration-100" />
                                </Link>
                                <p className="text-muted-foreground pb-2">
                                    A blog-style built with Next.js application featuring authenticated commenting using Better Auth with GitHub and Google, backend by Prisma and PostgreSQL.
                                </p>
                                <div className="flex gap-2 text-md font-semibold">
                                    <p className="px-2 py-1 rounded-md text-muted-foreground bg-[#1f1f1f]">Next</p>
                                    <p className="px-2 py-1 rounded-md text-muted-foreground bg-[#1f1f1f]">Prisma</p>
                                    <p className="px-2 py-1 rounded-md text-muted-foreground bg-[#1f1f1f]">Postgres</p>
                                    <p className="px-2 py-1 rounded-md text-muted-foreground bg-[#1f1f1f]">Tailwind</p>
                                </div>
                            </CardContent>
                        </Card> */}
                    </div>

                    <div className="md:hidden flex pt-10 items-center justify-center">
                        <Link href="/projects" className="flex gap-2 items-center hover:underline hover:underline-offset-2">
                            <p className="text-white">See All Projects</p>
                            <FaArrowRight className="text-white" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
