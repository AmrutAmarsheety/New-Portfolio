import Reveal from "../util/Reveal";
import { OutlineButton } from "../buttons/OutlineButton";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="text-slat-100 overflow-hidden py-24 md:py-32">
      <div className="relative">
        <div className="pointer-events-none relative z-10">
          <Reveal>
            <h3 className="pointer-events-auto text-5xl sm:text-7xl font-black text-zinc-100 md:text-8xl">
              Hi, I&apos;m Amrut Amarshetty <span className="text-indigo-500">.</span>
            </h3>
          </Reveal>
          <Reveal>
            <h2 className="pointer-events-auto my-2 text-xl sm:text-2xl text-zinc-300 md:my-4 md:text-4xl">
              I&apos;m a{" "}
              <span className="font-semibold text-indigo-500">
                Civil Engineer
              </span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="pointer-events-auto leading-relaxed md:leading-relaxed max-w-xl text-sm text-zinc-300 md:text-base">
              A Civil Engineering graduate with practical exposure in project execution, billing, and site coordination. This portfolio highlights my academic journey and contributions to infrastructure projects.
            </p>
          </Reveal>
          <Reveal>

            <OutlineButton
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView();
              }}
              className="pointer-events-auto before:bg-indigo-700 hover:text-white hover:border-indigo-700 mt-4 bg-indigo-500 text-zinc-100 border-indigo-500 md:mt-6"
            >
              Contact Me
            </OutlineButton>
          </Reveal>
        </div>
        {/* <DotGrid /> */}
        <Image
        className="absolute right-0 top-[50%] z-0 grid max-w-[75%] -translate-y-[50%]"
          src="https://i.ibb.co/hFsB6JDy/Whats-App-Image-2025-05-22-at-2-06-09-PM.jpg"
          alt='Profile-Img'
          width={400}
          height={400}
        />
      </div>
    </section>
  );
};

export default Hero;
