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
      src="http://via.placeholder.com/640x360"
      alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Code Fellows Student</h4>
        <p className="font-bold text-2xl mt-1">Student</p>
        <div className="flex space-x-2 my-2">
        <img
        className="h-10 w-10 rounded-full"
        src="http://via.placeholder.com/640x360"
        alt=""
        />
        <img
        className="h-10 w-10 rounded-full"
        src="http://via.placeholder.com/640x360"
        alt=""
        />
        <img
        className="h-10 w-10 rounded-full"
        src="http://via.placeholder.com/640x360"
        alt=""
        />
        </div>
        <p className="">Started Work .... - Ended</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
        </ul>
      </div>
    </article>
  )
}