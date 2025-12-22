import { RiArrowDropRightLine } from 'react-icons/ri'

export default function AboutMe() {
    return (
        <div>
            <div className="flex items-center">
                <RiArrowDropRightLine className="text-3xl" />
                <h1 className="text-3xl font-bold">About Me</h1>
            </div>
            <p className="text-muted-foreground pt-6">Hello, I&apos;m Phuchit Anuchitanukul, I am a motivated Full Stack Developer with a strong foundation in web technologies and a passion for building practical, user-focused applications. I enjoy turning ideas into functional digital products and continuously improving my skills through hands-on projects and real-world problem solving.</p>
            <p className="text-muted-foreground pt-4">My background in engineering has strengthened my analytical thinking, attention to detail, and structured approach to development. I have experience working with modern web technologies such as JavaScript, React, Next.js, and backend systems, and I enjoy learning new tools and best practices to create clean, maintainable, and scalable solutions.</p>
            <p className="text-muted-foreground pt-4">I am currently focused on developing real-world projects for my portfolio while preparing for my first professional role as a developer. I value responsibility, teamwork, and continuous learning, and I am eager to contribute to a team where I can grow, learn, and deliver meaningful results.</p>
        </div>
    )
}
