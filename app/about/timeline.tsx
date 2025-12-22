import React from 'react'
import { MdOutlineHistoryEdu } from 'react-icons/md'

export default function Timeline() {
    return (
        <div className="flex flex-col gap-6 pt-10">
            <div className="flex gap-2 items-center">
                <MdOutlineHistoryEdu className="text-2xl" />
                <h1 className="text-2xl font-bold">Timeline</h1>
            </div>
            <div className="relative border-l border-border-color ml-3 space-y-8 pb-4">
                <div className="relative pl-8 group">
                    <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-muted-foreground group-hover:bg-white group-hover:scale-120 transition-all"></div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                        <h4 className="text-text-main text-lg font-bold">Full Stack Portfolio Projects</h4>
                        <span className="text-muted-foreground text-sm font-mono">2025 - Present</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">Self-directed / Personal Projects</p>
                    <p className="text-muted-foreground text-base font-light">
                        Actively developing real-world full-stack web applications for portfolio, focusing on modern frameworks, clean architecture, and production-ready practices.
                    </p>
                </div>
                <div className="relative pl-8 group">
                    <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-muted-foreground group-hover:bg-white group-hover:scale-120 transition-all"></div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                        <h4 className="text-text-main text-lg font-bold">Full Stack Web Development</h4>
                        <span className="text-muted-foreground text-sm font-mono">2024 - 2025</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">Self-Learning</p>
                    <p className="text-muted-foreground text-base font-light">
                        Self-taught full stack web developer with a focus on Next.js, React, Node.js, and modern web technologies.
                    </p>
                </div>
                <div className="relative pl-8 group">
                    <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-muted-foreground group-hover:bg-white group-hover:scale-120 transition-all"></div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                        <h4 className="text-text-main text-lg font-bold">Instrumentation and Electrical Energy Engineering</h4>
                        <span className="text-muted-foreground text-sm font-mono">2021 - 2025</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">King Mongkut&apos;s University of Technology North Bangkok</p>
                    <p className="text-muted-foreground text-base font-light">
                        Developed strong analytical and problem-solving skills through engineering coursework, while applying programming and system design concepts to real-world technical projects.
                    </p>
                </div>
            </div>
        </div>
    )
}
