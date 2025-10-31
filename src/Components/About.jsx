import { Bug, Code, Palette } from "lucide-react"

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto mx-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-secondary">
                    About <span className="text-primary"> Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-secondary">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Full stack developer & technology </h3>
                        <p className="text-muted-foreground ">
                           I’m a 2025 Computer Science graduate with strong technical skills in Java, Spring Boot, React, and Python.
                           I’m passionate about developing scalable and high-performance applications, and I’m seeking a full-time Software Developer role 
                           where I can contribute to innovative projects, collaborate within agile teams, and grow my expertise in full-stack
                           and AI-powered development.
                        </p>
                        <p className="text-muted-foreground ">
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="px-6 py-2 rounded-full bg-primary text-primary-foreground 
                            font-medium transition-all duration-300 hover:shaow-[0_0_10px_rgba(139,93,246,0.5)] hover:scale-10s active:scale-95">Get In Contact Me</a>
                             <a 
                             href="/Kalinga_BE_CSE_2025_Java.pdf"
                             download="Kalinga_BE_CSE_2025_Java.pdf"
                             className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                              Download CV
                              </a>
                        </div>
                    </div>

        
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="group prespective w-full h-48">
                            <div className="relative w-full h-full transition-transform duration-700
                            transform-style-preserve-3d">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500
                                to-indigo-600 text-white rounded-xl flex flex-col justify-center
                                item-enter px-4 backface-hidden">

                                <Code  className="h-8 w-8 mb-2"/>
                                <h4 className="text-lg font-bold"> web Development</h4>
                                </div>
                            </div>
                        </div>
                        <div className="group prespective w-full h-48">
                            <div className="relative w-full h-full transition-transform duration-700
                            transform-style-preserve-3d">
                                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl flex flex-col justify-center
                                item-enter px-4 backface-hidden">

                                <Bug  className="h-8 w-8 mb-2"/>
                                <h4 className="text-lg font-bold">Solve Bug</h4>
                                </div>
                            </div>
                        </div>
                        <div className="group prespective w-full h-48">
                            <div className="relative w-full h-full transition-transform duration-700
                            transform-style-preserve-3d">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500
                                to-pink-500 text-white rounded-xl flex flex-col justify-center
                                item-enter px-4 backface-hidden">

                                <Palette  className="h-8 w-8 mb-2"/>
                                <h4 className="text-lg font-bold">Backend develo</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}