import { SectionHeader } from "../util/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Hubballi-Dharwad Smart city ",
    position: "Internship",
    time: "08-02-2023 to 02-04-2023. ",
    location: "Hubballi",
    description:
"During my training, I gained hands-on experience in preparing Daily Progress Reports (DPR) and maintaining essential site documentation related to work progress. This helped me develop a clearer understanding of on-site operations, including material handling, safety practices, and site management, especially in reinforced concrete (RCC) works. I also had the opportunity to learn about the planning and development of non-motorized transport (NMT) corridors, which enhanced my knowledge of sustainable urban infrastructure. Additionally, I gained insights into basic execution methods and urban connectivity planning by actively interacting with engineers and site staff, which allowed me to understand the practical aspects of project coordination and implementation.",
    tech: [
      "Site supervision",
      "Daily Progress Reports (DPR) ",

    
  
    
    
      
    ],
  },
  {
    title: "Civil Engineer Training – Civil Guruji Institute",
    position: "Civil Engineering Trainee",
    time: "02/03/2025 -02/05/2025",
    location: "Pune",
    description:
      "As a Civil Engineering Trainee at Civil Guruji Institute, I focused on real-time construction techniques and site-level project handling. The training equipped me with practical knowledge in construction estimation, quantity surveying, and preparation of bar bending schedules (BBS). I gained a solid understanding of site supervision, project execution, and daily work planning. Additionally, I developed the ability to interpret structural and architectural drawings effectively. The program also enhanced my understanding of construction materials and helped me build essential skills in site coordination, progress reporting, and maintaining project documentation.",
    tech: ["detailed project estimation", " Bar Bending Schedule (BBS) ", "Quantity Analysis", "Billing in Construction", "Basics of Surveying", ],
  },
  
];
