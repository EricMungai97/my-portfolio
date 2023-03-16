import { motion } from "framer-motion"
export default function ExperienceCard() {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img 
      initial={{
        y: -100,
        opacity: 0,
      }}
      transition={{duration: 1.2}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      className="rounded-full xl:w-[200px] xl:h-[200px] h-32 w-32 mx-auto object-cover object-center"
      src="https://cdn.sanity.io/images/kt8urt8e/production/dfce832528d949a5d061b349fba70c90f740cd1e-434x434.png?w=2000&fit=max&auto=format"
      alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Code Fellows</h4>
        <p className="font-bold text-2xl mt-1">Student</p>
        <div className="flex space-x-2 my-2">
        <img
        className="h-10 w-10 rounded-full"
        src="https://cdn.sanity.io/images/kt8urt8e/production/7207260a5f6e6997fd31431d6bf71e060c5e9198-4096x4553.png"
        alt=""
        />
        <img
        className="h-10 w-10 rounded-full"
        src="https://cdn.sanity.io/images/kt8urt8e/production/27513962a84d7add2d6536c5dad61dc573912882-900x1020.png"
        alt=""
        />
        <img
        className="h-10 w-10 rounded-full"
        src="https://cdn.sanity.io/images/kt8urt8e/production/71663bc261e49fa0e614ad9adc463490dce8d1f0-474x273.jpg"
        alt=""
        />
        </div>
        <p className="">09/01/2022 - 02/24/2023</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>completed a 6-month full-time coding bootcamp where I gained expertise in Node.js Next.js, React.js, Django, Tailwind CSS, and Express.js. and others. During this time, I created multiple full-stack web applications from scratch, utilizing these technologies to build dynamic, responsive, and user-friendly websites. My experience includes working with databases, APIs, and third-party libraries, as well as collaborating with a team of developers to ensure the projec success. Overall, my technical skills, combined with my passion for coding, have enabled me to develop web applications that meet the needs of various clients and users.</li>
          
        </ul>
      </div>
    </article>
  )
}