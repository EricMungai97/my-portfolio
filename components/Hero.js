import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"
import Link from "next/link"
export default function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Eric Kinuthia",
      "Guy-who-loves-nature",
      "<ButLovesToCodeMore />"
    ],
    loop: true,
    delaySpeed: 2000,
  })
  return <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
    <BackgroundCircles />
      <img className="relative rounded-full h-32 w-32 mx-auto" src="https://ca.slack-edge.com/T039KG69K-U03V0N804HE-a1af50c10b55-512" alt=""/>
      <div className="z-20">
        <h2 className="text-sm ippercse text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
    <h1 className="text-5xl lg:text-6xl font-semibold px-10">
      <span className="mr-3">{text}</span>
      <Cursor cursorColor="#F7AB0A"/>
    </h1>
      <div className="pt-5">
        <Link href="#about">
        <button className="heroButton">About</button>
        </Link> 
        <Link href="#experience">
        <button className="heroButton">Experience</button>
        </Link> 
        <Link href="#skills">
        <button className="heroButton">Skills</button>
        </Link> 
        <Link href="#projects">
        <button className="heroButton">Projects</button>
        </Link>
      </div>
      </div>
  </div>
}