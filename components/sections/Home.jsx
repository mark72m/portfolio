
export const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative">
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-lime-500 via-yellow-500 to-purple-600 bg-clip-text 
                text-transparent leading-right ">
                    Hello, welcome to market.tech my name is Mark
                </h1>

                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    I'm a full-stack software developer with 6+ years of experience in developing user interfaces and mobile applications. My expertise lies in building responsive and performant web applications with React, and cross-platform mobile applications using React Native.
                    I'm proficient in JavaScript, TypeScript, and various related libraries and tools. I've worked on projects ranging from CRM Systems, LMS Systems, Recipe Applications, Fast Food Ordering Apps, Store Management Systems and Many more.

                    I'm passionate about creating intuitive and engaging user experiences, and I'm always eager to learn and adopt new technologies to deliver innovative solutions.
                </p>
                <div className="flex justify-center space-x-4">
                    <a
                        href="#projects"
                        className="bg-violet-700 text-white py-3 px-6 rounded font-medium transition 
                    relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                        View Projects
                    </a>

                    <a
                        href="#contact"
                        className="border border-indigo-600/50 text-blue-500 py-3 px-6 rounded font-medium 
                        transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hoverbg-blue-500/10">
                        Contact Me
                    </a>
                </div>
            </div>

        </section>
    )
}