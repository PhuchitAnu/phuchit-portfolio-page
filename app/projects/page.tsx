import ProjectLists from "./project-lists";
import ProjectTop from "./project-top";

export default function Projects() {
    return (
        <div className="min-h-screen bg-black text-white">

            <ProjectTop />

            <ProjectLists />

        </div>
    )
}
