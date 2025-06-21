

const projects = [
    {
        id:1,
        title: "Book My Show Clone",
        description: "A frontend clone of BookMyShow made using HTML, CSS, and JavaScript, featuring movie search, cinema listings, and ticket booking UI.",
        image: "/projects/project1.png",
        tags: ["HTML" , "CSS" , "JavaScript"],
        demoUrl: "#",
        githubUrl: "#",
        
    }
]

export const Projects = () => {
    return (
        <section id="projects" className="py-24 px-4  relative">
            <div className="container mx-auto max-w-5xl">
                <h2 
                className="text-3xl md:text-4xl text-center font-bold mb-4"
                >
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto ">
                    Here are some of my recent Projects.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((projects,key) => (
                        <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48  overflow-hidden">
                                <img src={projects.image} alt={projects.title} className="w-full h-full object-cover transition-transform duration-500  group-hover:scale-110"/>

                            </div>

                            <div className="p-6 ">
                                <div className="flex flex-wrap mb-4 gap-2">
                                    {projects.tags.map((tag) => (
                                        <span className="px-2 py-1 text-[15px] gap-x-3 font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}</span>

                                    ))}

                                </div>
                            </div>


                        </div>
                    ))}
                    
                </div>

            </div>
        </section>
        
    )
}