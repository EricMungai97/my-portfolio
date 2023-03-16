import { motion } from "framer-motion";
import Link from "next/link";
export default function Projects() {
  const projects = [
    {
      name: "MovieFynder",
      imageSrc: "https://cdn.sanity.io/images/kt8urt8e/production/6febe76a4c93c56b4b02320574ba496a38dde338-1852x967.png?w=2000&fit=max&auto=format",
      summary: "This project was developed to create a user-friendly interface for moviegoers to conveniently access movie showtimes at nearby cinemas. The project utilizes several technologies including React JS, Express JS, and Node JS for the front-end and back-end development, while a Restful API was used to retrieve the showtime data. Additionally, a MongoDB database was integrated to store and manage the data efficiently. Through these technologies, users are able to easily search for movie showtimes, choose their preferred cinemas and movies, and get relevant information such as movie descriptions ",
      url: "https://moviefynder.netlify.app/",
      github: "https://github.com/301-group-project-123/resume-ready-frontend"
    },
    {
      name: "CookieStandAdmin",
      imageSrc: "https://cdn.sanity.io/images/kt8urt8e/production/b7eabb014f4918b75960918ee3d8bbd8f11d2646-1866x688.png?w=2000&fit=max&auto=format",
      summary: "The sales reporting tool web application was designed for a hypothetical chain of cookie stands to streamline the sales reporting process. Users can input data about each stand's sales, including the number of cookies sold per hour, and the application will generate a detailed report that includes information about the total number of cookies sold.",
      url: "https://cookie-stand-admin-323w19zes-ericmungai97.vercel.app/",
      github: "https://github.com/EricMungai97/cookie-stand-admin"
    },
    {
      name: "City Explorer",
      imageSrc: "https://cdn.sanity.io/images/kt8urt8e/production/218c58179ba39d62a870f0c7446ce39a99d9faca-1866x962.png?w=2000&fit=max&auto=format",
      summary: "Explore Your City with Movies is an innovative full-stack web application designed to help users explore a city by combining interactive maps with movie suggestions that showcase the city's unique character and culture.The application utilizes the latest web technologies, including React JS, Express JS, Node JS, and React Bootstrap, to create a dynamic and user-friendly interface that allows users to navigate through the city's streets, landmarks, and attractions while discovering popular movies filmed in the area.",
      url: "https://me-city-explorer.netlify.app/",
      github: "https://github.com/EricMungai97/city-explorer"
    },
    // Add more projects here as needed
  ];
  
  return (
    <motion.div
    initial={{ opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{ duration: 1.5}} 
    className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">Projects</h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
        
          {projects.map((project,i) => (
            <div key={i} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
              <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2}}
              whileInView={{opacity: 1, y: 0 }}
              viewport={{once: true}}
              src={project.imageSrc}
              className="w-4/6"
              alt=""
              />
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Project {i + 1} of {projects.length}:
                  </span>
                   {project.name}
                </h4>
                <p className="text-lg text-center md:text-left">
                {project.summary}
                </p>
                <Link href={project.url} className="text-gray-500 hover:text-gray-900 dark:hover:text-white flex justify-center">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                        <span className="sr-only">GitHub</span>
                        <p>Github Repository</p>
                    </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute w-full top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"/>
      </motion.div>
  )
}