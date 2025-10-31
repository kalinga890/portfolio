import { motion } from "framer-motion";
export const Skills = () => {
    const skills = [
        { name: "HTML", level: 95, category: "frontend" },
        { name: "Css", level: 95, category: "frontend" },
        { name: "JavaScript", level: 90, category: "frontend" },
        { name: "Recat js", level: 50, category: "frontend" },
        { name: "Tailwind CSS", level: 95, category: "frontend" },
        { name: "Node.js", level: 50, category: "frontend" },
        //Backend
        { name: "java", level: 85, category: "backend" },
        { name: "Hibernate", level: 60, category: "backend" },
        { name: "Spring boot", level: 60, category: "backend" },
        { name: "MySql", level: 70, category: "backend" },
        
        //Tools
        { name: "Git/GitHub", level: 90, category: "tools" },
        { name: "Vs Code", level: 95, category: "tools" },

    ]
    const neonColor = [
        "#ff00cc", //pink
        "#9966ff", //purple
        "#ffffff" // white
    ]
    return (
        <section id="skills" className="py-24 px-4 relative ">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-secondary">
                    My <span className="text-primary">Skills</span>
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 place-items-center">
                    {skills.map((skill, key) => {
                        const neon = neonColor[key % neonColor.length];
                        return (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, scale: 0.6 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: key * 0.08 }}
                                viewport={{ once: true }}
                                className="relative w-32 h-32 border-2 flex flex-col item-center justify-center"
                                style={{
                                    borderColor: neon,
                                    boxShadow: `0 0 10px 6px ${neon}`,
                                    background: "transparent"
                                }}
                            >
                                <div className="text-2xl font-bold" style={{ color: neon }}>
                                    {skill.level}%
                                </div>
                                <div className="text-sm mt-1 text-secondary uppercase tracking-wide">{skill.name}</div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}