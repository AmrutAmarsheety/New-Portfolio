import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import { MyLinks } from "../nav/Header";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-4">
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              <span className="bg-indigo-500 text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
                H
              </span>
              ey! I&apos;m Amrut Amarshetty,a motivated and detail-oriented Civil Engineering graduate with a strong foundation in site execution, Auto cad, Estimation, Billing etc
              
              
    .
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
            I have gained valuable field experience through internships and training, including work under the Smart City Mission – Hubballi-Dharwad, where I was involved in projects like the Green Mobility Corridor and the Integrated Sports Complex.

To enhance my practical skills, I have also completed professional training from Civil Guruji – Civil Engineer Training Institute, where I received hands-on exposure to key areas such as building estimation, auto billing, Bar Bending Schedule (BBS), rate analysis, and site supervision techniques.
             
            .
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
            My interest lies in delivering cost-effective infrastructure projects. I am passionate about learning new methodologies and strive to continuously improve my technical and managerial abilities. 


            I
              
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
            I aim to contribute to a dynamic construction firm where I can take part in impactful development while growing professionally.
              
               let&apos;s connect
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm text-indigo-300">
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
