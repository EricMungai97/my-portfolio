import { motion } from "framer-motion"
import Skill from "./Skill"
export default function Skills() {
  const Skills = [
    {
    url: "https://cdn.sanity.io/images/kt8urt8e/production/7207260a5f6e6997fd31431d6bf71e060c5e9198-4096x4553.png"
    },
    {
      url: "https://cdn.sanity.io/images/kt8urt8e/production/27513962a84d7add2d6536c5dad61dc573912882-900x1020.png"
    },
    {
      url: "https://cdn.sanity.io/images/kt8urt8e/production/8cec1532ccb82e514c8672b3f615daa069925ce2-474x411.png"
    },
    {
      url: "https://cdn.sanity.io/images/kt8urt8e/production/6724508fa85f3a7a40e365c63afcce61094a23ac-1000x500.png?w=2000&fit=max&auto=format"
    },
    {
      url: "https://cdn.sanity.io/images/kt8urt8e/production/ae35edce19e64c53e5d455b22e8a2c82d093d4c9-1176x1056.png"
    },
    
    {
      url: "https://cdn.sanity.io/images/kt8urt8e/production/7566f8cb9f6befda1cfbc351a8fc05b48b93b4a4-385x270.jpg"
    },
    {
      url: "https://cdn.sanity.io/images/kt8urt8e/production/4294c77911ca99be9b7c0314a16c6695b8f5e28b-5000x2098.png"
    },
    {
      url: "https://cdn.sanity.io/images/kt8urt8e/production/7dce6c151b0a169dac77b76b1803d7ae96c74bac-1366x768.png?w=2000&fit=max&auto=format"
    },
    {
      url: "https://cdn.sanity.io/images/kt8urt8e/production/ff89b55f52f77b97517d7833446117cc0885d715-474x474.png"
    },
    {
      url: "https://cdn.sanity.io/images/kt8urt8e/production/489c32ac74db1654fac1e2b23bb63083dae5deeb-328x180.png?w=2000&fit=max&auto=format"
    },
    {
      url: "https://cdn.sanity.io/images/kt8urt8e/production/ac76768f4d2390cf4d54878666dc8a2ca0a443db-4501x4501.png"
    },
    {
      url: "https://cdn.sanity.io/images/kt8urt8e/production/6f32dc70ad2919b7d234047934106e3f8408f41f-768x384.png?w=2000&fit=max&auto=format"
    },
    {
      url: "https://cdn.sanity.io/images/kt8urt8e/production/25bba98f901c9f5bbd1967ea9da80063f1c41ec8-921x1024.png"
    },
    {
      url:"https://cdn.sanity.io/images/kt8urt8e/production/d44340e810db984f95c629d667e4e010a3ac157d-1470x885.png"
    },
    {
      url: "https://cdn.sanity.io/images/kt8urt8e/production/e952eab3823be2fdd9ae019379daa733856a64d2-1280x1280.png"
    },
    {
      url: "https://cdn.sanity.io/images/kt8urt8e/production/c94621acf13617471eefbb62122edba9100a3fed-474x316.png"
    }
]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <div className="grid grid-cols-4 gap-5">
        {Skills.slice(0, Skills.length / 2).map((skill, idx) => (
          <Skill key={idx} skill={skill} />
        ))}
         {Skills.slice(Skills.length / 2).map((skill, idx) => (
          <Skill key={idx} skill={skill} directionLeft />
        ))}


      </div>
    </motion.div>
  )
}