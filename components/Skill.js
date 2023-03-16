import { motion } from "framer-motion"
export default function Skill({skill, directionLeft}) {

  return (
    <div className="flex mx-auto">
  
        <motion.img
          initial={{ 
            x: directionLeft ? -200 : 200,
            opacity: 0 
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src={skill.url}
          className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out mx-auto"
        />
     

    </div>
  )
}