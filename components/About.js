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
        src="https://placebeard.it/640x360"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font semibold">Here is a <span className="underline decoration-[#F7AB0A]/50">little</span>{" "} background</h4>
        <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at nunc eu odio ultricies efficitur. Curabitur iaculis quam in felis ultrices, sed laoreet mi ultricies. Aliquam bibendum euismod mi, a luctus turpis facilisis in. Integer bibendum luctus sapien, id ullamcorper ipsum sagittis ac. Vivamus semper nunc nibh, a suscipit enim ultricies in. Phasellus quis lectus vel eros sollicitudin vestibulum. Duis dapibus nulla sit amet augue fringilla, vel fringilla eros maximus. Sed blandit purus velit, at tincidunt purus aliquam vel. Vestibulum sodales molestie enim, vitae scelerisque orci suscipit vel. Fusce quis magna ut lacus sodales feugiat eget id ante. Aenean pharetra mi quis elit venenatis, vitae mollis dolor varius. Donec elementum blandit sem, ut euismod turpis consequat in. Suspendisse ullamcorper libero ut arcu finibus, at tempor mauris maximus.
        </p>
      </div>
    </motion.div>

  )
} 