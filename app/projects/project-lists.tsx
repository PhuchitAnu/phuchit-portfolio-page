import Image from 'next/image'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import { LuChevronsLeftRight } from 'react-icons/lu'
import AnimatedSection from '../components/AnimatedSection'

export default function ProjectLists() {
    return (
        <div>
            <AnimatedSection>
                <div id="project-lists" className="max-w-7xl mx-auto py-20 flex flex-col gap-10">

                    {/* Project Section */}
                    <div className="border-b-2 border-[#1f1f1f] w-full pb-4">
                        <h1 className="text-3xl font-bold">Selected Work</h1>
                    </div>

                    <AnimatedSection>
                        <div className="flex gap-10">
                            <div className="w-1/2">
                                <Link target="_blank" href="https://bookstown.vercel.app/" >
                                    <Image src="/images/574_1x_shots_so.png" alt="project1" width={600} height={600} className="w-full h-full object-cover rounded-lg border-2 border-[#1f1f1f] hover:border-white hover:scale-102 transition-all duration-500" />
                                </Link>
                            </div>
                            <div className="w-1/2 flex flex-col gap-5">
                                <div className="flex items-center gap-2">
                                    <h1 className="text-muted-foreground text-xs">FULL STACK</h1>
                                    <div className="h-px w-8 bg-[#363636]"></div>
                                </div>
                                <h1 className="text-4xl font-bold">Bookstown Project</h1>
                                <p className="text-muted-foreground">Bookstown is an online bookstore web application designed to showcase books, organize them by category, and provide a simple purchasing experience.</p>
                                <div className="flex gap-2 text-md font-semibold">
                                    <p className="px-2 py-1 rounded-md text-muted-foreground bg-[#1f1f1f]">Next</p>
                                    <p className="px-2 py-1 rounded-md text-muted-foreground bg-[#1f1f1f]">Node</p>
                                    <p className="px-2 py-1 rounded-md text-muted-foreground bg-[#1f1f1f]">Express</p>
                                    <p className="px-2 py-1 rounded-md text-muted-foreground bg-[#1f1f1f]">Prisma</p>
                                    <p className="px-2 py-1 rounded-md text-muted-foreground bg-[#1f1f1f]">Postgres</p>
                                    <p className="px-2 py-1 rounded-md text-muted-foreground bg-[#1f1f1f]">Tailwind</p>
                                </div>
                                <div className="flex gap-10 pt-10">
                                    <Link target="_blank" href="https://bookstown.vercel.app/" className="hover:underline hover:underline-offset-2">
                                        <div className="flex gap-2 items-center font-semibold">
                                            <p>View Site</p>
                                            <FiArrowUpRight className="text-lg" />
                                        </div>
                                    </Link>
                                    <Link target="_blank" href="https://github.com/PhuchitAnu/bookstown" className="hover:underline hover:underline-offset-2 hover:decoration-muted-foreground">
                                        <div className="flex gap-2 items-center font-semibold text-muted-foreground">
                                            <LuChevronsLeftRight className="text-lg" />
                                            <p>Source Code</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="flex gap-10 pt-10">
                            <div className="w-1/2 flex flex-col gap-5">
                                <div className="flex items-center gap-2">
                                    <h1 className="text-muted-foreground text-xs">FULL STACK</h1>
                                    <div className="h-px w-8 bg-[#363636]"></div>
                                </div>
                                <h1 className="text-4xl font-bold">Movie Finder Project</h1>
                                <p className="text-muted-foreground">Movie Finder is a self-learning React web app that focuses on building a movie search UI with Tailwind CSS and logging search data using Appwrite.</p>
                                <div className="flex gap-2 text-md font-semibold">
                                    <p className="px-2 py-1 rounded-md text-muted-foreground bg-[#1f1f1f]">React</p>
                                    <p className="px-2 py-1 rounded-md text-muted-foreground bg-[#1f1f1f]">Node</p>
                                    <p className="px-2 py-1 rounded-md text-muted-foreground bg-[#1f1f1f]">Express</p>
                                    <p className="px-2 py-1 rounded-md text-muted-foreground bg-[#1f1f1f]">Appwrite</p>
                                    <p className="px-2 py-1 rounded-md text-muted-foreground bg-[#1f1f1f]">Tailwind</p>
                                </div>
                                <div className="flex gap-10 pt-10">
                                    <Link target="_blank" href="https://github.com/PhuchitAnu/moviefinder" className="hover:underline hover:underline-offset-2 hover:decoration-muted-foreground">
                                        <div className="flex gap-2 items-center font-semibold text-muted-foreground">
                                            <LuChevronsLeftRight className="text-lg" />
                                            <p>Source Code</p>
                                        </div>
                                    </Link>
                                    <Link target="_blank" href="hhttps://react-project-moviefinder.netlify.app/" className="hover:underline hover:underline-offset-2">
                                        <div className="flex gap-2 items-center font-semibold">
                                            <p>View Site</p>
                                            <FiArrowUpRight className="text-lg" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <Link target="_blank" href="https://react-project-moviefinder.netlify.app/" >
                                    <Image src="/images/144_1x_shots_so.png" alt="project1" width={600} height={600} className="w-full h-full object-cover rounded-lg border-2 border-[#1f1f1f] hover:border-white hover:scale-102 transition-all duration-500" />
                                </Link>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="flex gap-10 pt-10">
                            <div className="w-1/2">
                                <Link target="_blank" href="https://fullstack-portfolio-one-phuchit.vercel.app/" >
                                    <Image src="/images/630_1x_shots_so.png" alt="project1" width={600} height={600} className="w-full h-full object-cover rounded-lg border-2 border-[#1f1f1f] hover:border-white hover:scale-102 transition-all duration-500" />
                                </Link>
                            </div>
                            <div className="w-1/2 flex flex-col gap-5">
                                <div className="flex items-center gap-2">
                                    <h1 className="text-muted-foreground text-xs">FULL STACK</h1>
                                    <div className="h-px w-8 bg-[#363636]"></div>
                                </div>
                                <h1 className="text-4xl font-bold">Blog Full Stack Project</h1>
                                <p className="text-muted-foreground">A blog-style built with Next.js application featuring authenticated commenting using Better Auth with GitHub and Google, backend by Prisma and PostgreSQL.</p>
                                <div className="flex gap-2 text-md font-semibold">
                                    <p className="px-2 py-1 rounded-md text-muted-foreground bg-[#1f1f1f]">Next</p>
                                    <p className="px-2 py-1 rounded-md text-muted-foreground bg-[#1f1f1f]">Prisma</p>
                                    <p className="px-2 py-1 rounded-md text-muted-foreground bg-[#1f1f1f]">Postgres</p>
                                    <p className="px-2 py-1 rounded-md text-muted-foreground bg-[#1f1f1f]">Tailwind</p>
                                </div>
                                <div className="flex gap-10 pt-10">
                                    <Link target="_blank" href="https://fullstack-portfolio-one-phuchit.vercel.app/" className="hover:underline hover:underline-offset-2">
                                        <div className="flex gap-2 items-center font-semibold">
                                            <p>View Site</p>
                                            <FiArrowUpRight className="text-lg" />
                                        </div>
                                    </Link>
                                    <Link target="_blank" href="https://github.com/PhuchitAnu/fullstack-portfolio" className="hover:underline hover:underline-offset-2 hover:decoration-muted-foreground">
                                        <div className="flex gap-2 items-center font-semibold text-muted-foreground">
                                            <LuChevronsLeftRight className="text-lg" />
                                            <p>Source Code</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* <AnimatedSection>
                        
                    </AnimatedSection>   */}

                </div>
            </AnimatedSection>
        </div >
    )
}
