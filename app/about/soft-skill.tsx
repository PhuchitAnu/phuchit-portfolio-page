import { Card, CardContent } from "@/components/ui/card";
import { HiComputerDesktop } from "react-icons/hi2";

export default function SoftSkill() {
    return (
        <div className="flex flex-col gap-6 pt-10">
            <div className="flex gap-2 items-center">
                <HiComputerDesktop className="text-2xl" />
                <h1 className="text-2xl font-bold">Soft Skills</h1>
            </div>
            <div>
                <Card className="bg-[#1f1f1f] border border-[#444444] hover:border-white transition-all duration-250 gap-2 w-full">
                    <CardContent className="flex flex-col gap-6 text-white">
                        <p>Responsibility & Time Management - <span className="text-muted-foreground">Consistently met deadlines while handling multiple tasks effectively.</span></p>
                        <p>Self-Learner & Continuous Improvement - <span className="text-muted-foreground">Self-taught HTML, CSS, and JavaScript through hands-on practice and online resources.</span></p>
                        <p>Problem-Solving & Analytical Thinking - <span className="text-muted-foreground">Troubleshot issues and optimized workflows using logical, structured approaches.</span></p>
                        <p>Team Collaboration & Adaptability - <span className="text-muted-foreground">Worked effectively in teams, adapting to different working styles and goals.</span></p>
                        <p>Attention to Detail - <span className="text-muted-foreground">Delivered accurate, clean, and well-structured work with strong attention to quality.</span></p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
