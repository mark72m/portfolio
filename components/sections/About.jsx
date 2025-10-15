
export const About = () => {

    const frontendSkills = ["React", "React Native", "TypeScript", "TailwindCSS", "JavaScript"];
    const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL", "Appwrite", "Firebase", "NeonDB", "PostgreSQL", "Redis"];
    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-purple-700 bg-clip-text text-transparent">{""} About Me </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        Passionate developer with expertise in building scalable web and mobile applications
                        and creating innovative solutions.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-lime-400 to-purple-700 bg-clip-text text-transparent"> Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}

                                    </span>
                                ))}
                            </div>

                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-lime-400 to-purple-700 bg-clip-text text-transparent"> Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}

                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-lime-400 to-purple-700 bg-clip-text text-transparent"> 👨🏻‍🎓 Education </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>Bachelor of Science in Information Technology  </strong>
                                -- Taita Taveta University (Graduated in 2023)
                            </li>
                            <li>
                                Relevent Coursework: Data Structures and Algorithms, CISCO Networking, Web Development, Mobile App Development, Database Management, Cloud Computing, Software Engineering
                            </li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-lime-400 to-purple-700 bg-clip-text text-transparent"> 👨🏻‍💻 Work Experience </h3>

                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">
                                    {""}
                                    Web Application Designer Webriy (Present) </h4>
                                <p>
                                    Web Development and Digital Marketing.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold">
                                    {""}
                                    The Independent Electral and Boundaries Commission (IEBC)</h4>
                                <p>
                                    Providing high quality first level ICT support services to the returning officer at the talking center.
                                    Preparation, Configuration and testing of the KIEMS kits in readiness for the eletion.
                                    Restore normal service to the users as quickly as possible by fixing technical problems, fulfilling service requests or answering questions to ensure the users work effectively and any other assigned duties.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold">Kenya National Bureau of Statistics (KNBS)</h4>
                                <p>
                                    Marking the enumeration boundaries.
                                    Administering all questions and recording responses concerning the availability of each person on the night of tallying.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}