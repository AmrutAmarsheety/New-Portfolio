import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";
import { AiFillCode, AiFillSmile } from "react-icons/ai";

export const Stats = () => {
  return (
    <div className="relative mt-8 sm:mt-0">
      <Reveal>
        <div>
          <h4 className="flex items-center mb-4 sm:mb-6">
            <AiFillCode className="text-indigo-500 text-xl sm:text-2xl" />
            <span className="font-bold ml-2 text-base sm:text-lg">Technical Skills</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-8 sm:mb-12">
            <Chip className="text-xs sm:text-sm">Site Supervision & Execution</Chip>
            <Chip className="text-xs sm:text-sm">AutoCAD Drafting & Plan Interpretation</Chip>
            <Chip className="text-xs sm:text-sm">Quantity Surveying & Estimation (BOQ Preparation)</Chip>
            <Chip className="text-xs sm:text-sm">Project Scheduling using MS Excel</Chip>
            <Chip className="text-xs sm:text-sm">Bar Bending Schedule (BBS)</Chip>
            <Chip className="text-xs sm:text-sm">Basic Surveying Tools (Dumpy Level, Measuring Tape)</Chip>
            <Chip className="text-xs sm:text-sm">Familiarity with IS Codes and Building Standards</Chip>
            <Chip className="text-xs sm:text-sm">Billing & BOQ Preparation</Chip>
          </div>
        </div>
      </Reveal>
      {/* <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillSmile className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2">Use for fun</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>Rust</Chip>
            <Chip>Tailwind</Chip>
            <Chip>Java</Chip>
            <Chip>Spring</Chip>
            <Chip>Figma</Chip>
            <Chip>Whimsical</Chip>
            <Chip>Planetscale</Chip>
            <Chip>GraphQL</Chip>
            <Chip>Python</Chip>
            <Chip>FastAPI</Chip>
          </div>
        </div>
      </Reveal> */}
    </div>
  );
};
