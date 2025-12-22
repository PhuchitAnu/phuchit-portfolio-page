import Project from "./project";
import Technologies from "./technologies";
import Hero from "./hero";
import AnimatedSection from "./components/AnimatedSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">

      <AnimatedSection>
        <Hero />
      </AnimatedSection>

      <AnimatedSection>
        <Technologies />
      </AnimatedSection>

      <AnimatedSection>
        <Project />
      </AnimatedSection>

    </div >
  );
}
