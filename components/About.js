import { motion } from "framer-motion"
export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen overflow-hidden flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src="https://cdn.sanity.io/images/kt8urt8e/production/9b735b840d55e2041c6467eee07108dbb9979255-1536x2048.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font semibold">Here is a <span className="underline decoration-[#F7AB0A]/50">little</span>{" "} background</h4>
        <p className="text-base">Hello 👋, my name is Eric Kinuthia, and I am a full-stack software developer with a passion for creating innovative and dynamic web applications. My proficiency in both Python and JavaScript, coupled with my extensive experience working with various front-end and back-end frameworks and technologies, allows me to bring my ideas to life with ease.

          While I initially pursued a degree in Finance from the University of Nairobi, I ultimately decided to transition into software development to follow my true passion. I attended a rigorous 6-month coding bootcamp at Code Fellows, where I honed my technical skills and gained invaluable experience in creating cutting-edge software solutions. Today, I am committed to leveraging my expertise and creativity to revolutionize the tech industry and create technologies that make a positive impact on people's lives.
        </p>
      </div>
    </motion.div>

  )
} 