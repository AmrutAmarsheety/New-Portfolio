import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import { MyLinks } from "../nav/Header";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper px-4 sm:px-6">
      <SectionHeader title="About" dir="l" />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6 sm:gap-8">
        <div className="space-y-3 sm:space-y-4">
          <Reveal>
            <p className="leading-relaxed text-zinc-300 text-sm sm:text-base">
              <span className="bg-indigo-500 text-white py-1 sm:py-2 px-2 sm:px-3 rounded font-bold mr-1 float-left text-xl sm:text-2xl">
                H
              </span>
              ey! I&apos;m Amrut Amarshetty, a motivated and detail-oriented Civil Engineering graduate with a strong foundation in site execution, Auto cad, Estimation, Billing etc.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300 text-sm sm:text-base">
              I have gained valuable field experience through internships and training, including work under the Smart City Mission – Hubballi-Dharwad, where I was involved in projects like the Green Mobility Corridor and the Integrated Sports Complex.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300 text-sm sm:text-base">
              To enhance my practical skills, I have also completed professional training from Civil Guruji – Civil Engineer Training Institute, where I received hands-on exposure to key areas such as building estimation, auto billing, Bar Bending Schedule (BBS), rate analysis, and site supervision techniques.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300 text-sm sm:text-base">
              My interest lies in delivering cost-effective infrastructure projects. I am passionate about learning new methodologies and strive to continuously improve my technical and managerial abilities.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300 text-sm sm:text-base">
              I aim to contribute to a dynamic construction firm where I can take part in impactful development while growing professionally. Let&apos;s connect 🔗
            </p>
          </Reveal>
          <Reveal>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-6">
              <div className="flex items-center gap-2 sm:gap-4 text-sm text-indigo-300">
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
