import { User,Briefcase, Code } from 'lucide-react';

export const AboutSection = () => {
    return (
         <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl mb-12 font-bold text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Education</h3>

                        <p className="text-lg font-semibold text-muted-foreground mb-1">
                            🎓 B.Tech in Artificial Intelligence and Machine Learning
                        </p>
                        <p className="text-muted-foreground mb-1 text-[17px]">
                            National Institute of Technology, Kurukshetra
                        </p>
                        <p className="italic text-muted-foreground text-[17px]">
                            2024 – Present
                        </p>

                        <p className="text-muted-foreground">
                            💻 Proficient in Python, JavaScript and C++, with hands-on experience in building projects and solving algorithmic problems using data structures and clean code practices.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">Let's Connect</a>

                            {/* <a href="resume.pdf" className="px-6 py-2 border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 rounded-full">Download Resume</a> */}

                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className='h-6 w-6 text-primary'/>
                                </div>

                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>Web Developer</h4>
                                    <p className='text-muted-foreground'>Creating responsive web applications using React and Tailwind CSS.</p>
                                </div>

                            </div>

                        </div>


                        <div className="gradient-border p-6 card-hover">
                             <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className='h-6 w-6 text-primary'/>
                                </div>

                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>Problem Solver</h4>
                                    <p className='text-muted-foreground'>Exploring DSA and algorithms to enhance my ability to solve real-world development problems.</p>
                                </div>

                            </div>
                        </div>


                        <div className="gradient-border p-6 card-hover">
                             <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className='h-6 w-6 text-primary'/>
                                </div>

                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>Learning Through Projects</h4>
                                    <p className='text-muted-foreground'>Currently building real-world projects to strengthen my development skills and gain practical experience.</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
         </section>
    )
}