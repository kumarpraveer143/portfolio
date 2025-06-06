
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SiX, SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
const Navbar = ({ className }: { className?: string }) => {

    const socials = [
        {
            link: "https://www.linkedin.com/in/praveerdeveloper/",
            label: "LinkedIN",
            Icon: SiLinkedin,
        },
        {
            link: "https://github.com/kumarpraveer143",
            label: "GitHub",
            Icon: SiGithub,
        },
        {
            link: "https://www.instagram.com/kumarpraveeer",
            label: "Instagram",
            Icon: SiInstagram,
        },
        {
            link: "https://x.com/kumarpraveer3",
            label: "X",
            Icon: SiX,
        }

    ]
    return (
        <nav className={cn("py-10 flex justify-between items-center animate-move-down", className)}>
            <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2"> Praveer 🧿</h1>
            <div className="flex items-center gap-5">
                {socials.map((elem, index) => {
                    const Icon = elem.Icon;
                    return <Link href={elem.link} key={index} aria-label={elem.label} >
                        <Icon className="w-5 h-5 hover:scale-125 transition-all" />
                    </Link>
                })}
            </div>
        </nav>
    )
}

export default Navbar