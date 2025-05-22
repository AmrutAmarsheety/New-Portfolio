import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <section className="section-wrapper px-4 sm:px-6" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className="grid gap-8 sm:gap-12 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Estimation and BOQ Preparation",
    imgSrc: "https://i.ibb.co/YTbSTDDW/Screenshot-95.png",
    projectLink: "https://drive.google.com/file/d/1dNmehoX7XHRYZiTjfI362O7UckGSuqhv/view?usp=drive_link",
    tech: [ "MS Excel", "Strutural Drawings"],
    description:
      "Click to open and read: Prepared detailed Estimation and BOQ (Bill of Quantities) for construction works, demonstrating cost analysis, quantity take-off, and budgeting skills.",
    modalContent: (
      <>
        <p>
          During my training, I undertook the project titled &quot;Estimation and Bill of Quantity for Police School Staff Quarters&quot;, where I was provided with structural drawings to carry out detailed estimation work. The process began with a thorough analysis of the drawings to understand the structural components involved, including footings, columns, beams, slabs, and masonry works.
        </p>
        <p>
          I then performed quantity take-offs using the standard method prescribed in IS 1200, ensuring accurate measurement of all items.
        </p>
        <p>
          Based on these quantities, I prepared a comprehensive Bill of Quantities (BOQ) that included item descriptions, units, calculated quantities, applicable rates from DSR/PWD schedules, and the total estimated costs. Tools such as AutoCAD were used for drawing interpretation, while MS Excel was utilized for calculations and BOQ formatting. This project helped me develop a strong foundation in quantity surveying, cost estimation, budgeting, and the practical application of construction standards, significantly enhancing my technical and analytical skills in civil engineering.
        </p>
        <p>
      
        </p>
      </>
    ),
  },
  {
    title: "Running account Billing",
    imgSrc: "https://i.ibb.co/YTbSTDDW/Screenshot-95.png",
    
    projectLink: "https://drive.google.com/file/d/1_DCQ1v-bq3kvTiJzv2j2aO1QLFmrGgAe/view?usp=drive_link",
    tech: [ "CPWD Norms", "MS Excel", "Strutural Drawings"],
    description:
      "Click to read: Prepared and managed billing documentation for a school construction project, ensuring accurate measurement, verification, and contractor coordination.",
    modalContent: (
      <>
        <p>
          During my internship, I was responsible for preparing bills for a school construction project, ensuring accuracy in quantity measurements and alignment with the project&apos;s progress stages.
        </p>
        <p>
          I prepared running account (RA) bills, verified on-site work completion, and coordinated with contractors for timely approvals and payment processes. 
        </p>
        <p>
          This experience helped me develop strong skills in billing documentation, financial management, and project coordination.
        </p>
        <p>
          Click to view the bill {":)"}
        </p>
      </>
    ),
  },
  {
    title: "Survey and Highway estimate",
    imgSrc:"https://i.ibb.co/tMSGcvLY/Screenshot-96.png",
    
    projectLink: "https://drive.google.com/file/d/1w-Mcvkfqi9GptFxEpIsiLN0SQ-b09eg5/view?usp=sharing",
    tech: ["Meauserment Sheet", "MS Excel", "Survey instruments", "Auto Level"],
    description:
      "Executed profile leveling, fly leveling, and contour leveling to ensure accurate measurements and site layout during a school construction project.",
    modalContent: (
      <>
        <p>
        During my training for the project, I executed various surveying tasks such as profile leveling, fly leveling, and contour leveling
        </p>
        <p>
        These activities involved precise measurement of ground levels, setting out reference points, and preparing detailed survey reports based on project requirements. I used standard surveying instruments and techniques to ensure accuracy in data collection and site layout  {":)"}
        </p>
        <p>
        This experience strengthened my technical skills in surveying, site planning, and quality control, while also improving my ability to interpret drawings and coordinate with the execution team
        </p>
        <p>
        Click to read: Executed profile, fly, and contour leveling during a school construction project, ensuring accurate site measurements and layout verification.
        </p>
      </>
    ),
  },
  {
    title: "Quantity Survey",
    imgSrc: "https://i.ibb.co/YTXKZSdL/Screenshot-97.png",
    code: "https://drive.google.com/file/d/11vBy_VoimYAOgnrrXXwuA-MF5LWq0QBa/view?usp=sharing",
    projectLink: "https://drive.google.com/file/d/11vBy_VoimYAOgnrrXXwuA-MF5LWq0QBa/view?usp=sharing",
    tech: ["Constrution Materials ", "Denisty Of Strutural Materials", "Strutural Drawings"],
    description:
      "Carried out quantity take-offs, cost estimation, and work verification to support billing and cost management in a  construction project.",
    modalContent: (
      <>
        <p>As part of the school construction project, I was actively involved in quantity surveying tasks, including detailed quantity take-offs, estimation, and cross-verification of material requirements based on drawings and site conditions.</p>
        <p>
          I ensured accurate measurement of works executed, supported billing processes, and contributed to cost control by identifying variations and updating quantities accordingly.
        </p>
        <p>  {":)"}</p>
        <p>
          This experience strengthened my technical skills in estimation, attention to detail, and project documentation.
        </p>
        <p>
          Click to read: Performed quantity take-offs, estimations, and verification of executed work for a  construction project to support billing and cost control.
        </p>
      </>
    ),
  },
  {
    title: "Bar Bending Schedule (BBS) Preparation",
    imgSrc:"https://i.ibb.co/27nm1HcJ/Screenshot-98.png",
    
    projectLink: "https://drive.google.com/file/d/1uwaQgdM73FEs8w6JUxfwnGhJ3osTnZIL/view?usp=sharing",
    tech: [ "MS Excel", "Steel Drawings", "IS Codes"],
    description:
      "Prepared Bar Bending Schedules (BBS) for reinforcement detailing and quantity estimation in a school construction project.",
    modalContent: (
      <>
        <p>
          As part of the project, I prepared Bar Bending Schedules (BBS) for various structural elements including footings, columns, beams, and slabs .
        </p>
        <p>
          This involved interpreting structural drawings, calculating cutting lengths, bend deductions, bar shapes, and reinforcement quantities based on IS codes. I ensured that the BBS was accurate and aligned with site requirements, which helped in material planning, cost control, and reducing steel wastage. {":)"}
        </p>
        <p>
          The work improved my technical understanding of reinforcement detailing and my ability to collaborate with execution teams for structural compliance.
        </p>
        <p>
          Click to read: Prepared Bar Bending Schedules (BBS) for structural elements by interpreting drawings and calculating reinforcement quantities for a construction project.
        </p>
      </>
    ),
  },


];
