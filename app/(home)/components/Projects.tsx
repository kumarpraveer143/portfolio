import Link from "next/link"
import Title from "./Title"
import { cn } from "@/lib/utils"
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover"
import { SiReact, SiJavascript, SiTypescript, SiPostgresql, SiMongodb, SiPrisma, SiExpress, SiTailwindcss, SiHtml5, SiCss3, SiRedux, SiSocketdotio } from "react-icons/si";
import { TbBrandNextjs, TbBrandNodejs } from "react-icons/tb";


const Projects = () => {

  const projects = [
    {
      title: "Renters Application",
      tech: [SiJavascript, SiReact, TbBrandNodejs, SiMongodb, SiExpress, SiTailwindcss],
      Link: "https://github.com/kumarpraveer143/renters",
      cover: "/renter.jpg",
      background: "bg-indigo-500"
    },
    {
      title: "Blogging Application",
      tech: [SiTypescript, SiPostgresql, SiPrisma, TbBrandNodejs, SiExpress,],
      Link: "https://blogging-application-ten.vercel.app/",
      cover: "/BlogingApp.png",
      background: "bg-pink-500"
    },
    {
      title: "Storefleet Backend",
      tech: [SiJavascript, SiReact, TbBrandNodejs, SiMongodb, SiExpress, SiTailwindcss,],
      Link: "https://github.com/kumarpraveer143/store-fleet",
      cover: "/storefleet.png",
      background: "bg-pink-500"
    },
    {
      title: "Chatting Room",
      tech: [SiJavascript, TbBrandNodejs, SiExpress, SiSocketdotio],
      Link: "https://kumarpraveer.github.io/chatRoom/",
      cover: "/chattingRoom.png",
      background: "bg-pink-500"
    },

  ]
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title text="Projects 🎨" className="flex flex-col items-center justify-center rotate-6" />

      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((elem, index) => {
          return <Link href={elem.Link} key={index}>
            <div className={cn("p-5 rounded-md", elem.background)}>

              <DirectionAwareHover
                imageUrl={elem.cover}
                className="w-full space-y-5 cursor-pointer"
              >

                <div className="space-y-5">
                  <h1 className="text-2xl font-bold">{elem.title}</h1>
                  <div className="flex items-center gap-5">
                    {elem.tech.map((Icon, index) => {
                      return <Icon className="w-8 h-8" key={index} />
                    })}
                  </div>
                </div>
              </DirectionAwareHover>
            </div>
          </Link>
        })}
      </div>

    </div>
  )
}

export default Projects