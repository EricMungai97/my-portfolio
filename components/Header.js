import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/router";
export default function Header() {
  const router = useRouter();

  const handleContactClick = () => {
    router.push("#contact");
  };
    return (
      <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 p-5 xl:items-center">
        <motion.div initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center">
          <SocialIcon url="https://www.linkedin.com/in/eric-kinuthia-488192187/" fgColor="gray" bgColor="transparent" />
          <SocialIcon url="https://github.com/EricMungai97" fgColor="gray" bgColor="transparent" />
          <SocialIcon url="mungaikinus@gmail.com"
            fgColor="gray"
            bgColor="transparent" />
        </motion.div>


        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer">
          <SocialIcon className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
            onClick={handleContactClick}
          />
          <p 
          onClick={handleContactClick}className="uppercase hiddem md:inline-flex text-sm text-gray-4">Get in Touch</p>
        </motion.div>

      </header>
    )
  }