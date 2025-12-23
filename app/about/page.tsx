import AnimatedSection from "../components/AnimatedSection";
import Timeline from "./timeline";
import SoftSkill from "./soft-skill";
import Tools from "./tools";
import AboutMe from "./aboutme";
import ProfileCard from "./profilecard";

export default function Aboutme() {
    return (
        <div className="min-h-screen bg-black text-white">

            < div className="border-[#1f1f1f]" >
                <div id="about" className="w-9/10 md:max-w-2xl lg:max-w-7xl mx-auto py-20 flex flex-col lg:flex-row gap-10">
                    {/* Left Side Profile Card */}
                    <AnimatedSection>
                        <ProfileCard />
                    </AnimatedSection>

                    {/* Right Side About Me */}
                    <div className="flex flex-col text-lg pt-10 md:pt-0">
                        <AnimatedSection>
                            <AboutMe />
                        </AnimatedSection>

                        <AnimatedSection>
                            <Tools />
                        </AnimatedSection>

                        <AnimatedSection>
                            <SoftSkill />
                        </AnimatedSection>

                        <AnimatedSection>
                            <Timeline />
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </div>
    )
}