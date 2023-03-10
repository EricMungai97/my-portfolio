import { motion } from "framer-motion";
export default function Projects() {
  const projects = [1,2,3,4,5];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl ">Projects</h3>
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
              src="http://via.placeholder.com/640x360"
              alt=""
              />
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Case Study {i + 1} of {projects.length}:
                  </span>
                  UPS clone
                </h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at nunc eu odio ultricies efficitur. Curabitur iaculis quam in felis ultrices, sed laoreet mi ultricies. Aliquam bibendum euismod mi, a luctus turpis facilisis in. Integer bibendum luctus sapien, id ullamcorper ipsum sagittis ac. Vivamus semper nunc nibh, a suscipit enim ultricies in. Phasellus quis lectus vel eros sollicitudin vestibulum. Duis dapibus nulla sit amet augue fringilla, vel fringilla eros maximus. Sed blandit purus velit, at tincidunt purus aliquam vel. Vestibulum sodales molestie enim, vitae scelerisque orci suscipit vel. Fusce quis magna ut lacus sodales feugiat eget id ante. Aenean pharetra mi quis elit venenatis, vitae mollis dolor varius. Donec elementum blandit sem, ut euismod turpis consequat in. Suspendisse ullamcorper libero ut arcu finibus, at tempor mauris maximus.
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute w-full top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"/>
      </div>
  )
}