import { ExternalLink } from "lucide-react"


const projects = [
    {
        id: 1,
        title: "Employee Management System",
        description: "Build an EMS with a React + Bootstrap frontend and a Spring Boot (Java) backend.",
        image: "https://1.bp.blogspot.com/-JKmoZC3pjEA/YMj2XHISR8I/AAAAAAAADg8/-iNhrDxaGSUScdM_jf8P9p4wCl32geFBwCNcBGAsYHQ/s16000/Employee%2BManagement%2BSystem%2BProject.webp",
        url: "#",
        tags: ["Recat js", "bootStrap css", "Javascript","java","Spring boot","Rest Api"]
    },
    {
        id: 2,
        title: "Tic-Tac-Toe-Game",
        description: "create Tic-Tac-Toe-Game using html, Css and javaScript  ",
        image: "https://tse4.mm.bing.net/th/id/OIP.RdSXjB9aOLShJ41PWVwwuQHaFc?pid=Api&P=0&h=180",
        url: "#",
        tags: ["Html", "Css", "Javascript"]
    },
    {
        id: 3,
        title: "Lumpy Skill disease",
        description: "create Lumpy Skill disease using python,TenserFlow, CNN ",
        image: "https://images.drlogy.com/assets/uploads/img/admin/health_blog/specially%20in%20animals%20that%20have%20not%20previously%20been%20exposed%20to%20the%20virus..webp",
        url: "#",
        tags: ["Python", "TensorFlow", "CNN","Keras","MongoDb","Flask"]
    }
]
export const Project = () => {
    return <section id="projects" className="py-24 px-2 relative" >
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-secondary">
                Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-center text-secondary mb-12 max-w-2xl mx-auto">
                There are some projects Each project was created with attention to detail and performance
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project,key)=>(
                    <div  key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-45 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>

                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-3 mb-4">
                                {project.tags.map((tag)=>(
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-1 text-secondary">{project.title}</h3>
                        <p className="text-secondary text-sm mb-4">{project.description}</p>
                        <div className="flex space-x-3">
                            <a target="_blank" href={project.url} className="text-primary px-2 py-2 transition-colors duration-300"><ExternalLink /></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}