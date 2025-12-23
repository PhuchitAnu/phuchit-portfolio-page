import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import AnimatedSection from "../components/AnimatedSection";
import Link from "next/link";

export default function ProjectTop() {
    return (
        <div className="border-b-2 border-[#1f1f1f]" >
            <AnimatedSection>
                <div className="w-9/10 md:max-w-2xl lg:max-w-7xl mx-auto md:py-20 py-10 flex md:flex-col lg:flex-row justify-between md:gap-0 lg:gap-10">

                    <div className="flex flex-col md:w-full lg:w-180 gap-5">
                        <h1 className="text-4xl md:text-6xl font-bold">Building digitral experiences.</h1>
                        <p className="text-lg text-muted-foreground">Junior Full Stack Developer based in Bangkok, Thailand. Specializing in modern web application development using Next.js. and scalable server-side applications using Node.js.</p>
                        <div className="pt-4 flex gap-5 w-full items-center">
                            <Link href="#project-lists">
                                <Button className="flex py-5 gap-2 items-center bg-white text-black transition-all duration-300 hover:bg-white hover:text-black">
                                    <div className="flex gap-2 items-center px-2">
                                        <p>View Project</p>
                                        <FaArrowDown className="text-xs" />
                                    </div>
                                </Button>
                            </Link>
                            <Button className="flex py-5 gap-2 items-center bg-black text-white transition-all duration-300 hover:bg-black hover:text-white border border-white">
                                <div className="flex gap-2 items-center px-2">
                                    <p>Download CV</p>
                                    <FiDownload />
                                </div>
                            </Button>
                        </div>
                    </div>
                    <div>
                        <Image src="/images/coding1.png" alt="coding" width={400} height={400} className="md:hidden" />
                    </div>

                </div>
            </AnimatedSection>
        </div>
    )
}
