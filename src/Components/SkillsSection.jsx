import { useState } from "react"


const skills = [
    // Frontend
    {name: "HTML/CSS", level: "90%", category: "Frontend"},
    {name: "Javascript", level: "75%", category: "Frontend"},
    {name: "React", level: "70%", category: "Frontend"},
    {name: "Tailwind CSS", level: "90%", category: "Frontend"},

    // Backend
    {name: "Node.js", level: "60%", category: "Backend"},
    {name: "Express.js", level: "60%", category: "Backend"},
    {name: "MongoDB", level: "60%", category: "Backend"},

    // Languages
    {name: "C", level: "95%", category: "Programming"},
    {name: "C++", level: "80%", category: "Programming"},   
    {name: "Python", level: "70%", category: "Programming"},
   

    // Tools
    {name: "Git/Github", level: "80%", category: "Tools"},
    {name: "VS Code", level: "80%", category: "Tools"},
    {name: "Vercel", level: "70%", category: "Tools"},
    {name: "Postman", level: "70%", category: "Tools"}, 

]

const categories = ["all" , "frontend","backend","programming" , "tools"]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all")

    const filteredSkills = skills.filter(
        (skills) => activeCategory==="all" || skills.category.toLowerCase() === activeCategory
    )
    return (
        <section 
        id="skills" 
        className="py-24 px-4 relative bg-secondary/20"
        >
            <div className="container mx-auto max-w-5xl ">
                <h2 className="text-3xl md:text-4xl mb-12 font-bold text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4">
                    {categories.map((category,key) => (
                        <button 
                        key={key} 
                        onClick={() => setActiveCategory(category)}
                        className={`px-5 py-2 rounded-full transition-colors duration-300 capitalize 
                        ${activeCategory === category ? 'bg-primary text-primary-foreground' : 'bg-secondary/70 text-foreground hover:bg-secondary'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>.

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skills,key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg ">{skills.name}</h3>
                            </div>

                            <div className="w-full rounded-full bg-secondary/50 h-2 overflow-hidden">
                                <div 
                                className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                style={{width: skills.level + "%"}}
                                />
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foredround">{skills.level}</span>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    )
}